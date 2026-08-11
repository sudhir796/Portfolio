import { useEffect, useState, useRef } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export default function Cursor() {
  const shouldReduceMotion = useReducedMotion()
  const [isFinePointer, setIsFinePointer] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [trail, setTrail] = useState([])
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })

  // Primary cursor motion values
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Responsive, light spring for primary pointer
  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 })

  const lastSampleTime = useRef(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    // Detect fine pointer (mouse / desktop) vs touch
    const mediaQuery = window.matchMedia('(pointer: fine)')
    setIsFinePointer(mediaQuery.matches)

    const handleMediaChange = (e) => setIsFinePointer(e.matches)
    mediaQuery.addEventListener('change', handleMediaChange)

    if (!mediaQuery.matches) return

    // Apply cursor: none to body on desktop mouse devices
    document.body.classList.add('custom-cursor-active')

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      setCursorPos({ x: clientX, y: clientY })
      mouseX.set(clientX)
      mouseY.set(clientY)

      // Sample trail point every ~50ms if motion is enabled
      const now = Date.now()
      if (!shouldReduceMotion && now - lastSampleTime.current > 50) {
        lastSampleTime.current = now
        setTrail((prev) => [{ id: now, x: clientX, y: clientY }, ...prev].slice(0, 5))
      }

      // Clear trail after 500ms of inactivity
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => {
        setTrail([])
      }, 500)

      // Interactive hover element detection
      const target = e.target
      if (
        target &&
        (target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]') ||
          target.closest('.glass-panel'))
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.body.classList.remove('custom-cursor-active')
      window.removeEventListener('mousemove', handleMouseMove)
      mediaQuery.removeEventListener('change', handleMediaChange)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [mouseX, mouseY, shouldReduceMotion])

  // Don't render on touch devices
  if (!isFinePointer) return null

  // Reduced motion mode: show static non-spring dot
  if (shouldReduceMotion) {
    return (
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#4CF0FF]"
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`,
        }}
      />
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* SVG Neural Connecting Lines */}
      {trail.length > 0 && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {trail.map((point, idx) => {
            const opacity = (1 - (idx + 1) / 6) * 0.4
            return (
              <line
                key={point.id}
                x1={cursorPos.x}
                y1={cursorPos.y}
                x2={point.x}
                y2={point.y}
                stroke="#4CF0FF"
                strokeWidth="1.2"
                strokeOpacity={opacity}
                strokeDasharray={idx > 2 ? '2,2' : 'none'}
              />
            )
          })}
        </svg>
      )}

      {/* Trail Nodes */}
      {trail.map((point, idx) => {
        const opacity = (1 - (idx + 1) / 6) * 0.6
        const scale = 1 - (idx + 1) * 0.12
        return (
          <div
            key={point.id}
            className="absolute top-0 left-0 w-2.5 h-2.5 bg-cyan rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#4CF0FF] transition-opacity duration-300"
            style={{
              transform: `translate3d(${point.x}px, ${point.y}px, 0) scale(${scale})`,
              opacity,
            }}
          />
        );
      })}

      {/* Primary Glowing Cursor Node */}
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        animate={{
          scale: isHovered ? 1.65 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        className="absolute top-0 left-0 w-3.5 h-3.5 rounded-full -translate-x-1/2 -translate-y-1/2 border border-white/80 bg-cyan shadow-[0_0_15px_#4CF0FF,0_0_30px_rgba(76,240,255,0.6)]"
      />
    </div>
  )
}
