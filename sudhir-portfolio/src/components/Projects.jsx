import { motion, useReducedMotion } from 'framer-motion'

const projectsData = [
  {
    id: 'launchpad-ai',
    name: 'LaunchPad AI',
    status: 'IN PROGRESS',
    accent: 'violet',
    teamBadge: 'TEAM OF 3 // 36-HR HACKATHON',
    description:
      'A 7-agent pipeline that takes a raw startup idea and pushes it through Idea Validation, Patent & Prior Art Search, Market Research, Competitor Analysis, Business Model Generation, Pitch Deck Generation, and Investor Matching — producing an investor-ready pitch end to end. Built in 36 hours with a 3-person team for the AGENTVERSE Grand Challenge 2026. Patent search runs against the real USPTO PatentsView API rather than generic web search, and investor matching is grounded in live web search instead of a static dataset.',
    stack: ['Python', 'FastAPI', 'Multi-Agent', 'Next.js', 'Gemini', 'Groq'],
    colSpan: 'col-span-1 md:col-span-2',
    featured: true,
  },
  {
    id: 'faceguard',
    name: 'FaceGuard',
    status: 'LEARNING PROJECT',
    accent: 'violet',
    description:
      'AI-powered anti-spoofing face authentication system. ML backend complete (MobileNetV3Small + custom ANN); React Native frontend is an ongoing lesson in mobile networking.',
    stack: ['MobileNetV3', 'Custom ANN', 'React Native', 'Computer Vision'],
    colSpan: 'col-span-1',
  },
  {
    id: 'retailiq',
    name: 'RetailIQ',
    status: 'IN PROGRESS',
    accent: 'cyan',
    description:
      'Retail data analytics platform built to satisfy AIML and Data Science requirements at once — a 15-week phased build across EDA, ML modeling, a Power BI dashboard, and a Streamlit app.',
    stack: ['Python', 'ML Models', 'Power BI', 'Streamlit'],
    colSpan: 'col-span-1',
  },
  {
    id: 'lost-found',
    name: 'Lost & Found Portal',
    status: 'SHIPPED',
    accent: 'cyan',
    description:
      'Campus lost-and-found platform built around privacy-first in-app messaging, so nobody trades phone numbers to recover a lost item.',
    stack: ['React 19', 'Node/Express', 'MongoDB', 'JWT Auth'],
    colSpan: 'col-span-1',
  },
  {
    id: 'study-tool',
    name: 'Study Tool Extension',
    status: '5/6 PHASES',
    accent: 'cyan',
    description:
      'Chrome extension turning webpages, YouTube videos, and PDFs into flashcards, quizzes, and a chatbot. Local Whisper handles transcription — no audio leaves the machine.',
    stack: ['FastAPI', 'Gemini API', 'Whisper (local)', 'Chrome Ext'],
    colSpan: 'col-span-1',
  },
  {
    id: 'health-insurance-assistant',
    name: 'AI Health Insurance Assistant',
    status: 'SHIPPED',
    accent: 'cyan',
    description:
      'A RAG-based assistant that answers health insurance policy questions. Built a PDF ingestion pipeline to extract and chunk policy documents, then wired LLaMA 3 (via OpenRouter) to generate context-aware answers grounded in the actual policy text.',
    stack: ['Python', 'LLaMA 3', 'RAG', 'Docling', 'LiteLLM'],
    colSpan: 'col-span-1',
  },
  {
    id: 'cctv-violence-detection',
    name: 'CCTV Violence Detection System',
    status: 'IN PROGRESS',
    accent: 'violet',
    description:
      'A deep learning system that flags violent activity in CCTV footage. Preprocessed video datasets by frame-rate filtering and removing black-and-white footage, then extracts frames/features to train CNN/LSTM models for violence classification.',
    stack: ['Python', 'CNN/LSTM', 'OpenCV', 'Video Processing'],
    colSpan: 'col-span-1',
  },
  {
    id: 'hospital-suite',
    name: 'Hospital Management Suite',
    status: 'CONCEPT / EARLY BUILD',
    accent: 'violet',
    description:
      'Four ideas from asking hospital staff what breaks their day: severity-based triage queueing, an audience-adaptive report summarizer, voice-to-text visit notes, and ML-based ambulance routing that avoids traffic before it clears.',
    stack: ['Triage Logic', 'NLP Summarization', 'Speech-to-Text', 'ML Routing'],
    colSpan: 'col-span-1 md:col-span-2',
    featured: true,
  },
]

export default function Projects() {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
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
    <section id="projects" className="relative w-full py-24 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-4 mb-12">
        <span className="font-mono text-xs text-cyan uppercase tracking-widest block">
          // 05. FEATURED WORK
        </span>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-text-primary tracking-tight">
            Systems shipped & under active build.
          </h2>
          <p className="font-mono text-xs text-text-dim max-w-xs">
            Showing 8 selected architectures across AI/ML, multi-agent systems, full-stack, and computer vision.
          </p>
        </div>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {projectsData.map((project, idx) => {
          const isCyan = project.accent === 'cyan'

          return (
            <motion.div
              key={project.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      y: -6,
                      scale: 1.01,
                      transition: { type: 'spring', stiffness: 300, damping: 20 },
                    }
              }
              className={`glass-panel p-6 sm:p-8 flex flex-col justify-between relative group border transition-all duration-300 ${project.colSpan} ${
                isCyan
                  ? 'hover:border-cyan/50 hover:shadow-[0_0_25px_rgba(76,240,255,0.18)]'
                  : 'hover:border-violet/50 hover:shadow-[0_0_25px_rgba(139,92,246,0.18)]'
              }`}
            >
              {/* Top Row: Name and Status Badges */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary group-hover:text-cyan transition-colors duration-300">
                    {project.name}
                  </h3>

                  <div className="flex items-center gap-2 flex-wrap">
                    {/* Optional Team Badge */}
                    {project.teamBadge && (
                      <span className="font-mono text-[10px] text-text-dim bg-white/5 border border-glass-border px-2.5 py-1 rounded-full flex items-center gap-1 tracking-wider">
                        <svg className="w-3 h-3 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {project.teamBadge}
                      </span>
                    )}

                    {/* Status Pill */}
                    <span
                      className={`font-mono text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full border whitespace-nowrap flex items-center gap-1.5 ${
                        isCyan
                          ? 'bg-cyan/10 border-cyan/30 text-cyan shadow-[0_0_10px_rgba(76,240,255,0.2)]'
                          : 'bg-violet/10 border-violet/30 text-violet shadow-[0_0_10px_rgba(139,92,246,0.2)]'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isCyan ? 'bg-cyan animate-pulse' : 'bg-violet animate-pulse'
                        }`}
                      />
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="font-body text-sm text-text-dim leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Row: Tech Stack Chips */}
              <div className="pt-6 mt-6 border-t border-glass-border flex flex-wrap gap-2">
                {project.stack.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="font-mono text-xs text-text-dim px-2.5 py-1 rounded-md bg-white/5 border border-glass-border group-hover:border-white/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
