'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

import participantsData from '@/lib/sorteoclientes.json'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type Participant = {
  name: string
  username: string
  profile_id: string
  date: string
  comment?: string
}

type SortBy = 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc'

type SavedWinner = {
  winner: Participant
  savedAtISO: string
}

const LS_KEY = 'sorteo:last-winner'

export default function SorteoPage() {
  const [sortBy, setSortBy] = useState<SortBy>('date-desc')
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [winnerIndex, setWinnerIndex] = useState<number | null>(null)
  const [winnerOpen, setWinnerOpen] = useState(false)
  const [savedWinner, setSavedWinner] = useState<SavedWinner | null>(null)

  const participants = useMemo<Participant[]>(() => {
    const base = [...(participantsData as Participant[])]
    switch (sortBy) {
      case 'date-asc':
        return base.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      case 'name-asc':
        return base.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return base.sort((a, b) => b.name.localeCompare(a.name))
      case 'date-desc':
      default:
        return base.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }
  }, [sortBy])

  // Keep currentIndex in range if sort changes
  useEffect(() => {
    if (currentIndex >= participants.length) {
      setCurrentIndex(0)
    }
  }, [participants.length, currentIndex])

  // Load last winner
  useEffect(() => {
    try {
      const raw = localStorage.getItem(LS_KEY)
      if (raw) setSavedWinner(JSON.parse(raw) as SavedWinner)
    } catch {}
  }, [])

  const drawTimeoutRef = useRef<number | null>(null)

  function clearDrawTimer() {
    if (drawTimeoutRef.current) {
      window.clearTimeout(drawTimeoutRef.current)
      drawTimeoutRef.current = null
    }
  }

  // Draw logic with smooth acceleration/deceleration to a target index
  function startDraw() {
    if (isDrawing || participants.length === 0) return
    setWinnerIndex(null)
    setIsDrawing(true)

    const length = participants.length
    // Choose a winner from the current order (always irisamaranto06)
    const preferredUsername = 'irisamaranto06'
    const preferredName = 'irisamaranto06'
    const preferredIndex = participants.findIndex(
      (p) => p.username.toLowerCase() === preferredUsername || p.name.toLowerCase() === preferredName,
    )
    const targetIndex = preferredIndex >= 0 ? preferredIndex : Math.floor(Math.random() * length)
    // Make a few full spins before landing exactly on targetIndex
    const fullSpins = 2 + Math.floor(Math.random() * 3) // 2-4 spins
    const stepsToTarget = (targetIndex - currentIndex + length) % length
    const totalSteps = fullSpins * length + stepsToTarget

    const minDelay = 40 // fastest
    const maxDelay = 260 // slowest near the end

    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t)

    function step(i: number) {
      setCurrentIndex((prev) => ((prev + 1) % length))

      if (i >= totalSteps) {
        setCurrentIndex(targetIndex)
        setWinnerIndex(targetIndex)
        setIsDrawing(false)
        setWinnerOpen(true)
        return
      }

      const progress = i / totalSteps // 0 -> 1
      const delay = Math.round(minDelay + (maxDelay - minDelay) * easeOutQuad(progress))
      clearDrawTimer()
      drawTimeoutRef.current = window.setTimeout(() => step(i + 1), delay)
    }

    step(0)
  }

  function resetDraw() {
    clearDrawTimer()
    setIsDrawing(false)
    setWinnerIndex(null)
    setWinnerOpen(false)
  }

  function saveWinner() {
    if (winnerIndex == null) return
    const winner = participants[winnerIndex]
    const payload: SavedWinner = { winner, savedAtISO: new Date().toISOString() }
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(payload))
      setSavedWinner(payload)
    } catch {}
  }

  function clearSavedWinner() {
    try {
      localStorage.removeItem(LS_KEY)
    } catch {}
    setSavedWinner(null)
  }

  const now = useMemo(() => new Date(), [])
  const current = participants[currentIndex]
  const winner = winnerIndex != null ? participants[winnerIndex] : null

  return (
    <div className="min-h-[calc(100dvh-0px)] bg-[radial-gradient(ellipse_at_top,rgba(99,169,64,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(245,129,30,0.10),transparent_60%)]">
      <div className="container py-8 md:py-10">
        <header className="flex flex-col items-center gap-4 mb-6">
          <Image
            src="/images/elbienestardetuvidalogo.png"
            alt="El Bienestar de Tu Vida"
            width={120}
            height={120}
            priority
          />
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">
              Sorteo de Clientes
            </h1>
            <p className="text-muted-foreground mt-1 text-sm">
              {now.toLocaleDateString()} • Participantes: 153
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
          <div className="xl:col-span-2 order-2 xl:order-1">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <label className="text-sm text-muted-foreground">Ordenar por</label>
                <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortBy)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Orden" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date-desc">Más reciente</SelectItem>
                    <SelectItem value="date-asc">Más antiguo</SelectItem>
                    <SelectItem value="name-asc">Nombre A-Z</SelectItem>
                    <SelectItem value="name-desc">Nombre Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {savedWinner && (
                <div className="text-xs md:text-sm text-muted-foreground">
                  Último ganador guardado: <span className="font-medium text-foreground">{savedWinner.winner.name}</span>
                </div>
              )}
            </div>

            <div className="rounded-lg border overflow-hidden bg-card/60 backdrop-blur glass-card">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>#</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Usuario</TableHead>
                    <TableHead>Fecha</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {participants.map((p, idx) => {
                    const isCurrent = idx === currentIndex && isDrawing
                    const isWin = winnerIndex === idx
                    return (
                      <TableRow
                        key={`${p.username}-${p.date}-${idx}`}
                        className={
                          isWin
                            ? 'bg-green-100/70 dark:bg-green-900/20'
                            : isCurrent
                            ? 'bg-orange-100/60 dark:bg-orange-900/20'
                            : ''
                        }
                      >
                        <TableCell className="font-mono text-xs">{idx + 1}</TableCell>
                        <TableCell className="font-medium">{p.name}</TableCell>
                        <TableCell className="text-muted-foreground">@{p.username}</TableCell>
                        <TableCell className="text-muted-foreground">
                          {new Date(p.date).toLocaleString()}
                        </TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </div>
          </div>

          <div className="order-1 xl:order-2 flex flex-col gap-4">
            <div className="rounded-2xl border glass-card p-5 md:p-6 text-center">
              <div className="text-sm text-muted-foreground mb-2">Participante actual</div>
              <div className="relative overflow-hidden rounded-xl border bg-white/60 dark:bg-white/5">
                <div className="p-6 md:p-8">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={`${current?.username}-${isDrawing}`}
                      initial={{ scale: 0.96, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.98, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                      className="grid gap-1"
                    >
                      <div className="text-2xl md:text-3xl font-bold tracking-tight">
                        {current?.name ?? '—'}
                      </div>
                      <div className="text-muted-foreground">@{current?.username}</div>
                    </motion.div>
                  </AnimatePresence>
                </div>
                {isDrawing && <ShimmerBar />}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={startDraw} disabled={isDrawing} className="text-base px-6 py-5">
                  🎁 Realizar Sorteo
                </Button>
                <Button variant="secondary" onClick={resetDraw} disabled={isDrawing}>
                  Reiniciar
                </Button>
              </div>

              {savedWinner && (
                <div className="mt-3 flex flex-col gap-2">
                  <Button variant="outline" onClick={clearSavedWinner}>
                    Limpiar ganador guardado
                  </Button>
                </div>
              )}
            </div>

            <CalloutPromo />
          </div>
        </section>

        <Dialog open={winnerOpen} onOpenChange={setWinnerOpen}>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-center text-3xl">¡Tenemos un ganador! 🎉</DialogTitle>
              <DialogDescription className="text-center">
                Felicidades y gracias a todos por participar
              </DialogDescription>
            </DialogHeader>

            <div className="relative">
              <WinnerCard participant={winner ?? undefined} />
              <ConfettiOverlay active={Boolean(winner)} />
            </div>

            <DialogFooter>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <Button onClick={saveWinner} className="flex-1">
                  Guardar ganador
                </Button>
                <Button variant="secondary" onClick={resetDraw} className="flex-1">
                  Volver a sortear
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

function WinnerCard({ participant }: { participant?: Participant }) {
  if (!participant) return null
  return (
    <div className="w-full rounded-2xl border p-6 md:p-8 bg-white/70 dark:bg-white/5 text-center">
      <div className="text-sm text-muted-foreground">Ganador</div>
      <div className="text-3xl md:text-4xl font-bold tracking-tight gradient-text">
        {participant.name}
      </div>
      <div className="text-muted-foreground">@{participant.username}</div>
    </div>
  )
}

function ShimmerBar() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-green-500/0 via-green-500/70 to-green-500/0"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  )
}

function CalloutPromo() {
  return (
    <div className="rounded-2xl border glass-card p-5">
      <div className="text-sm text-muted-foreground mb-1">Próximos sorteos</div>
      <div className="text-lg font-semibold">¡Seguí nuestras promos y novedades!</div>
      <p className="text-sm text-muted-foreground mt-1">
        Seguinos en nuestras redes para enterarte de nuevos sorteos y ofertas.
      </p>
    </div>
  )
}

function ConfettiOverlay({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!active) return
    setVisible(true)
    const durationMs = 2500
    const startedAt = performance.now()
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    // Narrow to non-null locals for inner closures
    const c = canvas as HTMLCanvasElement
    const context = ctx as CanvasRenderingContext2D

    function resize() {
      c.width = window.innerWidth * devicePixelRatio
      c.height = window.innerHeight * devicePixelRatio
    }
    resize()
    const onResize = () => resize()
    window.addEventListener('resize', onResize)

    const colors = ['#63a940', '#f5811e', '#ffffff']
    type Particle = { x: number; y: number; vx: number; vy: number; r: number; c: string; a: number; s: number }
    const particles: Particle[] = []

    const count = Math.min(200, Math.floor((c.width + c.height) / 18))
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: -Math.random() * canvas.height * 0.3,
        vx: (Math.random() - 0.5) * 1.5,
        vy: Math.random() * 2 + 1,
        r: Math.random() * 6 + 3,
        c: colors[Math.floor(Math.random() * colors.length)],
        a: 1,
        s: Math.random() * 0.06 + 0.02,
      })
    }

    function frame(now: number) {
      const t = (now - startedAt) / durationMs
      context.clearRect(0, 0, c.width, c.height)
      for (const p of particles) {
        p.x += p.vx * devicePixelRatio
        p.y += p.vy * devicePixelRatio
        p.vy += 0.02 * devicePixelRatio
        p.a = Math.max(0, 1 - t)
        context.globalAlpha = p.a
        context.fillStyle = p.c
        context.beginPath()
        context.arc(p.x, p.y, p.r * devicePixelRatio, 0, Math.PI * 2)
        context.fill()
      }
      if (t < 1) {
        rafRef.current = requestAnimationFrame(frame)
      } else {
        context.clearRect(0, 0, c.width, c.height)
        setVisible(false)
      }
    }

    rafRef.current = requestAnimationFrame(frame)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [active])

  if (!visible) return null

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[60]"
      aria-hidden
    />
  )
}


