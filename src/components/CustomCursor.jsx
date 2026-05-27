import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current

    // Move cursor
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      })
    }

    // Hover effect
    const handleHover = () => {
      gsap.to(cursor, { scale: 3, opacity: 0.5, duration: 0.3, ease: 'power2.out' })
    }

    const handleLeave = () => {
      gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', moveCursor)

    // Add event listeners to all links and buttons
    const hoverElements = document.querySelectorAll('a, button, .hover-target')
    hoverElements.forEach((el) => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      hoverElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-brand-500 rounded-full pointer-events-none mix-blend-difference z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
    ></div>
  )
}
