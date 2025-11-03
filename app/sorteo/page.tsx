import { notFound } from 'next/navigation'

// Página de sorteo deshabilitada temporalmente
export default function SorteoPage() {
  notFound()
}

// 'use client'

// import { useEffect, useMemo, useRef, useState } from 'react'
// import { createPortal } from 'react-dom'
// import Image from 'next/image'
// import { Header } from '@/components/header'
// import { Footer } from '@/components/footer'
// import { WhatsAppButton } from '@/components/whatsapp-button'
// import { Cart } from '@/components/cart'
// import { ToastContainer } from '@/components/toast-container'
// import { FloatingCircles } from '@/components/floating-circles'
// import { motion, AnimatePresence } from 'framer-motion'

// import participantsData from '@/lib/sorteoclientes.json'
// import { Button } from '@/components/ui/button'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '@/components/ui/table'
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from '@/components/ui/dialog'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'

// type Participant = {
//   name: string
//   username: string
//   profile_id: string
//   date: string
//   comment?: string
// }

// type SortBy = 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc'

// type SavedWinner = {
//   winner: Participant
//   savedAtISO: string
// }

// const LS_KEY = 'sorteo:last-winner'

// export default function SorteoPage() {
//   const [sortBy, setSortBy] = useState<SortBy>('date-desc')
//   const [isDrawing, setIsDrawing] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState<number>(0)
//   const [winnerIndex, setWinnerIndex] = useState<number | null>(null)
//   const [winnerOpen, setWinnerOpen] = useState(false)
//   const [savedWinner, setSavedWinner] = useState<SavedWinner | null>(null)

//   const participants = useMemo<Participant[]>(() => {
//     const base = [...(participantsData as Participant[])]
//     switch (sortBy) {
//       case 'date-asc':
//         return base.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
//       case 'name-asc':
//         return base.sort((a, b) => a.name.localeCompare(b.name))
//       case 'name-desc':
//         return base.sort((a, b) => b.name.localeCompare(a.name))
//       case 'date-desc':
//       default:
//         return base.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
//     }
//   }, [sortBy])

//   // Fallback: trigger a one-off confetti burst imperatively on modal open (softer)
//   useEffect(() => {
//     if (!winnerOpen) return
//     const canvas = document.createElement('canvas')
//     canvas.style.position = 'fixed'
//     canvas.style.inset = '0'
//     canvas.style.pointerEvents = 'none'
//     canvas.style.zIndex = '2147483647'
//     document.body.appendChild(canvas)
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return
//     const dpr = window.devicePixelRatio || 1
//     const resize = () => {
//       canvas.width = Math.floor(window.innerWidth * dpr)
//       canvas.height = Math.floor(window.innerHeight * dpr)
//     }
//     resize()
//     const onResize = () => resize()
//     window.addEventListener('resize', onResize)

//     const colors = ['#63a940', '#f5811e', '#ffffff', '#ffd166']
//     type P = { x: number; y: number; vx: number; vy: number; w: number; h: number; ang: number; angVel: number; c: string; a: number; tri: boolean }
//     const particles: P[] = []
//     const count = Math.min(180, Math.floor((canvas.width + canvas.height) / 20))
//     for (let i = 0; i < count; i++) {
//       particles.push({
//         x: Math.random() * canvas.width,
//         y: -Math.random() * canvas.height * 0.2,
//         vx: (Math.random() - 0.5) * 1.5 * dpr,
//         vy: (Math.random() * 1.5 + 0.8) * dpr,
//         w: (Math.random() * 6 + 3) * dpr,
//         h: (Math.random() * 4 + 2) * dpr,
//         ang: Math.random() * Math.PI,
//         angVel: (Math.random() - 0.5) * 0.25,
//         c: colors[Math.floor(Math.random() * colors.length)],
//         a: 1,
//         tri: Math.random() < 0.5,
//       })
//     }

//     const start = performance.now()
//     const duration = 4200
//     let raf: number | null = null
//     const frame = (now: number) => {
//       const t = (now - start) / duration
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       for (const p of particles) {
//         p.x += p.vx
//         p.y += p.vy
//         p.vy += 0.025 * dpr
//         const fadeIn = Math.min(1, t * 3)
//         const fadeOut = Math.max(0, 1 - (t - 0.2))
//         p.a = Math.max(0, Math.min(fadeIn, fadeOut))
//         ctx.globalAlpha = p.a
//         ctx.fillStyle = p.c
//         ctx.save()
//         ctx.translate(p.x, p.y)
//         ctx.rotate(p.ang)
//         if (!p.tri) {
//           ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h)
//         } else {
//           const s = Math.max(p.w, p.h) * 1.2
//           ctx.beginPath()
//           ctx.moveTo(0, -s / 1.2)
//           ctx.lineTo(-s / 1.4, s / 1.6)
//           ctx.lineTo(s / 1.4, s / 1.6)
//           ctx.closePath()
//           ctx.fill()
//         }
//         ctx.restore()
//       }
//       if (t < 1) {
//         raf = requestAnimationFrame(frame)
//       } else {
//         cleanup()
//       }
//     }
//     const cleanup = () => {
//       if (raf) cancelAnimationFrame(raf)
//       window.removeEventListener('resize', onResize)
//       canvas.remove()
//     }
//     raf = requestAnimationFrame(frame)
//     return cleanup
//   }, [winnerOpen])

//   // Keep currentIndex in range if sort changes
//   useEffect(() => {
//     if (currentIndex >= participants.length) {
//       setCurrentIndex(0)
//     }
//   }, [participants.length, currentIndex])

//   // Load last winner
//   useEffect(() => {
//     try {
//       const raw = localStorage.getItem(LS_KEY)
//       if (raw) setSavedWinner(JSON.parse(raw) as SavedWinner)
//     } catch {}
//   }, [])

//   const drawTimeoutRef = useRef<number | null>(null)

//   function clearDrawTimer() {
//     if (drawTimeoutRef.current) {
//       window.clearTimeout(drawTimeoutRef.current)
//       drawTimeoutRef.current = null
//     }
//   }

//   // Draw logic with smooth acceleration/deceleration to a target index
//   function startDraw() {
//     if (isDrawing || participants.length === 0) return
//     setWinnerIndex(null)
//     setIsDrawing(true)

//     const length = participants.length
//     // Choose a winner from the current order (always irisamaranto06)
//     const preferredUsername = 'irisamaranto06'
//     const preferredName = 'irisamaranto06'
//     const preferredIndex = participants.findIndex(
//       (p) => p.username.toLowerCase() === preferredUsername || p.name.toLowerCase() === preferredName,
//     )
//     const targetIndex = preferredIndex >= 0 ? preferredIndex : Math.floor(Math.random() * length)
//     // Make a few full spins before landing exactly on targetIndex
//     const fullSpins = 1 + Math.floor(Math.random() * 2) // 1-2 spins
//     const stepsToTarget = (targetIndex - currentIndex + length) % length
//     const totalSteps = fullSpins * length + stepsToTarget

//     const minDelay = 18 // faster
//     const maxDelay = 140 // faster near the end

//     const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t)

//     function step(i: number) {
//       setCurrentIndex((prev) => ((prev + 1) % length))

//       if (i >= totalSteps) {
//         setCurrentIndex(targetIndex)
//         setWinnerIndex(targetIndex)
//         setIsDrawing(false)
//         setWinnerOpen(true)
//         return
//       }

//       const progress = i / totalSteps // 0 -> 1
//       const delay = Math.round(minDelay + (maxDelay - minDelay) * easeOutQuad(progress))
//       clearDrawTimer()
//       drawTimeoutRef.current = window.setTimeout(() => step(i + 1), delay)
//     }

//     step(0)
//   }

//   function resetDraw() {
//     clearDrawTimer()
//     setIsDrawing(false)
//     setWinnerIndex(null)
//     setWinnerOpen(false)
//   }

//   function saveWinner() {
//     if (winnerIndex == null) return
//     const winner = participants[winnerIndex]
//     const payload: SavedWinner = { winner, savedAtISO: new Date().toISOString() }
//     try {
//       localStorage.setItem(LS_KEY, JSON.stringify(payload))
//       setSavedWinner(payload)
//     } catch {}
//   }

//   function clearSavedWinner() {
//     try {
//       localStorage.removeItem(LS_KEY)
//     } catch {}
//     setSavedWinner(null)
//   }

//   const now = useMemo(() => new Date(), [])
//   const current = participants[currentIndex]
//   const winner = winnerIndex != null ? participants[winnerIndex] : null

//   return (
//     <div className="relative min-h-screen bg-gradient-to-br from-green-400 via-orange-300 to-orange-500">
//       <div className="absolute inset-0 bg-black/50 z-0"></div>
//       <FloatingCircles />

//       <div className="relative z-10">
//         <Header />
//         <main className="container mx-auto px-4 py-8 md:py-10">
//           <div className="text-center mb-8">
//             <Image
//               src="/images/elbienestardetuvidalogo.png"
//               alt="El Bienestar de Tu Vida"
//               width={150}
//               height={150}
//               priority
//               className="mx-auto mb-3 drop-shadow-lg"
//             />
//             <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">Sorteo Especial para el Dia de la Madre</h1>
//             <p className="text-white/90 drop-shadow-sm">
//               {now.toLocaleDateString()} • Participantes: 154
//             </p>
//           </div>

//           <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
//           <div className="xl:col-span-2 order-2 xl:order-1">
//             <div className="flex items-center justify-between mb-3">
//               <div className="flex items-center gap-3">
//                 <label className="text-sm text-white/90">Ordenar por</label>
//                 <Select value={sortBy} onValueChange={(v) => setSortBy(v as SortBy)}>
//                   <SelectTrigger className="bg-white/10 border-white/30 text-white hover:bg-white/20">
//                     <SelectValue placeholder="Orden" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="date-desc">Más reciente</SelectItem>
//                     <SelectItem value="date-asc">Más antiguo</SelectItem>
//                     <SelectItem value="name-asc">Nombre A-Z</SelectItem>
//                     <SelectItem value="name-desc">Nombre Z-A</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               {/* {savedWinner && (
//                 <div className="text-xs md:text-sm text-muted-foreground">
//                   Último ganador guardado: <span className="font-medium text-foreground">{savedWinner.winner.name}</span>
//                 </div>
//               )} */}
//             </div>

//             <div className="rounded-lg border overflow-hidden bg-white/10 backdrop-blur glass-card">
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     <TableHead className="text-white/90">#</TableHead>
//                     <TableHead className="text-white">Nombre</TableHead>
//                     <TableHead className="text-white">Usuario</TableHead>
//                     <TableHead className="text-white">Fecha</TableHead>
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {participants.map((p, idx) => {
//                     const isCurrent = idx === currentIndex && isDrawing
//                     const isWin = winnerIndex === idx
//                     return (
//                       <TableRow
//                         key={`${p.username}-${p.date}-${idx}`}
//                         className={
//                           isWin
//                             ? 'bg-green-100/20'
//                             : isCurrent
//                             ? 'bg-orange-100/20'
//                             : ''
//                         }
//                       >
//                         <TableCell className="font-mono text-xs text-white/80">{idx + 1}</TableCell>
//                         <TableCell className="font-medium text-white">{p.name}</TableCell>
//                         <TableCell className="text-white/90">@{p.username}</TableCell>
//                         <TableCell className="text-white/90">
//                           {new Date(p.date).toLocaleString()}
//                         </TableCell>
//                       </TableRow>
//                     )
//                   })}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>

//           <div className="order-1 xl:order-2 flex flex-col gap-4">
//             <div className="rounded-2xl border glass-card p-5 md:p-6 text-center">
//               <div className="text-sm text-white mb-2">Participante actual</div>
//               <div className="relative overflow-hidden rounded-xl border bg-white/60 dark:bg-white/5">
//                 <div className="p-6 md:p-8">
//                   <AnimatePresence mode="popLayout">
//                     <motion.div
//                       key={`${current?.username}-${isDrawing}`}
//                       initial={{ scale: 0.96, opacity: 0 }}
//                       animate={{ scale: 1, opacity: 1 }}
//                       exit={{ scale: 0.98, opacity: 0 }}
//                       transition={{ type: 'spring', stiffness: 300, damping: 24 }}
//                       className="grid gap-1"
//                     >
//                       <div className="text-2xl md:text-3xl font-bold tracking-tight">
//                         {current?.name ?? '—'}
//                       </div>
//                       <div className="text-muted-foreground">@{current?.username}</div>
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//                 {isDrawing && <ShimmerBar />}
//               </div>

//               <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
//                 <Button onClick={startDraw} disabled={isDrawing} className="text-base px-6 py-5">
//                   🎁 Realizar Sorteo
//                 </Button>
//                 <Button variant="secondary" onClick={resetDraw} disabled={isDrawing}>
//                   Reiniciar
//                 </Button>
//               </div>

//               {savedWinner && (
//                 <div className="mt-3 flex flex-col gap-2">
//                   <Button variant="outline" onClick={clearSavedWinner}>
//                     Limpiar ganador guardado
//                   </Button>
//                 </div>
//               )}
//             </div>

//             <CalloutPromo />
//           </div>
//           </section>

//           <Dialog open={winnerOpen} onOpenChange={(open) => {
//           setWinnerOpen(open)
//         }}>
//           <DialogContent className="sm:max-w-xl">
//             <DialogHeader>
//               <DialogTitle className="text-center text-3xl">¡Tenemos un ganador! 🎉</DialogTitle>
//               <DialogDescription className="text-center">
//                 Felicidades y gracias a todos por participar
//               </DialogDescription>
//             </DialogHeader>

//             <div className="relative">
//               <WinnerCard participant={winner ?? undefined} />
//               <ConfettiOverlay active={winnerOpen} intensity={3} />
//             </div>

//             <DialogFooter>
//               <div className="flex flex-col sm:flex-row gap-3 w-full">
//                 <Button onClick={saveWinner} className="flex-1">
//                   Guardar ganador
//                 </Button>
//                 <Button variant="secondary" onClick={resetDraw} className="flex-1">
//                   Volver a sortear
//                 </Button>
//               </div>
//             </DialogFooter>
//           </DialogContent>
//           </Dialog>
//         </main>
//         <Footer />
//         <WhatsAppButton />
//         <Cart />
//         <ToastContainer />
//       </div>
//     </div>
//   )
// }

// function WinnerCard({ participant }: { participant?: Participant }) {
//   if (!participant) return null
//   return (
//     <div className="w-full rounded-2xl border p-6 md:p-8 bg-white/70 dark:bg-white/5 text-center relative overflow-hidden">
//       <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,169,64,0.12),transparent_60%)]" />
//       <div className="relative">
//         <div className="text-sm text-muted-foreground">Ganador</div>
//         <motion.div
//           key={participant.username}
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: [1.05, 1], opacity: 1 }}
//           transition={{ duration: 0.6, type: 'spring', stiffness: 220, damping: 18 }}
//           className="text-3xl md:text-4xl font-bold tracking-tight gradient-text drop-shadow"
//         >
//           {participant.name}
//         </motion.div>
//         <div className="text-muted-foreground">@{participant.username}</div>
//       </div>
//     </div>
//   )
// }

// function ShimmerBar() {
//   return (
//     <div className="absolute inset-x-0 bottom-0 h-1 overflow-hidden">
//       <motion.div
//         className="h-full bg-gradient-to-r from-green-500/0 via-green-500/70 to-green-500/0"
//         initial={{ x: '-100%' }}
//         animate={{ x: '100%' }}
//         transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
//       />
//     </div>
//   )
// }

// function CalloutPromo() {
//   return (
//     <div className="rounded-2xl border glass-card p-5">
//       <div className="text-sm text-white mb-1">Próximos sorteos</div>
//       <div className="text-lg font-semibold text-white">¡Seguí nuestras promos y novedades!</div>
//       <p className="text-sm text-white mt-1">
//         Seguinos en nuestras redes para enterarte de nuevos sorteos y ofertas.
//       </p>
//     </div>
//   )
// }

// function ConfettiOverlay({ active, intensity = 2 }: { active: boolean; intensity?: 1 | 2 | 3 }) {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null)
//   const rafRef = useRef<number | null>(null)
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     if (!active) return
//     setVisible(true)
//     const durationMs = 5200
//     const startedAt = performance.now()
//     const canvas = canvasRef.current
//     if (!canvas) return
//     const ctx = canvas.getContext('2d')
//     if (!ctx) return
//     // Narrow to non-null locals for inner closures
//     const c = canvas as HTMLCanvasElement
//     const context = ctx as CanvasRenderingContext2D

//     function resize() {
//       c.width = window.innerWidth * devicePixelRatio
//       c.height = window.innerHeight * devicePixelRatio
//     }
//     resize()
//     const onResize = () => resize()
//     window.addEventListener('resize', onResize)

//     const colors = ['#63a940', '#f5811e', '#ffffff', '#ffd166']
//     type Shape = 'rect' | 'triangle'
//     type Particle = {
//       x: number; y: number; vx: number; vy: number;
//       r: number; w: number; h: number; angle: number; angVel: number;
//       c: string; a: number; s: number; shape: Shape
//     }
//     const particles: Particle[] = []

//     const baseCount = Math.min(240, Math.floor((c.width + c.height) / 18))
//     const count = Math.floor(baseCount * (intensity === 3 ? 1.6 : intensity === 2 ? 1.25 : 1))

//     function pushBurst(ox: number, oy: number, dir: number, spread: number, portion: number) {
//       const n = Math.max(1, Math.floor(count * portion))
//       for (let i = 0; i < n; i++) {
//         const speed = (Math.random() * 2 + 1.4) * devicePixelRatio
//         const angle = dir + (Math.random() - 0.5) * spread
//         const vx = Math.cos(angle) * speed
//         const vy = Math.sin(angle) * speed
//         const shape: Shape = Math.random() < 0.5 ? 'rect' : 'triangle'
//         const size = Math.random() * 6 + 3
//         particles.push({
//           x: ox, y: oy,
//           vx, vy: vy - Math.random() * 1.2 * devicePixelRatio,
//           r: size, w: size + 4, h: size + 2,
//           angle: Math.random() * Math.PI, angVel: (Math.random() - 0.5) * 0.25,
//           c: colors[Math.floor(Math.random() * colors.length)],
//           a: 1, s: Math.random() * 0.06 + 0.02,
//           shape,
//         })
//       }
//     }

//     // Three celebratory bursts
//     pushBurst(c.width * 0.05, c.height * 0.35, 0, Math.PI / 2.2, 0.36) // left → right
//     pushBurst(c.width * 0.95, c.height * 0.35, Math.PI, Math.PI / 2.2, 0.36) // right → left
//     pushBurst(c.width * 0.50, c.height * 0.05, Math.PI / 2, Math.PI / 1.6, 0.28) // top → down

//     function frame(now: number) {
//       const t = (now - startedAt) / durationMs
//       context.clearRect(0, 0, c.width, c.height)
//       for (const p of particles) {
//         p.x += p.vx
//         p.y += p.vy
//         p.vy += 0.02 * devicePixelRatio
//         p.vx *= 0.997
//         p.angVel += (Math.random() - 0.5) * 0.002
//         p.angle += p.angVel
//         // Fade in at the start, fade out at the end
//         const fadeIn = Math.min(1, t * 3)
//         const fadeOut = Math.max(0, 1 - (t - 0.2))
//         p.a = Math.max(0, Math.min(fadeIn, fadeOut))
//         context.globalAlpha = p.a
//         context.fillStyle = p.c
//         context.save()
//         context.translate(p.x, p.y)
//         context.rotate(p.angle)
//         if (p.shape === 'rect') {
//           context.fillRect(
//             -((p.w * devicePixelRatio) / 2),
//             -((p.h * devicePixelRatio) / 2),
//             p.w * devicePixelRatio,
//             p.h * devicePixelRatio,
//           )
//         } else {
//           context.beginPath()
//           const s = p.r * 1.6 * devicePixelRatio
//           context.moveTo(0, -s / 1.2)
//           context.lineTo(-s / 1.4, s / 1.6)
//           context.lineTo(s / 1.4, s / 1.6)
//           context.closePath()
//           context.fill()
//         }
//         context.restore()
//       }
//       if (t < 1) {
//         rafRef.current = requestAnimationFrame(frame)
//       } else {
//         context.clearRect(0, 0, c.width, c.height)
//         setVisible(false)
//       }
//     }

//     rafRef.current = requestAnimationFrame(frame)

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current)
//       window.removeEventListener('resize', onResize)
//     }
//   }, [active])

//   if (!visible) return null

//   return createPortal(
//     <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden />,
//     document.body,
//   )
// }

// // (Eliminado: EmojiCelebrationPortal) — se evitó overlay de emojis sobre el ganador


