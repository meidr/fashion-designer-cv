import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const container = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)
  const introTextRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // The pinning animation for extreme thorgal-style reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=200%', // Pin for 2 viewport heights
          scrub: 1.5,
          pin: true,
        }
      })

      // Text scales up extremely large, image fades in/scales up
      tl.to(textRef.current, {
        scale: 80, // Massive scale
        opacity: 0,
        ease: 'power3.in',
        duration: 2
      }, 0)
      .fromTo(imageRef.current, {
        scale: 1.5,
        opacity: 0,
        filter: 'blur(20px)'
      }, {
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 2,
        ease: 'power2.out'
      }, 0.5)
      .fromTo(introTextRef.current, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      }, 1.5)

    }, container)

    return () => ctx.revert()
  }, [])

  return (
    <section id="hero" ref={container} className="relative h-screen w-full flex items-center justify-center bg-brand-950 overflow-hidden">
      
      {/* Background Image that will be revealed */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img 
          ref={imageRef} 
          //src="/ff/new-bg-blue.jpeg" 
          src="/assets/PORTOFOLIO DESIGN BAJU - Copy.jpg" 
          className="w-full h-full object-cover will-change-transform" 
          style={{ transform: 'translateZ(0)' }} 
          alt="Centerpiece Background" 
        />
        <div className="absolute inset-0 bg-brand-950/40"></div>
        
        {/* Floating character to reveal along with BG */}
        
        
        <img 
          src="/assets/personwed.png" 
          className="absolute bottom-0 w-[80vw] md:w-[35vw] max-h-[90vh] object-contain object-bottom pointer-events-none " 
          alt="Character" 
        />
      </div>

      {/* Massive Text to fly through */}
      <div className="z-10 flex flex-col items-center justify-center mix-blend-difference pointer-events-none">
        <h1 ref={textRef} className="font-heading text-[15vw] leading-none tracking-[0.05em] text-white font-normal will-change-transform origin-center flex flex-col items-center">
          <span className="block">FASHION</span>
          <span className="block">DESIGNER</span>
        </h1>
      </div>

      <div className="absolute top-28 md:top-auto md:bottom-16 left-1/2 -translate-x-1/2 text-center z-30 w-full px-6">
        <div ref={introTextRef}>
          <p className="font-subheading text-white/90 tracking-[0.4em] uppercase text-xs md:text-sm mb-4 drop-shadow-md"><b>Meilinda A. Rahmawati</b></p>
          <p className="font-body text-white/80 tracking-widest text-xs md:text-sm max-w-lg mx-auto drop-shadow-md">Explore the timeless sophistication and feminine elegance.</p>
        </div>
      </div>
      
    </section>
  )
}
