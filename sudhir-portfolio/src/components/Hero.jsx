import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring, useReducedMotion, useInView, animate } from 'framer-motion'
import BackgroundOrbs from './BackgroundOrbs'
import NeuralCanvas from './NeuralCanvas'

// CountUp Animated Number Component
function CountUpNumber({ target, decimals = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const shouldReduceMotion = useReducedMotion()
  const motionVal = useMotionValue(0)
  const [displayVal, setDisplayVal] = useState(shouldReduceMotion ? target : 0)

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayVal(target)
      return
    }

    if (isInView) {
      const controls = animate(motionVal, target, {
        duration: 2,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          setDisplayVal(decimals > 0 ? latest.toFixed(decimals) : Math.round(latest))
        },
      })
      return () => controls.stop()
    }
  }, [isInView, target, decimals, motionVal, shouldReduceMotion])

  return <span ref={ref}>{displayVal}</span>
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const [leetcodeCount, setLeetcodeCount] = useState(88)

  // Fetch live LeetCode stats with graceful fallback
  useEffect(() => {
    let isMounted = true
    fetch('/api/leetcode-stats')
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && typeof data?.solved === 'number' && data.solved > 0) {
          setLeetcodeCount(data.solved)
        }
      })
      .catch(() => {
        // Fallback silently to static default
      })
    return () => {
      isMounted = false
    }
  }, [])

  // Motion values for 3D Tilt Card
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-150, 150], [12, -12]), { stiffness: 250, damping: 25 })
  const rotateY = useSpring(useTransform(mouseX, [-150, 150], [-12, 12]), { stiffness: 250, damping: 25 })

  const handleMouseMove = (e) => {
    if (shouldReduceMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const headlineText = "Building applied AI systems."
  const words = headlineText.split(" ")

  const wordVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30, filter: shouldReduceMotion ? 'none' : 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: shouldReduceMotion ? 0.1 : 0.6, ease: 'easeOut' },
    },
  }

  const chips = [
    "MACHINE LEARNING",
    "FULL-STACK",
    "COMPUTER VISION",
    "DATA ANALYTICS",
  ]

  const stats = [
    { target: 7.865, decimals: 3, label: "CGPA" },
    { target: leetcodeCount, decimals: 0, label: "LeetCode Solved" },
    { target: 883, decimals: 0, label: "Skillrack Solved" },
    { target: 2, decimals: 0, label: "Hackathon Finals" },
  ]

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Background layers */}
      <BackgroundOrbs />
      <NeuralCanvas />

      {/* Main Hero Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center space-y-8"
      >
        {/* 1. Interactive 3D Tilt ID Card */}
        <motion.div variants={itemVariants} className="perspective-1000">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={shouldReduceMotion ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="glass-panel p-6 sm:p-8 max-w-lg mx-auto shadow-2xl relative group cursor-pointer border border-glass-border hover:border-cyan/40 transition-colors duration-500"
          >
            {/* Glossy sheen overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/0 via-white/5 to-white/0 pointer-events-none" />

            <div className="flex flex-col items-center space-y-3" style={{ transform: shouldReduceMotion ? 'none' : 'translateZ(30px)' }}>
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                AVAILABLE
              </div>

              {/* Name */}
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-wider text-text-primary group-hover:text-cyan transition-colors duration-300">
                SUDHIR
              </h2>

              {/* Role Line */}
              <p className="font-mono text-xs sm:text-sm text-text-dim tracking-wide">
                AIML & Data Science Student <span className="text-cyan">/</span> Applied AI Developer
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* 2. Large Headline with Word Stagger */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-text-primary tracking-tight leading-[1.15] flex flex-wrap justify-center gap-x-3 gap-y-1">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={word.includes('AI') ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan to-violet' : ''}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* 3. Subhead */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base sm:text-xl text-text-dim max-w-2xl mx-auto leading-relaxed"
          >
            Face auth, retail analytics, campus tools, study automation — learns by shipping.
          </motion.p>
        </motion.div>

        {/* 4. Horizontal Glass Stat Strip */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-3xl w-full pt-2"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel p-4 flex flex-col items-center justify-center border border-glass-border hover:border-cyan/40 hover:shadow-[0_0_15px_rgba(76,240,255,0.15)] transition-all duration-300 group"
            >
              <div className="font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan to-text-primary group-hover:from-cyan group-hover:to-violet transition-all duration-300">
                <CountUpNumber key={stat.target} target={stat.target} decimals={stat.decimals} />
              </div>
              <div className="font-mono text-[10px] sm:text-xs text-text-dim tracking-wider uppercase mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 5. Glass Chips */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 pt-2"
        >
          {chips.map((chip, idx) => (
            <motion.span
              key={idx}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              className="glass-panel px-4 py-2 text-xs font-mono text-text-dim border border-glass-border hover:border-cyan/50 hover:text-cyan hover:shadow-[0_0_20px_rgba(76,240,255,0.25)] transition-all duration-300"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
