import React, { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export default function MoodBoard() {
  const container = useRef(null)
  const imageRef = useRef(null)
  const textRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: '+=100%',
          scrub: 1,
          pin: true,
        }
      })

      // Image scales down, text scales up
      tl.fromTo(imageRef.current, {
        scale: 1.2,
        filter: 'brightness(1)'
      }, {
        scale: 0.8,
        filter: 'brightness(0.4)',
        ease: 'power2.inOut',
        duration: 1
      }, 0)
      .fromTo(textRef.current, {
        scale: 0.5,
        opacity: 0,
        y: 100
      }, {
        scale: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        duration: 1
      }, 0)

    }, container)
    return () => ctx.revert()
  }, [])

  return (
    <section id="moodboard" ref={container} className="h-screen w-full bg-brand-50 overflow-hidden flex items-center justify-center relative">
      
      {/* Massive Background Image */}
      <div className="absolute inset-0 w-full h-full p-0 md:p-12 box-border">
        <img 
          ref={imageRef} 
          src="/assets/MOOD BOARD.png" 
          className="w-full h-full object-cover rounded-none md:rounded-3xl will-change-transform" 
          style={{ transform: 'translateZ(0)' }} 
          alt="Mood Board" 
        />
      </div>

      {/* Floating Center Text */}
      <div ref={textRef} className="z-10 text-center mix-blend-difference pointer-events-none">
        <h2 className="font-heading text-6xl md:text-[8rem] text-white tracking-[0.1em] leading-none mb-4">MOOD</h2>
        <h2 className="font-heading text-5xl md:text-[6rem] text-white/80 tracking-[0.2em] italic font-light">BOARD</h2>
      </div>

    </section>
  )
}
