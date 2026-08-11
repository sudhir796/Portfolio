import { motion } from 'framer-motion'

const tickerItems = [
  "MACHINE LEARNING",
  "COMPUTER VISION",
  "REACT",
  "NODE.JS",
  "FASTAPI",
  "POWER BI",
  "MONGODB",
  "GEMINI API",
  "WHISPER",
  "STREAMLIT",
  "JWT AUTH",
  "DATA ANALYTICS",
]

export default function StackTicker() {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedItems = [...tickerItems, ...tickerItems]

  return (
    <div className="w-full py-4 border-y border-glass-border bg-panel/60 backdrop-blur-md overflow-hidden relative select-none z-20">
      {/* Gradient side masks for ultra-smooth edge fading */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-void to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-void to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap items-center w-fit"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 25,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-text-primary/90 hover:text-cyan transition-colors duration-200">
              {item}
            </span>
            <span className="text-cyan font-mono mx-4 text-xs select-none">
              //
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
