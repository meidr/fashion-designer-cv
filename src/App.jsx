import React from 'react'
import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import CustomCursor from './components/CustomCursor'
import SideNav from './components/SideNav'
import Hero from './sections/Hero'
import Intro from './sections/Intro'
import MoodBoard from './sections/MoodBoard'
import Gallery from './sections/Gallery'
import Finale from './sections/Finale'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    
    lenisRef.current = lenis
    window.lenis = lenis // Expose for SideNav

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
      window.lenis = null
      gsap.ticker.remove((time) => lenis.raf(time * 1000))
    }
  }, [])

  return (
    <>
      <CustomCursor />
      <SideNav />
      <div className="noise-overlay"></div>
      <main className="w-full relative bg-brand-50 selection:bg-brand-300 selection:text-white cursor-none">
        <Hero />
        <Intro />
        <MoodBoard />
        <Gallery />
        <Finale />
      </main>
    </>
  )
}

export default App
