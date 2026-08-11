import { motion, useReducedMotion } from 'framer-motion'

export default function About() {
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.8,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.6, ease: 'easeOut' },
    },
  }

  const stats = [
    {
      number: "7",
      label: "Active or shipped projects",
      accent: "from-cyan to-blue-500",
    },
    {
      number: "2",
      label: "Concurrent course tracks — AIML + Data Science",
      accent: "from-violet to-purple-500",
    },
    {
      number: "6",
      label: "Build phases run through Antigravity on the Study Tool alone",
      accent: "from-cyan to-violet",
    },
  ]

  return (
    <section id="about" className="relative w-full py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-12"
      >
        {/* Section Header */}
        <motion.div variants={childVariants} className="space-y-2">
          <span className="font-mono text-xs text-cyan uppercase tracking-widest block">
            // 01. ABOUT ME
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary tracking-tight">
            Engineering intelligence into production.
          </h2>
        </motion.div>

        {/* Two Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Glass Panel with Paragraphs */}
          <motion.div
            variants={childVariants}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 space-y-6 flex flex-col justify-between border border-glass-border hover:border-cyan/30 transition-colors duration-500"
          >
            <div className="space-y-5 font-body text-base text-text-dim leading-relaxed">
              <p>
                I'm an <span className="text-text-primary font-medium">AIML & Data Science student</span> specializing in converting research-grade machine learning algorithms into production-ready software architectures. My focus lies at the intersection of intelligent models and responsive, real-time user experiences.
              </p>
              <p>
                My project portfolio spans computer vision systems like <span className="text-text-primary font-medium">face-recognition attendance</span> and intelligent retail analytics, to AI-driven study automation platforms powered by LLMs like <span className="text-text-primary font-medium">Gemini & Whisper</span>.
              </p>
              <p>
                Rather than building isolated scripts or static demos, I prioritize shipping full-stack products equipped with secure JWT authentication, efficient database schemas, and intuitive glassmorphic user interfaces.
              </p>
            </div>

            <div className="pt-4 border-t border-glass-border flex items-center gap-4 text-xs font-mono text-cyan">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <span>DRIVEN BY CONTINUOUS DEPLOYMENT</span>
            </div>
          </motion.div>

          {/* Right Column: 3 Stacked Stat Glass Panels */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={childVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02, x: 4 }}
                className="glass-panel p-6 border border-glass-border hover:border-violet/40 transition-all duration-300 flex items-center gap-6 group"
              >
                {/* Big Sora Number */}
                <div className="font-display text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-text-primary to-text-dim group-hover:from-cyan group-hover:to-violet transition-all duration-300 min-w-[3.5rem]">
                  {stat.number}
                </div>

                {/* Stat Label */}
                <div className="font-body text-sm text-text-dim group-hover:text-text-primary transition-colors duration-300 leading-snug">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
