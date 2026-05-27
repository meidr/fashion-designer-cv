import React, { useRef, useLayoutEffect, useEffect } from 'react'
import { gsap } from 'gsap'
import { Fancybox } from "@fancyapps/ui"
import "@fancyapps/ui/dist/fancybox/fancybox.css"

// All 24 assets
const assets = [
  '/assets/KOKOA.png',
  '/assets/ChatGPT Image May 25, 2026, 04_42_00 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 04_57_51 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 05_01_20 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 05_16_50 PM.png',
  '/assets/WhatsApp Image 2026-05-25 at 16.54.14.jpeg',
  '/assets/KOKOB.png',
  '/assets/ChatGPT Image May 25, 2026, 05_42_29 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 05_50_02 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 06_07_46 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 06_10_04 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 06_16_08 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 06_30_19 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 06_36_20 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 06_46_45 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 06_54_33 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 07_02_54 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 07_05_06 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 07_06_23 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 07_33_03 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 08_09_34 PM.png',
  '/assets/ChatGPT Image May 25, 2026, 08_10_26 PM.png',
  '/assets/PORTOFOLIO DESIGN BAJU - Copy.jpg',
]

const row1 = assets.slice(0, 8)
const row2 = assets.slice(8, 16)
const row3 = assets.slice(16, 24)

export default function Gallery() {
  const containerRef = useRef(null)
  const track1Ref = useRef(null)
  const track2Ref = useRef(null)
  const track3Ref = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      groupAll: true,
      hideScrollbar: true,
    })
    
    return () => {
      Fancybox.destroy()
    }
  }, [])

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%', // Scroll distance to complete animation
          scrub: 1,
          pin: true,
        }
      })

      // Title fades out as we start scrolling
      tl.to(textRef.current, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        ease: 'power2.out'
      }, 0)

      // Move tracks in opposite directions
      // Using xPercent on a container is highly performant (no lag!)
      tl.to(track1Ref.current, {
        xPercent: -50,
        ease: 'none',
        duration: 2
      }, 0)
      
      tl.to(track2Ref.current, {
        xPercent: 50,
        ease: 'none',
        duration: 2
      }, 0)
      
      tl.to(track3Ref.current, {
        xPercent: -30,
        ease: 'none',
        duration: 2
      }, 0)

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="archive" ref={containerRef} className="relative h-screen w-full bg-[#112653] overflow-hidden flex flex-col justify-center gap-4 md:gap-8 py-12">
      
      <div ref={textRef} className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center w-full px-4 flex justify-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 py-4 px-8 rounded-2xl shadow-xl inline-block">
          <h2 className="font-heading text-4xl md:text-6xl text-white tracking-[0.2em]">THE ARCHIVE</h2>
          <p className="font-subheading text-brand-200 tracking-[0.2em] uppercase text-xs mt-4">Scroll to Explore</p>
        </div>
      </div>

      {/* Row 1 - Moves Left */}
      <div className="w-[300vw] md:w-[200vw] h-[25vh] md:h-[28vh] flex items-center gap-4 md:gap-8 will-change-transform" ref={track1Ref} style={{ transform: 'translateZ(0)' }}>
        {row1.map((src, i) => (
          <a data-fancybox="gallery" href={src} key={i} className="h-full flex-shrink-0 aspect-[3/4] md:aspect-auto md:w-[20vw] bg-white/5 p-2 hover-target rounded-sm cursor-zoom-in">
            <img src={src} className="w-full h-full object-cover" alt="" loading="lazy" />
          </a>
        ))}
      </div>

      {/* Row 2 - Moves Right (Starts offset to the left) */}
      <div className="w-[300vw] md:w-[200vw] h-[25vh] md:h-[28vh] flex items-center gap-4 md:gap-8 -ml-[100vw] md:-ml-[50vw] will-change-transform" ref={track2Ref} style={{ transform: 'translateZ(0)' }}>
        {row2.map((src, i) => (
          <a data-fancybox="gallery" href={src} key={i} className="h-full flex-shrink-0 aspect-[3/4] md:aspect-auto md:w-[20vw] bg-white/5 p-2 hover-target rounded-sm cursor-zoom-in">
            <img src={src} className="w-full h-full object-cover" alt="" loading="lazy" />
          </a>
        ))}
      </div>

      {/* Row 3 - Moves Left Slowly */}
      <div className="w-[300vw] md:w-[200vw] h-[25vh] md:h-[28vh] flex items-center gap-4 md:gap-8 will-change-transform" ref={track3Ref} style={{ transform: 'translateZ(0)' }}>
        {row3.map((src, i) => (
          <a data-fancybox="gallery" href={src} key={i} className="h-full flex-shrink-0 aspect-[3/4] md:aspect-auto md:w-[20vw] bg-white/5 p-2 hover-target rounded-sm cursor-zoom-in">
            <img src={src} className="w-full h-full object-cover" alt="" loading="lazy" />
          </a>
        ))}
      </div>

    </section>
  )
}
