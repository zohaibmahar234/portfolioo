import { useEffect, useRef, useState } from 'react'
import { useLang } from '../context/LanguageContext'

const AVAILABILITY = {
  status: 'available',
}

const phrases = {
  en: ['Computer Scientist', 'Full Stack Developer', 'AI Engineer', 'Fiverr Level 1 Seller'],
  ur: ['کمپیوٹر سائنٹسٹ', 'فل اسٹیک ڈویلپر', 'AI انجینئر', 'فائیور لیول 1 سیلر'],
}

export default function Hero() {
  const { t, lang } = useLang()
  const typeRef = useRef(null)
  const stateRef = useRef({ pIdx: 0, cIdx: 0, deleting: false })
  const [visible, setVisible] = useState(false)

  const badgeKey = `badge_${AVAILABILITY.status}`
  const badgeText = t.hero[badgeKey]
  const badgeColor = AVAILABILITY.status === 'available' ? '#4ade80' : AVAILABILITY.status === 'busy' ? '#fb923c' : '#e6c364'

  useEffect(() => { setTimeout(() => setVisible(true), 100) }, [])

  useEffect(() => {
    stateRef.current = { pIdx: 0, cIdx: 0, deleting: false }
    let timer
    const currentPhrases = phrases[lang] || phrases.en
    const type = () => {
      const { pIdx, cIdx, deleting } = stateRef.current
      const phrase = currentPhrases[pIdx]
      if (typeRef.current) {
        typeRef.current.textContent = deleting ? phrase.substring(0, cIdx - 1) : phrase.substring(0, cIdx + 1)
      }
      const newCIdx = deleting ? cIdx - 1 : cIdx + 1
      let speed = deleting ? 50 : 100
      let newDeleting = deleting
      let newPIdx = pIdx
      if (!deleting && newCIdx === phrase.length) { speed = 2000; newDeleting = true }
      else if (deleting && newCIdx === 0) { newDeleting = false; newPIdx = (pIdx + 1) % currentPhrases.length; speed = 500 }
      stateRef.current = { pIdx: newPIdx, cIdx: newCIdx, deleting: newDeleting }
      timer = setTimeout(type, speed)
    }
    timer = setTimeout(type, 400)
    return () => clearTimeout(timer)
  }, [lang])

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-4 md:px-margin-desktop pt-20 pb-12 max-w-[1440px] mx-auto relative overflow-hidden"
      id="hero"
    >
      <div
        className="flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-16 w-full transition-all duration-700"
        style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)' }}
      >
        {/* Photo — mobile pe upar */}
        <div className="flex-shrink-0 flex items-center justify-center w-full lg:hidden">
          <div className="relative w-44 h-44 sm:w-56 sm:h-56">
            <div className="w-full h-full rounded-full border-2 border-primary/30 p-2">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary"
                style={{ boxShadow: '0 0 30px rgba(230,195,100,0.15)' }}>
                <img src="/zohaib.jpg" alt="Zohaib Mahar" className="w-full h-full object-cover grayscale contrast-110" />
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 w-full text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 md:mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-label-caps text-[11px]"
              style={{ background: `${badgeColor}15`, border: `0.5px solid ${badgeColor}40`, color: badgeColor }}>
              <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: badgeColor }} />
              {badgeText}
            </span>
          </div>

          <h1 className="font-display-lg text-[42px] sm:text-[56px] md:text-[72px] lg:text-[80px] leading-[1.05] text-on-surface mb-3 md:mb-5">
            <span className="text-primary">ZOHAIB</span>{' '}<br />
            <span className="italic">MAHAR</span>
          </h1>

          <div className="mb-6 md:mb-10 h-7">
            <span ref={typeRef} className="font-technical text-sm md:text-technical text-outline typewriter" />
          </div>

          <p className="max-w-xl font-body-md text-sm md:text-body-lg text-on-surface-variant mb-8 md:mb-10 leading-relaxed mx-auto lg:mx-0">
            {t.hero.desc}
          </p>

          <div className="flex flex-wrap gap-3 md:gap-6 justify-center lg:justify-start">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 md:px-10 py-3 md:py-4 bg-primary text-on-primary font-label-caps text-[11px] md:text-label-caps flex items-center gap-2 hover:gap-4 transition-all"
            >
              {t.hero.cta_work}
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </button>
            <a href="/zohaib_cv.pdf" download="Zohaib_Mahar_CV.pdf"
              className="px-6 md:px-10 py-3 md:py-4 border border-primary text-primary font-label-caps text-[11px] md:text-label-caps hover:bg-primary/10 transition-all">
              {t.hero.cta_cv}
            </a>
          </div>
        </div>

        {/* Photo — desktop pe right side */}
        <div className="flex-shrink-0 items-center justify-center hidden lg:flex">
          <div className="relative w-72 h-72 xl:w-96 xl:h-96">
            <div className="w-full h-full rounded-full border-2 border-primary/30 p-3">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary"
                style={{ boxShadow: '0 0 40px rgba(230,195,100,0.15)' }}>
                <img src="/zohaib.jpg" alt="Zohaib Mahar" className="w-full h-full object-cover grayscale contrast-110" />
              </div>
            </div>
            <div className="absolute -inset-2 rounded-full border border-primary/10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40 hidden md:block">
        <span className="material-symbols-outlined text-outline">expand_more</span>
      </div>
    </section>
  )
}
