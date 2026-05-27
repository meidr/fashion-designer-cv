import React, { useState, useEffect } from 'react'
import { Instagram, Linkedin, MessageCircle, Download, Menu, X } from 'lucide-react'

const sections = [
  { id: 'hero', name: 'Hero' },
  { id: 'intro', name: 'Introduction' },
  { id: 'moodboard', name: 'Mood Board' },
  { id: 'archive', name: 'The Archive' },
  { id: 'finale', name: 'Finale' }
]

export default function SideNav() {
  const [active, setActive] = useState('hero')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let current = 'hero'
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section.id
          }
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScrollTo = (id) => {
    const el = document.getElementById(id)
    setIsOpen(false) // Close menu on mobile after clicking
    if (el) {
      const spacer = el.closest('.pin-spacer') || el
      if (window.lenis) {
        window.lenis.scrollTo(spacer, { duration: 1.5, offset: 0 })
      } else {
        const top = spacer.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <>
      {/* Mobile Burger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-6 right-6 lg:right-8 z-[110] w-12 h-12 bg-white/70 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center shadow-xl text-brand-950 transition-transform active:scale-90 hover-target"
        aria-label="Toggle Menu"
      >
        <div className="relative w-5 h-5 flex items-center justify-center">
          <span className={`absolute transition-all duration-500 ease-in-out ${isOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
            <Menu size={20} strokeWidth={2.5} />
          </span>
          <span className={`absolute transition-all duration-500 ease-in-out ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'}`}>
            <X size={20} strokeWidth={2.5} />
          </span>
        </div>
      </button>

      {/* Navigation Panel */}
      <div 
        className={`fixed right-6 top-24 md:top-1/2 z-[100] flex flex-col items-center gap-6 bg-white/60 md:bg-white/40 backdrop-blur-2xl border border-white/50 rounded-full py-6 px-3 shadow-[0_15px_40px_-5px_rgba(0,0,0,0.2)] md:shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-brand-950 transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] origin-top
        ${isOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-12 opacity-0 scale-95 pointer-events-none'}
        md:!translate-y-[-50%] md:!opacity-100 md:!scale-100 md:!pointer-events-auto`}
      >
        
        {/* Pagination Dots */}
        <div className="flex flex-col gap-2 mb-2 relative group/nav">
          {sections.map((sec, index) => (
            <button 
              key={sec.id} 
              onClick={() => handleScrollTo(sec.id)}
              className="relative group/dot flex items-center justify-center w-8 h-8 hover-target"
              aria-label={`Scroll to ${sec.name}`}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
            >
              <div 
                className={`rounded-full transition-all duration-300 pointer-events-none ${
                  active === sec.id ? 'w-2.5 h-2.5 bg-brand-900 scale-125' : 'w-1.5 h-1.5 bg-brand-900/40 group-hover/dot:bg-brand-900/80'
                }`}
              />
              {/* Tooltip */}
              <div className="absolute right-12 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-md text-[10px] font-bold tracking-widest uppercase opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover/dot:opacity-100 group-hover/dot:translate-x-0 whitespace-nowrap shadow-lg border border-white/50 text-brand-950">
                {sec.name}
              </div>
            </button>
          ))}
        </div>

        <div className="w-6 h-[1px] bg-brand-900/20"></div>

        {/* Social Media Links & CV Download */}
        <div className="flex flex-col gap-4 mt-2">
          <div className="group relative">
            <a 
              href="/FILECV/PORTOFOLIO_FASHION DESIGNER_MEILINDA AGUSTIN RAHMAWATI.pdf" 
              download="CV_Meilinda_Agustin.pdf" 
              className="flex items-center justify-center w-8 h-8 bg-brand-900 text-white rounded-full hover:scale-110 transition-transform hover-target shadow-md" 
              aria-label="Download CV"
            >
              <Download size={14} strokeWidth={2.5} />
            </a>
            <div className="absolute right-12 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-brand-900 text-white text-[10px] font-bold tracking-widest uppercase opacity-0 translate-x-4 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap shadow-lg">
              Download CV
            </div>
          </div>

          <a href="https://wa.me/6282248252676" target="_blank" rel="noreferrer" className="text-brand-900/60 hover:text-brand-900 transition-colors hover-target p-1" aria-label="WhatsApp">
            <MessageCircle size={18} strokeWidth={2} />
          </a>
          <a href="https://instagram.com/meilinda_rahmawati" target="_blank" rel="noreferrer" className="text-brand-900/60 hover:text-brand-900 transition-colors hover-target p-1" aria-label="Instagram">
            <Instagram size={18} strokeWidth={2} />
          </a>
          <a href="https://www.linkedin.com/in/meilinda-agustin-rahmawati-57026332b" target="_blank" rel="noreferrer" className="text-brand-900/60 hover:text-brand-900 transition-colors hover-target p-1" aria-label="LinkedIn">
            <Linkedin size={18} strokeWidth={2} />
          </a>
        </div>
        
      </div>
    </>
  )
}
