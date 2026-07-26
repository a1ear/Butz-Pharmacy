import { useEffect, useState } from 'react'
import horizontalLogo from '@/imports/BUTZ_Pharmacy_-_png-12.png'
import squareLogo from '@/imports/BUTZ_Pharmacy_-_jpg-01_-_LOGO_.jpg'
import aboutPhoto from '@/imports/photos/about-photo.jpg'
import bottleBanner from '@/imports/Sub_hero_blue.png'
import callingCard from '@/imports/Calling_card.png'

// ─── Scroll reveal hook ───────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = el.dataset.delay ?? '0'
            setTimeout(() => el.classList.add('visible'), Number(delay))
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
// ─── Nav (Apple-Style Translucent Minimalist) ─────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products & Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-xl backdrop-saturate-180 border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
        : 'bg-white/65 backdrop-blur-md backdrop-saturate-180 border-b border-black/[0.04]'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center transition-opacity hover:opacity-90">
            <img
              src={horizontalLogo}
              alt="BUTZ PHARMA Distribution and Supply Inc."
              className="h-9 sm:h-11 w-auto object-contain"
            />
          </a>

          {/* Desktop nav — Apple minimalist typography */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13px] font-medium text-slate-700/80 hover:text-slate-950 transition-colors duration-200 tracking-tight"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Pill */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4.5 py-1.5 bg-[#172758] text-white text-xs font-semibold tracking-tight rounded-full shadow-[0_4px_14px_rgba(23,39,88,0.3)] hover:bg-[#111e45] hover:shadow-[0_6px_18px_rgba(23,39,88,0.4)] transition-all duration-200"
            >
              Contact Us &rarr;
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-slate-100/80 text-slate-700 hover:bg-slate-200/80 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown — Translucent frosted curtain */}
      {mobileOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-2xl border-b border-black/[0.08] shadow-2xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-[#1d3fbb] py-2 border-b border-slate-100/80 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center px-6 py-3 bg-[#172758] text-white text-sm font-semibold rounded-full shadow-md mt-3 hover:bg-[#111e45] transition-all"
            >
              Contact Us Today &rarr;
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center pt-20 sm:pt-24 lg:pt-28 overflow-hidden"
      style={{
        background: 'linear-gradient(140deg, #f7faff 0%, #ebf3fd 35%, #d9e8f8 70%, #cce1f6 100%)',
      }}
    >
      {/* Ambient glowing radial shapes */}
      <div className="absolute -top-24 -left-20 w-[450px] h-[450px] bg-gradient-to-br from-[#1d3fbb]/15 via-[#00a896]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-gradient-to-l from-[#172758]/12 via-[#1d3fbb]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(29,63,187,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(29,63,187,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-24 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left — copy */}
          <div>
            <h1
              className="animate-fade-up delay-100 text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] font-black text-[#0b132a] leading-[1.12] tracking-tight mb-5 sm:mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Pharmaceutical
              <br />
              Distribution
              <br />
              <span className="text-[#1d3fbb]">You Can Trust.</span>
            </h1>
            <p className="animate-fade-up delay-200 text-slate-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-md font-normal">
              BUTZ PHARMA delivers reliable pharmaceutical products and medical supplies to healthcare
              professionals, institutions, and organizations nationwide.
            </p>
            <div className="animate-fade-up delay-300 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#172758] text-white font-semibold text-sm tracking-wide rounded-full shadow-[0_6px_20px_rgba(23,39,88,0.35)] hover:bg-[#111e45] transition-all duration-200"
              >
                Contact Us &rarr;
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/80 backdrop-blur-md border border-slate-300/80 text-slate-700 font-semibold text-sm tracking-wide rounded-full shadow-sm hover:bg-white hover:border-[#172758] hover:text-[#172758] transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right — brand visual */}
          <div className="animate-fade-in delay-200 flex items-center justify-center relative py-4 sm:py-0">
            {/* Background accent shape */}
            <div
              className="absolute right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-0 top-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] rounded-full opacity-[0.12] pointer-events-none"
              style={{ background: 'radial-gradient(circle, #1d3fbb 0%, transparent 70%)' }}
            />

            {/* Logo centered with editorial presence */}
            <div className="relative z-10 flex flex-col items-center gap-5 sm:gap-6">
              <div
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full flex items-center justify-center"
                style={{
                  background: 'white',
                  boxShadow: '0 10px 40px rgba(29,63,187,0.14), 0 2px 10px rgba(0,0,0,0.04)',
                }}
              >
                <img
                  src={squareLogo}
                  alt="BUTZ PHARMA logo"
                  className="w-44 h-44 sm:w-60 sm:h-60 object-contain"
                />
              </div>

              {/* Small pill badges */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {['Pharmaceutical', 'Medical Supply', 'Distribution'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 text-[10px] sm:text-[11px] font-semibold text-[#1d3fbb] bg-white/90 backdrop-blur-md border border-blue-200/80 rounded-full tracking-wide shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left — editorial image block */}
          <div className="reveal-left relative order-2 lg:order-1">
            <div
              className="aspect-[4/3] rounded-sm overflow-hidden relative"
            >
              <img
                src={aboutPhoto}
                alt="Pharmacy professional checking inventory on a fully stocked medicine shelf"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f66]/35 via-transparent to-transparent" />
              {/* Corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-[#00a896]/25" />
              <div className="absolute top-0 left-0 w-12 h-12 bg-[#1d3fbb]/20" />
            </div>
            {/* Offset block behind */}
            <div
              className="absolute -bottom-4 -left-4 w-full h-full rounded-sm -z-10 border-2 border-[#1d3fbb]/12"
            />
          </div>

          {/* Right — copy */}
          <div className="reveal-right order-1 lg:order-2">
            <p className="text-[#00a896] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              About Us
            </p>
            <h2 className="text-[2rem] lg:text-[2.6rem] font-black text-[#0f1f66] leading-tight tracking-tight mb-6">
              A Committed Partner in Healthcare Supply
            </h2>
            <div className="w-12 h-0.5 bg-[#00a896] mb-7" />
            <p className="text-gray-500 text-base leading-relaxed mb-5">
              BUTZ PHARMA DISTRIBUTION AND SUPPLY INC. is a professional pharmaceutical distribution
              and medical supply company dedicated to providing quality products and dependable service
              to the healthcare sector.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              We understand that timely, accurate supply of pharmaceuticals and medical products is
              critical. Our operations are built around reliability, quality assurance, and long-term
              partnerships with clients who depend on consistent supply solutions.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { title: 'Reliability', desc: 'Consistent, on-time pharmaceutical distribution' },
                { title: 'Quality Focus', desc: 'Products that meet professional healthcare standards' },
                { title: 'Partnerships', desc: 'Long-term relationships with our valued clients' },
                { title: 'Professional Service', desc: 'Responsive support and expert guidance' },
              ].map((item) => (
                <div key={item.title} className="border-l-2 border-[#00a896] pl-4">
                  <p className="text-sm font-bold text-[#0f1f66] mb-1">{item.title}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────
const ServiceIcon = ({ type }: { type: string }) => {
  if (type === 'pharma') return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
    </svg>
  )
  if (type === 'supply') return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  )
  return (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  )
}

function Services() {
  const services = [
    {
      icon: 'pharma',
      title: 'Pharmaceutical Distribution',
      desc: 'Reliable, efficient distribution of pharmaceutical products to hospitals, clinics, pharmacies, and healthcare-related organizations. We ensure products are delivered with care and consistency.',
    },
    {
      icon: 'supply',
      title: 'Medical Supplies',
      desc: 'Professional medical supply solutions covering a broad range of healthcare needs. From consumables to critical supplies, we source and deliver what healthcare facilities require.',
    },
    {
      icon: 'logistics',
      title: 'Distribution & Supply Solutions',
      desc: 'Comprehensive product sourcing and logistics support for institutions and businesses. We manage the complexities of pharmaceutical supply chains so you can focus on patient care.',
    },
  ]

  return (
    <section id="services" className="py-28" style={{ background: '#f7f9fc' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-xl mb-16 reveal">
          <p className="text-[#00a896] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            Products &amp; Services
          </p>
          <h2 className="text-[2rem] lg:text-[2.6rem] font-black text-[#0f1f66] leading-tight tracking-tight mb-4">
            What We Provide
          </h2>
          <div className="w-12 h-0.5 bg-[#00a896] mb-5" />
          <p className="text-gray-500 leading-relaxed">
            We offer a focused range of pharmaceutical distribution and medical supply services designed
            to support healthcare operations at every level.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-gray-200">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`reveal p-10 bg-white hover:bg-[#f0f4ff] transition-colors duration-300 group ${i < services.length - 1 ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''
                }`}
              data-delay={`${i * 100}`}
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#eef3ff] text-[#1d3fbb] mb-7 group-hover:bg-[#1d3fbb] group-hover:text-white transition-all duration-300">
                <ServiceIcon type={s.icon} />
              </div>
              <h3 className="text-base font-bold text-[#0f1f66] mb-3 leading-snug">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────
function WhyUs() {
  const pillars = [
    {
      num: '01',
      title: 'Reliable Distribution',
      desc: 'Our operations prioritize timely and accurate delivery. When healthcare facilities depend on a supply, we deliver.',
    },
    {
      num: '02',
      title: 'Quality-Focused Supply',
      desc: 'Every product we distribute meets the standards required for professional medical and pharmaceutical use.',
    },
    {
      num: '03',
      title: 'Professional Service',
      desc: 'Our team brings dedicated expertise and responsiveness to every client relationship and supply arrangement.',
    },
    {
      num: '04',
      title: 'Trusted Partnerships',
      desc: 'We build long-term relationships grounded in transparency, consistency, and mutual commitment to excellence.',
    },
  ]

  return (
    <section id="why" className="py-28 bg-[#0f1f66] relative overflow-hidden">
      {/* Subtle texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 39px, white 39px, white 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, white 39px, white 40px)',
        }}
      />
      {/* Teal accent bar top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#00a896]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left header */}
          <div className="reveal-left">
            <p className="text-[#00a896] text-sm font-bold tracking-[0.15em] uppercase mb-5">
              Why Choose BUTZ PHARMA
            </p>
            <h2 className="text-[2rem] lg:text-[2.8rem] font-black text-white leading-tight tracking-tight mb-6">
              Built on Trust.
              <br />
              Driven by Purpose.
            </h2>
            <div className="w-12 h-0.5 bg-[#00a896] mb-7" />
            <p className="text-blue-200/70 text-base leading-relaxed max-w-md">
              Healthcare distribution demands precision and dependability. BUTZ PHARMA was established to
              serve that need — providing professionals and organizations with a supply partner they can
              genuinely rely on.
            </p>
          </div>

          {/* Right pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <div key={p.num} className="reveal" data-delay={`${i * 80}`}>
                <p className="text-[#00a896] text-2xl font-black mb-3 opacity-60">{p.num}</p>
                <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Feature Visual ───────────────────────────────────────────────────────────
// ─── Partnership & Distribution Icons ─────────────────────────────────────────
function IconHospital({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="hosp-grad-bg" x1="12" y1="12" x2="68" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a8a" />
          <stop offset="0.6" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="hosp-grad-front" x1="25" y1="10" x2="55" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
        <filter id="hosp-shadow" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.2" />
        </filter>
      </defs>

      {/* Side wings */}
      <rect x="12" y="24" width="20" height="46" rx="3" fill="url(#hosp-grad-bg)" filter="url(#hosp-shadow)" />
      <rect x="48" y="24" width="20" height="46" rx="3" fill="url(#hosp-grad-bg)" filter="url(#hosp-shadow)" />

      {/* Center Main Tower */}
      <rect x="25" y="12" width="30" height="58" rx="4" fill="url(#hosp-grad-front)" filter="url(#hosp-shadow)" />

      {/* Roof trim */}
      <rect x="25" y="12" width="30" height="4" rx="1" fill="#60a5fa" />

      {/* Windows - Left Wing */}
      <rect x="16" y="30" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="23" y="30" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="16" y="40" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="23" y="40" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="16" y="50" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="23" y="50" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />

      {/* Windows - Right Wing */}
      <rect x="52" y="30" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="59" y="30" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="52" y="40" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="59" y="40" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="52" y="50" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="59" y="50" width="5" height="6" rx="1" fill="#93c5fd" opacity="0.9" />

      {/* Medical Cross Emblem */}
      <rect x="37" y="20" width="6" height="18" rx="1.5" fill="#ffffff" />
      <rect x="31" y="26" width="18" height="6" rx="1.5" fill="#ffffff" />

      {/* Entrance Door */}
      <path d="M 34 70 V 54 C 34 51 46 51 46 54 V 70 Z" fill="#0f172a" />
      <line x1="40" y1="54" x2="40" y2="70" stroke="#3b82f6" strokeWidth="1.5" />
    </svg>
  )
}

function IconClinic({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="clinic-grad-bg" x1="12" y1="14" x2="68" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a8a" />
          <stop offset="0.6" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="clinic-grad-front" x1="22" y1="12" x2="58" y2="68" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" />
          <stop offset="1" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      {/* Main Base */}
      <rect x="14" y="22" width="52" height="48" rx="4" fill="url(#clinic-grad-bg)" filter="url(#hosp-shadow)" />

      {/* Front Center Structure */}
      <rect x="22" y="14" width="36" height="56" rx="3" fill="url(#clinic-grad-front)" filter="url(#hosp-shadow)" />

      {/* Roof Accent */}
      <rect x="22" y="14" width="36" height="4" rx="1" fill="#60a5fa" />

      {/* Side Windows */}
      <rect x="17" y="30" width="7" height="8" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="56" y="30" width="7" height="8" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="17" y="44" width="7" height="8" rx="1" fill="#93c5fd" opacity="0.9" />
      <rect x="56" y="44" width="7" height="8" rx="1" fill="#93c5fd" opacity="0.9" />

      {/* Heart Emblem with Medical Cross inside */}
      <path
        d="M40 45 C34.5 36.5 25.5 37.5 25.5 44 C25.5 49.5 40 58.5 40 58.5 C40 58.5 54.5 49.5 54.5 44 C54.5 37.5 45.5 36.5 40 45 Z"
        fill="#ffffff"
      />
      {/* Cross in Heart */}
      <rect x="38.5" y="40.5" width="3" height="11" rx="0.5" fill="#1d4ed8" />
      <rect x="34.5" y="44.5" width="11" height="3" rx="0.5" fill="#1d4ed8" />
    </svg>
  )
}

function IconPharmacy({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pharm-grad-bg" x1="12" y1="20" x2="68" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a8a" />
          <stop offset="0.6" stopColor="#1d4ed8" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="pharm-grad-roof" x1="12" y1="16" x2="68" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>

      {/* Main Building Structure */}
      <rect x="14" y="26" width="52" height="44" rx="4" fill="url(#pharm-grad-bg)" filter="url(#hosp-shadow)" />

      {/* Store Awning Roof */}
      <path d="M12 26 L16 16 H64 L68 26 Z" fill="url(#pharm-grad-roof)" />
      <path d="M12 26 C14 29 18 29 20 26 C22 29 26 29 28 26 C30 29 34 29 36 26 C38 29 42 29 44 26 C46 29 50 29 52 26 C54 29 58 29 60 26 C62 29 66 29 68 26 V29 H12 V26 Z" fill="#60a5fa" />

      {/* Mortar & Pestle Bowl Symbol */}
      <path
        d="M27 41 C27 52.5 53 52.5 53 41 H27 Z"
        fill="#ffffff"
      />
      <rect x="35" y="52.5" width="10" height="3" rx="1" fill="#ffffff" />
      {/* Pestle handle */}
      <path d="M45 32.5 L36.5 42 H41.5 L47.5 34 C48.5 32.5 46.5 31 45 32.5 Z" fill="#93c5fd" />
    </svg>
  )
}

// ─── Feature Visual ───────────────────────────────────────────────────────────
function FeatureVisual() {
  return (
    <section className="w-full bg-white overflow-hidden py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16 min-h-[480px]">
          {/* Left — glass card visual with soft blue curved shape */}
          <div className="reveal-left relative flex items-center justify-center min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] p-5 sm:p-8 lg:p-10 overflow-hidden rounded-[36px] sm:rounded-[48px]"
            style={{
              background: 'linear-gradient(135deg, #a4b9d0 0%, #90a7c3 50%, #9cb2cc 100%)',
            }}
          >
            {/* Luminous flowing wave lines in background */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-60"
              viewBox="0 0 600 500"
              preserveAspectRatio="xMidYMid slice"
              aria-hidden="true"
            >
              <path
                d="M -80 140 Q 220 80 680 360"
                stroke="white"
                strokeWidth="2.5"
                fill="none"
                opacity="0.6"
                style={{ filter: 'blur(1px)' }}
              />
              <path
                d="M -40 280 Q 280 180 660 120"
                stroke="#dce7f5"
                strokeWidth="2"
                fill="none"
                opacity="0.5"
              />
              <path
                d="M -100 380 Q 200 320 620 440"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                opacity="0.4"
              />
            </svg>

            {/* Ambient soft glow */}
            <div className="absolute w-80 h-80 rounded-full bg-white/25 blur-3xl pointer-events-none" />

            {/* Frosted Glass Card Container - Maximized */}
            <div className="relative z-10 w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[500px] aspect-[4/3] sm:aspect-square rounded-[32px] sm:rounded-[36px] bg-white/40 backdrop-blur-xl border-2 border-white/80 shadow-[0_25px_60px_rgba(15,30,80,0.2)] flex items-center justify-center p-2.5 sm:p-3.5 overflow-hidden">
              <img
                src={bottleBanner}
                alt="Butz Pharma product showcase"
                className="w-full h-full object-cover rounded-[24px] sm:rounded-[28px] drop-shadow-md hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right — typography & copy */}
          <div className="reveal-right flex items-center py-4 lg:py-8">
            <div className="max-w-lg">
              <h2 className="mb-6 tracking-tight">
                <span className="block text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0b132a] leading-[1.08]">
                  Excellence
                </span>
                <span className="block text-4xl sm:text-5xl lg:text-[54px] font-light text-[#5a7290] leading-[1.08] mt-1">
                  in Distribution
                </span>
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal max-w-md">
                Butz Pharma is dedicated to providing reliable, high-quality pharmaceutical distribution
                and supply services, ensuring critical medicines reach those who need them most with
                integrity and speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-[#f5f8fc] border-t border-gray-100/80">
      <div className="max-w-4xl mx-auto px-6 text-center reveal">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0b132a] leading-tight tracking-tight mb-8">
          Let’s Build a Reliable
          <br className="hidden sm:inline" /> Supply Partnership
        </h2>

        {/* 3 Medical Icons Row */}
        <div className="flex items-center justify-center gap-6 sm:gap-12 lg:gap-16 mb-8">
          <div className="flex flex-col items-center group">
            <IconHospital className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-108" />
          </div>
          <div className="flex flex-col items-center group">
            <IconClinic className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-108" />
          </div>
          <div className="flex flex-col items-center group">
            <IconPharmacy className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 group-hover:scale-108" />
          </div>
        </div>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
          Whether you represent a hospital, clinic, pharmacy, or institution, BUTZ PHARMA is ready
          to discuss how we can support your supply needs.
        </p>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left — info */}
          <div className="reveal-left">
            <p className="text-[#00a896] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
            <h2 className="text-[1.8rem] sm:text-[2.2rem] lg:text-[2.6rem] font-black text-[#0f1f66] leading-tight tracking-tight mb-4">
              Reach Out to Our Team
            </h2>
            <div className="w-12 h-0.5 bg-[#00a896] mb-7" />
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              We welcome inquiries from healthcare facilities, pharmacies, clinics, hospitals, and
              institutions looking for a dependable pharmaceutical distribution partner.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#eef3ff] text-[#1d3fbb] rounded-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Address</p>
                  <p className="text-sm text-gray-700 leading-relaxed">2050 Wellness Way, Building B<br />Austin, TX 78704</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#eef3ff] text-[#1d3fbb] rounded-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+15550175521" className="text-sm text-gray-700 hover:text-[#1d3fbb] transition-colors">
                    +1 (555) 017-5521
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-[#eef3ff] text-[#1d3fbb] rounded-xl">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:info@butzpharma.com" className="text-sm text-gray-700 hover:text-[#1d3fbb] transition-colors">
                    info@butzpharma.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — calling card image */}
          <div className="reveal-right flex flex-col items-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100">
              <img
                src={callingCard}
                alt="BUTZ PHARMA Calling Card"
                className="w-full h-auto object-cover block"
              />
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              We'll respond to your inquiry within one business day.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Products & Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#0d1a4a] text-white">
      {/* Top teal bar */}
      <div className="h-1 bg-[#00a896]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={horizontalLogo}
              alt="BUTZ PHARMA Distribution and Supply Inc."
              className="h-10 w-auto object-contain mb-5 brightness-0 invert"
            />
            <p className="text-blue-200/60 text-sm leading-relaxed max-w-xs">
              Professional pharmaceutical distribution and medical supply services for the
              healthcare sector.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold text-[#00a896] tracking-[0.18em] uppercase mb-5">
              Navigation
            </p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-blue-200/60 hover:text-white transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-[#00a896] tracking-[0.18em] uppercase mb-5">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-blue-200/60">
              <li>2050 Wellness Way, Building B, Austin, TX 78704</li>
              <li>
                <a href="mailto:slin@aerabotanicals.com" className="hover:text-white transition-colors">
                  slin@aerabotanicals.com
                </a>
              </li>
              <li className="pt-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#00a896]/50 text-[#00a896] text-xs font-semibold tracking-wide hover:bg-[#00a896] hover:text-white hover:border-[#00a896] transition-all duration-200 rounded-full"
                >
                  Direct Contact Info
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-blue-200/40">
            &copy; {new Date().getFullYear()} BUTZ PHARMA DISTRIBUTION AND SUPPLY INC. All rights reserved.
          </p>
          <p className="text-xs text-blue-200/30">Austin, TX</p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useReveal()

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <FeatureVisual />
        <CTASection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
