import { motion, useReducedMotion } from 'framer-motion'

export default function Footer() {
  const shouldReduceMotion = useReducedMotion()

  const contactChips = [
    {
      label: 'EMAIL',
      value: 'sudhir.d2024cce@sece.ac.in',
      href: 'mailto:sudhir.d2024cce@sece.ac.in',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: 'GITHUB',
      value: 'github.com/sudhir796',
      href: 'https://github.com/sudhir796',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/sudhir-d-44ab69329',
      href: 'https://www.linkedin.com/in/sudhir-d-44ab69329/',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      label: 'RESUME',
      value: 'sudhir_resume.pdf',
      href: '/sudhir_resume.html',
      target: '_blank',
      rel: 'noopener noreferrer',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.7,
        ease: 'easeOut',
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  }

  return (
    <footer id="contact" className="relative w-full py-20 px-6 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="glass-panel p-8 sm:p-12 space-y-12 border border-glass-border relative overflow-hidden"
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-b from-cyan/15 to-transparent blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="space-y-4 text-center max-w-2xl mx-auto">
          <span className="font-mono text-xs text-cyan uppercase tracking-widest block">
            // 07. GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-text-primary tracking-tight">
            Let's build something.
          </h2>
          <p className="font-body text-base text-text-dim leading-relaxed">
            Open for AI/ML engineering internships, computer vision projects, and full-stack software collaborations.
          </p>
        </div>

        {/* 4 Contact Chips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactChips.map((chip) => (
            <motion.a
              key={chip.label}
              href={chip.href}
              target={chip.target}
              rel={chip.rel}
              whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -4 }}
              className="glass-panel p-5 border border-glass-border hover:border-cyan/60 hover:text-cyan hover:shadow-[0_0_20px_rgba(76,240,255,0.25)] transition-all duration-300 flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <div className="flex items-center justify-between text-text-dim group-hover:text-cyan transition-colors mb-3">
                <span className="font-mono text-xs tracking-wider">{chip.label}</span>
                {chip.icon}
              </div>
              <span className="font-body text-xs sm:text-sm font-semibold text-text-primary group-hover:text-cyan transition-colors truncate">
                {chip.value}
              </span>
            </motion.a>
          ))}
        </div>

        {/* Bottom Footer Row */}
        <div className="pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-text-dim">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-text-primary">SUDHIR</span>
            <span>// PORTFOLIO</span>
          </div>
          <div className="text-cyan/80">
            BUILT WITH ANTIGRAVITY // 2026
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
