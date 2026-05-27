import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { Download } from 'lucide-react'

export default function Intro() {
  const container = useRef(null)
  const marqueeRef = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=150%',
          scrub: 1,
          pin: true,
        }
      })

      // Marquee moving left
      tl.to(marqueeRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: 2
      }, 0)
      
      // Image revealing from bottom
      .fromTo(imageRef.current, {
        y: '100%',
        rotation: 10
      }, {
        y: '0%',
        rotation: 0,
        ease: 'power3.out',
        duration: 1.5
      }, 0.2)

      // Text fading in
      .from(textRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power2.out'
      }, 1)

    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section id="intro" ref={container} className="relative h-screen w-full bg-[#fdfbf7] overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Marquee Text */}
      <div className="absolute top-1/2 -translate-y-1/2 w-[200vw] flex z-0 opacity-10 pointer-events-none">
        <h2 ref={marqueeRef} className="font-heading text-[15vw] whitespace-nowrap text-brand-900 will-change-transform" style={{ transform: 'translateZ(0)' }}>
          MEILINDA A. RAHMAWATI - FASHION DESIGNER - MEILINDA A. RAHMAWATI - FASHION DESIGNER
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 lg:gap-24 h-full">
        
        {/* Revealing Image */}
        <div className="w-56 h-72 md:w-96 md:h-[32rem] flex-shrink-0 overflow-hidden rounded-t-full bg-brand-100 shadow-2xl relative">
          <div ref={imageRef} className="absolute inset-0 w-full h-full will-change-transform">
            <img src="/assets/1.jpeg" className="w-full h-full object-cover" alt="Meilinda" />
          </div>
        </div>

        {/* Text Details */}
        <div ref={textRef} className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="font-subheading text-brand-500 tracking-[0.3em] uppercase text-[10px] md:text-xs mb-3 md:mb-6">Introduction</p>
          <h3 className="font-heading text-2xl md:text-5xl text-brand-950 leading-tight mb-4 md:mb-8">
            Feminine Elegance & <br className="hidden md:block" /> Soft-Masculine Aesthetics
          </h3>
          <p className="font-body text-brand-800/70 text-sm md:text-lg leading-relaxed max-w-[280px] md:max-w-md">
            I create women's and men's fashion with delicate floral touches and pastel color harmonies, blending softness, freshness, and timeless sophistication into every design.
          </p>
          
          <div className="mt-6 md:mt-10">
            <a 
              href="/FILECV/PORTOFOLIO_FASHION DESIGNER_MEILINDA AGUSTIN RAHMAWATI.pdf" 
              download="CV_Meilinda_Agustin.pdf" 
              className="inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-8 md:py-4 bg-brand-900 text-white rounded-full font-body text-[10px] md:text-xs font-bold tracking-widest uppercase hover:bg-brand-800 transition-colors shadow-lg hover-target hover:-translate-y-1"
            >
              <Download size={14} className="md:w-4 md:h-4" strokeWidth={2.5} />
              Download CV
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
