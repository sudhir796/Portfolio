import { motion, useReducedMotion } from 'framer-motion'

const skillCategories = [
  {
    category: 'LANGUAGES',
    skills: [
      { name: 'C' },
      { name: 'C++', level: 'Intermediate' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Python' },
    ],
    colSpan: 'col-span-1 lg:col-span-2',
  },
  {
    category: 'FRAMEWORKS',
    skills: [
      { name: 'Spring Boot' },
      { name: 'Node.js' },
      { name: 'React' },
    ],
    colSpan: 'col-span-1',
  },
  {
    category: 'DATABASE',
    skills: [
      { name: 'SQL' },
      { name: 'MongoDB' },
    ],
    colSpan: 'col-span-1',
  },
  {
    category: 'TOOLS',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'Postman' },
    ],
    colSpan: 'col-span-1',
  },
  {
    category: 'CORE CONCEPTS',
    skills: [
      { name: 'DSA' },
      { name: 'OOP' },
      { name: 'SQL Fundamentals' },
    ],
    colSpan: 'col-span-1',
  },
]

export default function Skills() {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.1 : 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: shouldReduceMotion ? 0 : index * 0.08,
      },
    }),
  }

  return (
    <section id="skills" className="relative w-full py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-4 mb-12">
        <span className="font-mono text-xs text-cyan uppercase tracking-widest block">
          // 02. TECHNICAL SKILLS
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary tracking-tight">
          Tools & core competencies.
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {skillCategories.map((group, idx) => (
          <motion.div
            key={group.category}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className={`glass-panel p-6 flex flex-col justify-between border border-glass-border hover:border-cyan/30 transition-all duration-300 ${group.colSpan}`}
          >
            <div>
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-glass-border">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                <h3 className="font-mono text-xs font-semibold text-cyan tracking-wider uppercase">
                  // {group.category}
                </h3>
              </div>

              {/* Skill Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="glass-panel px-3 py-1.5 text-xs font-mono text-text-primary border border-glass-border hover:border-cyan/60 hover:text-cyan hover:shadow-[0_0_15px_rgba(76,240,255,0.2)] transition-all duration-200 flex items-center"
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="ml-2 text-[10px] font-mono text-cyan/80 bg-cyan/10 border border-cyan/30 px-1.5 py-0.5 rounded uppercase">
                        {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
