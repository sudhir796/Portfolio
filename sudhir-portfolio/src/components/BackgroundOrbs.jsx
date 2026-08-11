export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-void">
      {/* Orb 1: Cyan top-left */}
      <div 
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan/15 blur-[120px] animate-drift" 
      />

      {/* Orb 2: Violet top-right */}
      <div 
        className="absolute top-1/4 -right-32 w-[600px] h-[600px] rounded-full bg-violet/20 blur-[140px] animate-drift-reverse" 
        style={{ animationDelay: '-5s' }}
      />

      {/* Orb 3: Cyan/Violet blend bottom-center */}
      <div 
        className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-cyan/10 to-violet/15 blur-[130px] animate-drift" 
        style={{ animationDelay: '-10s' }}
      />
    </div>
  )
}
