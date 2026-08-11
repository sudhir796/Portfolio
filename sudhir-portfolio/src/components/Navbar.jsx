import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'WORK', href: '#projects' },
    { name: 'PROFILES', href: '#profiles' },
    { name: 'CONTACT', href: '#contact' },
  ]

  return (
    <motion.header
      initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-void/85 backdrop-blur-md border-b border-glass-border py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Left: Brand + Status */}
        <a
          href="#"
          className="flex items-center gap-3 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded-md p-1"
        >
          <span className="font-display font-bold text-lg text-text-primary group-hover:text-cyan transition-colors">
            SUDHIR
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            AVAILABLE
          </span>
        </a>

        {/* Right: Nav Links */}
        <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar py-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-[11px] sm:text-xs text-text-dim hover:text-cyan transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded px-1 py-0.5"
            >
              <span className="text-cyan/60 mr-1">// 0{idx + 1}.</span>
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  )
}
