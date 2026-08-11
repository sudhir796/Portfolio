import { motion, useReducedMotion } from 'framer-motion'

const achievementsData = [
  {
    title: 'Sri Eshwar ICPC Finalist',
    year: '2025',
    detail: 'Competitive programming collegiate finalist',
  },
  {
    title: 'Code Red 3.0 Finalist',
    year: '2025',
    detail: 'National-level hackathon finalist',
  },
]

const certificationsData = [
  {
    title: 'SQL (Basics, Intermediate)',
    issuer: 'HackerRank',
    year: '2025',
  },
  {
    title: 'Python',
    issuer: 'SpringBoard',
    year: '2025',
  },
  {
    title: 'C Programming',
    issuer: 'IIT Bombay',
    year: '2024',
  },
  {
    title: 'Data Structures',
    issuer: 'Udemy',
    year: '2025',
  },
]

const codingProfilesData = [
  {
    platform: 'LeetCode',
    stat: '88 problems solved',
    url: 'https://leetcode.com/u/el6keC5TtO/',
  },
  {
    platform: 'Skillrack',
    stat: 'Rank 30010 // 883 problems solved // 8 certificates',
    url: 'https://www.skillrack.com/faces/resume.xhtml?id=514776&key=4be087e205fe5955404530838999275d942d9d83',
  },
]

export default function AchievementsProfiles() {
  const shouldReduceMotion = useReducedMotion()

  const blockVariants = {
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
    <section id="profiles" className="relative w-full py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-4 mb-12">
        <span className="font-mono text-xs text-cyan uppercase tracking-widest block">
          // 06. PROFILES & RECOGNITION
        </span>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary tracking-tight">
          Achievements, credentials & competitive stats.
        </h2>
      </div>

      {/* Three Glass Sub-Blocks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {/* Block 1: Achievements */}
        <motion.div
          custom={0}
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel p-6 sm:p-8 border border-glass-border hover:border-cyan/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-glass-border">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <h3 className="font-mono text-xs font-semibold text-cyan tracking-wider uppercase">
                // ACHIEVEMENTS
              </h3>
            </div>

            <ul className="space-y-4">
              {achievementsData.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-cyan font-mono text-sm leading-none mt-1">›</span>
                  <div className="space-y-0.5">
                    <div className="font-display text-sm font-semibold text-text-primary">
                      {item.title} <span className="font-mono text-xs text-cyan">({item.year})</span>
                    </div>
                    <p className="font-body text-xs text-text-dim">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Block 2: Certifications */}
        <motion.div
          custom={1}
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel p-6 sm:p-8 border border-glass-border hover:border-violet/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-glass-border">
              <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
              <h3 className="font-mono text-xs font-semibold text-violet tracking-wider uppercase">
                // CERTIFICATIONS
              </h3>
            </div>

            <ul className="space-y-3.5">
              {certificationsData.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-violet font-mono text-sm leading-none mt-1">✓</span>
                  <div>
                    <div className="font-display text-sm font-semibold text-text-primary">
                      {cert.title}
                    </div>
                    <div className="font-mono text-xs text-text-dim">
                      {cert.issuer} <span className="text-violet/70">// {cert.year}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Block 3: Coding Profiles */}
        <motion.div
          custom={2}
          variants={blockVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel p-6 sm:p-8 border border-glass-border hover:border-cyan/30 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-glass-border">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <h3 className="font-mono text-xs font-semibold text-cyan tracking-wider uppercase">
                // CODING PROFILES
              </h3>
            </div>

            <div className="space-y-4">
              {codingProfilesData.map((profile, idx) => (
                <a
                  key={idx}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-panel p-4 border border-glass-border hover:border-cyan/50 hover:shadow-[0_0_15px_rgba(76,240,255,0.2)] transition-all duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
                >
                  <div className="flex items-center justify-between text-text-primary group-hover:text-cyan transition-colors mb-1">
                    <span className="font-display font-bold text-sm">{profile.platform}</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-text-dim block group-hover:text-text-primary transition-colors truncate">
                    {profile.stat}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
