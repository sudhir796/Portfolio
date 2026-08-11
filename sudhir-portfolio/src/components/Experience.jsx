import { motion, useReducedMotion } from 'framer-motion'

const experiences = [
  {
    id: 'aptitude-guru',
    company: 'Aptitude Guru Pvt Ltd',
    role: 'Full-Stack Developer Intern',
    type: 'In-College Internship',
    period: '2025',
    description:
      'Developed Eluria School of Excellence, a full-stack school management system with role-based access for students, parents, staff, and admin. Implemented secure authentication, RESTful APIs, and a responsive interface for academic and administrative operations.',
    skills: ['HTML', 'CSS', 'React', 'REST APIs', 'MongoDB Atlas', 'Node.js'],
  },
]

export default function Experience() {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (idx) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : idx * 0.1,
      },
    }),
  }

  return (
    <section id="experience" className="relative w-full py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-4 mb-12">
        <span className="font-mono text-xs text-cyan uppercase tracking-widest block">
          // 03. EXPERIENCE
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary tracking-tight">
          Industry & internship practice.
        </h2>
      </div>

      {/* Experience Cards List */}
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.id}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={shouldReduceMotion ? {} : { y: -4 }}
            className="glass-panel p-6 sm:p-8 border border-glass-border hover:border-cyan/40 hover:shadow-[0_0_25px_rgba(76,240,255,0.15)] transition-all duration-300 space-y-6"
          >
            {/* Header: Company, Role, Type, Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-glass-border">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-display text-2xl font-bold text-text-primary">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-xs text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-0.5 rounded-full">
                    {exp.type}
                  </span>
                </div>
                <p className="font-mono text-xs text-text-dim mt-1">
                  {exp.role}
                </p>
              </div>

              <span className="font-mono text-xs font-semibold text-text-dim bg-white/5 border border-glass-border px-3 py-1.5 rounded-lg w-fit">
                {exp.period}
              </span>
            </div>

            {/* Body */}
            <p className="font-body text-sm sm:text-base text-text-dim leading-relaxed">
              {exp.description}
            </p>

            {/* Skills Acquired Chips */}
            <div className="pt-2 flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="font-mono text-xs text-text-dim px-2.5 py-1 rounded-md bg-white/5 border border-glass-border hover:border-cyan/40 hover:text-cyan transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
