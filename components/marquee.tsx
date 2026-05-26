import React from 'react'

const Marquee = () => {

  const designKeywords = [
    "Brand Strategy",
    "High-Fidelity Graphics",
    "Web Development and Design",
    "UI/UX Architecture",
    "Digital Marketing",
    "Ads Campaign",
  ];

  return (
    <section className="py-12 bg-black overflow-hidden border-y border-white/5 relative">
        {/* Ambient Red Glow Behind Marquee */}
        <div className="absolute inset-y-0 left-1/4 w-96 bg-red-600/5 blur-[80px] pointer-events-none" />

        {/* Main Container Wrapper (Handles Hover Pause) */}
        <div className="flex overflow-hidden select-none group hover-pause relative z-10">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-16 min-w-full animate-marquee">
            {[...designKeywords, ...designKeywords, ...designKeywords].map((word, idx) => (
              <div key={`track1-${idx}`} className="flex items-center gap-16">
                <span className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white/40 group-hover:text-white transition-colors duration-300">
                  {word}
                </span>
                {/* Star separator with a touch of gold/red */}
                <span className="w-3 h-3 rotate-45 bg-linear-to-r from-red-600 to-amber-500 block" />
              </div>
            ))}
          </div>

          
        </div>
      </section>
  )
}

export default Marquee