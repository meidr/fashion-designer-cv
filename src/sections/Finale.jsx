import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export default function Finale() {
  const container = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(textRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 70%'
        }
      })
    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section id="finale" ref={container} className="relative overflow-hidden w-full bg-brand-950 text-white py-32 px-6 flex flex-col items-center text-center">
      
      {/* Floral Ornaments */}
      <img src="/ff/59.png" className="absolute -top-20 -left-20 w-64 md:w-[32rem] opacity-20 rotate-12 pointer-events-none" alt="" />
      <img src="/ff/60.png" className="absolute top-1/4 -right-32 w-48 md:w-80 opacity-10 -rotate-45 pointer-events-none" alt="" />
      <img src="/ff/61.png" className="absolute -bottom-20 -right-10 w-64 md:w-[32rem] opacity-20 -rotate-[20deg] pointer-events-none" alt="" />

      <div ref={textRef} className="max-w-2xl relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl tracking-[0.2em] font-light mb-6">TIMELESS</h2>
        <h2 className="font-heading text-3xl md:text-4xl text-brand-400 tracking-[0.1em] font-bold mb-10">SOPHISTICATION</h2>
        <div className="w-12 h-px bg-brand-600 mx-auto mb-8"></div>
        <p className="font-body text-sm md:text-base text-brand-200 tracking-wider mb-12">
          Thank you for exploring my fashion universe.
        </p>
        <div className="flex justify-center space-x-8">
          <a href="https://instagram.com/meilinda_rahmawati" target="_blank" rel="noreferrer" className="font-body text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-300 transition-colors hover-target">Instagram</a>
          <a href="https://www.linkedin.com/in/meilinda-agustin-rahmawati-57026332b" target="_blank" rel="noreferrer" className="font-body text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-300 transition-colors hover-target">LinkedIn</a>
          <a href="https://wa.me/6282248252676" target="_blank" rel="noreferrer" className="font-body text-xs font-bold uppercase tracking-[0.2em] hover:text-brand-300 transition-colors hover-target">WhatsApp</a>
        </div>

        <div className="mt-20 font-body text-[10px] md:text-xs text-brand-500 tracking-[0.3em] uppercase">
          &copy; 2026 Meilinda Agustin Rahmawati
        </div>
      </div>
    </section>
  )
}
