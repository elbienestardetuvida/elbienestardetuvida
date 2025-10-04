# Sistema de Ofertas Dinámicas - El Bienestar de tu Vida

## 🎯 Descripción General

Sistema inteligente de marketing que muestra ofertas personalizadas a los usuarios basándose en su comportamiento de navegación. Incluye 5 ofertas rotativas con códigos de descuento únicos, integración con WhatsApp y tracking de conversiones.

## 🏗️ Arquitectura del Sistema

### Componentes Principales

1. **`lib/offers.ts`** - Lógica central y base de datos de ofertas
2. **`hooks/use-offers.ts`** - Hook para manejo de estado y comportamiento
3. **`components/offers-modal.tsx`** - Modal atractivo para mostrar ofertas
4. **`components/offers-system.tsx`** - Componente principal de integración
5. **`components/offers-stats.tsx`** - Estadísticas de tracking (opcional)

### Flujo de Funcionamiento

```
Usuario navega → Hook monitorea comportamiento → 
Sistema evalúa triggers → Muestra oferta elegible → 
Usuario interactúa → Se registra en tracking
```

## 🎁 Ofertas Disponibles

| Código | Descuento | Categoría | Trigger | Icono |
|--------|-----------|-----------|---------|-------|
| CARNE15 | 15% | Carnes | Visitar ofertas + 2min | 🥩 |
| FRUTA12 | 12% | Frutas | Ver 3+ recetas | 🍎 |
| VERDE10 | 10% | Verduras | 3min navegando | 🥬 |
| POLLO13 | 13% | Aves | Primera visita | 🐔 |
| FAMILIA14 | 14% | Combo | Visitante recurrente | 👨‍👩‍👧‍👦 |

## 🎯 Sistema de Triggers

### Tipos de Triggers

1. **Tiempo**: Basado en minutos de navegación
2. **Páginas**: Número de páginas visitadas
3. **Interacciones**: Clicks, scrolls, etc.
4. **Comportamiento**: Combinación de factores
5. **Primera Visita**: Para nuevos usuarios

### Condiciones Específicas

- `ofertas`: Debe visitar /ofertas
- `recetas`: Debe visitar /recetas
- `frutas`: Debe explorar sección de frutas
- `tiempo_minimo`: Mínimo 2 minutos navegando
- `tiempo_extendido`: Mínimo 5 minutos navegando
- `multiple_secciones`: Debe explorar 2+ secciones
- `visitante_recurrente`: No es primera visita

## 📱 Integración con WhatsApp

### Flujo de Canje

1. Usuario ve modal con código
2. Hace click en "Enviar por WhatsApp"
3. Se abre WhatsApp con mensaje pre-escrito:
   ```
   ¡Hola! Quiero canjear mi código de descuento: [CODIGO]
   
   Oferta: [DESCRIPCION]
   Descuento: [PORCENTAJE]%
   
   ¿Podrían confirmarme la disponibilidad? ¡Gracias!
   ```

### Número de WhatsApp
- **Configurado**: +54 9 3521 418125
- **Modificar en**: `components/offers-modal.tsx` línea 25

## 💾 Almacenamiento Local

### Claves de localStorage

- `elbienestar_offers`: Códigos ya mostrados
- `elbienestar_behavior`: Comportamiento del usuario
- `elbienestar_tracking`: Estadísticas de uso
- `elbienestar_user_id`: ID único del usuario
- `elbienestar_last_reset`: Último reset semanal

### Control de Duplicados

- Un código por usuario por semana
- Reset automático cada lunes
- Verificación antes de mostrar oferta

## 📊 Sistema de Tracking

### Métricas Registradas

- **Total de códigos utilizados**
- **Método de uso**: WhatsApp, Copiado, Screenshot
- **Timestamp de cada uso**
- **ID único del usuario**

### Acceso a Estadísticas

```typescript
import { OffersManager } from '@/lib/offers'

const stats = OffersManager.getTrackingStats()
console.log(stats)
// { total: 15, porMetodo: { whatsapp: 8, copiado: 5, screenshot: 2 } }
```

## 🎨 Personalización del Modal

### Colores y Estilos

- **Fondo**: Gradiente verde-azul
- **Código**: Destacado con animación de pulso
- **Botones**: Verde para acciones principales
- **Animaciones**: Confetti al aparecer

### Elementos Visuales

- Iconos temáticos por oferta
- Badges de descuento
- Fecha de vencimiento
- Instrucciones de uso

## 🔧 Configuración Avanzada

### Modificar Ofertas

Editar `lib/offers.ts` en el array `OFERTAS`:

```typescript
{
  id: 'nueva-oferta',
  codigo: 'NUEVA10',
  descuento: 10,
  categoria: 'nueva-categoria',
  mensaje: '¡Nuevo mensaje!',
  descripcion: '10% OFF en nueva categoría',
  trigger: {
    tipo: 'tiempo',
    valor: 120, // 2 minutos
    condiciones: ['recetas']
  },
  validaHasta: 7,
  icono: '🆕'
}
```

### Ajustar Triggers

Modificar la función `checkConditions` en `OffersManager`:

```typescript
case 'nueva_condicion':
  return behavior.nuevaPropiedad >= valorRequerido
```

## 🚀 Instalación y Uso

### 1. El sistema ya está integrado en `app/layout.tsx`

### 2. Para usar en otros componentes:

```typescript
import { useOffers } from '@/hooks/use-offers'

function MiComponente() {
  const { checkForOffer, behavior } = useOffers()
  
  // Verificar oferta manualmente
  const handleClick = () => {
    checkForOffer()
  }
  
  return <button onClick={handleClick}>Verificar Oferta</button>
}
```

### 3. Para mostrar estadísticas:

```typescript
import { OffersStats } from '@/components/offers-stats'

function AdminPanel() {
  return <OffersStats />
}
```

## 🧪 Testing

### Casos de Prueba

1. **Primera visita**: Debe mostrar oferta de pollo
2. **Navegación 3min**: Debe mostrar oferta de verduras
3. **Visitar ofertas**: Debe mostrar oferta de carnes
4. **Ver 3+ recetas**: Debe mostrar oferta de frutas
5. **Segunda visita**: Debe mostrar oferta familiar

### Limpiar Datos de Prueba

```javascript
// En consola del navegador
localStorage.removeItem('elbienestar_offers')
localStorage.removeItem('elbienestar_behavior')
localStorage.removeItem('elbienestar_tracking')
```

## 🔄 Mantenimiento

### Reset Semanal

El sistema resetea automáticamente cada lunes, pero se puede forzar:

```typescript
OffersManager.resetWeeklyOffers()
```

### Monitoreo de Performance

- El hook actualiza comportamiento cada 30 segundos
- Verificaciones de ofertas cada 2 minutos
- Tracking en tiempo real de interacciones

## 🎯 Próximas Mejoras

- [ ] Ofertas por horario del día
- [ ] Integración con base de datos
- [ ] A/B testing de ofertas
- [ ] Notificaciones push
- [ ] Ofertas por geolocalización
- [ ] Dashboard de administración
