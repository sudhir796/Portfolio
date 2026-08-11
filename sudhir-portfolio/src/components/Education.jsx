import { motion, useReducedMotion } from 'framer-motion'

const educationTimeline = [
  {
    period: '2024 - 2028',
    degree: 'B.E, Computer Science & Engineering (AIML / DS)',
    institution: 'Sri Eshwar College of Engineering',
    score: 'CGPA 7.865 (III sem)',
    status: 'CURRENTLY PURSUING',
  },
  {
    period: '2023 - 2024',
    degree: 'HSC (Class XII)',
    institution: 'Sri Vidya Bharathi Matric Hr Sec School',
    score: '92.83%',
    status: 'COMPLETED',
  },
  {
    period: '2021 - 2022',
    degree: 'SSLC (Class X)',
    institution: 'Sri Vidya Bharathi Matric Hr Sec School',
    score: '94%',
    status: 'COMPLETED',
  },
]

export default function Education() {
  const shouldReduceMotion = useReducedMotion()

  const nodeVariants = {
    hidden: { opacity: 0, x: shouldReduceMotion ? 0 : -25 },
    visible: (idx) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : idx * 0.15,
      },
    }),
  }

  return (
    <section id="education" className="relative w-full py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-4 mb-14">
        <span className="font-mono text-xs text-cyan uppercase tracking-widest block">
          // 04. EDUCATION
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary tracking-tight">
          Academic foundation.
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative pl-6 sm:pl-10 space-y-10 border-l border-glass-border ml-2 sm:ml-4">
        {educationTimeline.map((item, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={nodeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative group"
          >
            {/* Glowing Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 flex items-center justify-center">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan/40 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-void border-2 border-cyan shadow-[0_0_12px_rgba(76,240,255,0.6)] group-hover:bg-cyan transition-colors duration-300" />
              </span>
            </div>

            {/* Timeline Content Card */}
            <div className="glass-panel p-6 sm:p-8 border border-glass-border hover:border-cyan/40 hover:shadow-[0_0_20px_rgba(76,240,255,0.15)] transition-all duration-300 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="font-mono text-xs text-cyan tracking-wider font-semibold">
                  {item.period}
                </span>
                <span className="font-mono text-[10px] text-text-dim bg-white/5 border border-glass-border px-2.5 py-0.5 rounded-full w-fit">
                  {item.status}
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover:text-cyan transition-colors duration-300">
                {item.degree}
              </h3>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 font-mono text-xs text-text-dim border-t border-glass-border">
                <span>{item.institution}</span>
                <span className="text-cyan font-semibold">{item.score}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
