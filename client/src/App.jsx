import { useState } from 'react'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import MovingText from "./component/MovingText";
import AboutStory from "./component/AboutStory";
import Timeline from "./component/Timeline";
import MyApproach from "./component/MyApproach";
import ProjectsPage from "./component/ProjectsPage";
import NextPhase from "./component/NextPhase";

import StatsSection from "./component/StatsSection";


const projects = [
  { number: '01', title: 'MediBook', type: 'MERN · Healthcare', description: 'A doctor appointment booking platform with authentication, specialty search, appointment history and QR-enabled receipts.', color: 'bg-[#b6e7fb]', link: 'https://github.com/' },
  { number: '02', title: 'DoorIQ / DineHub', type: 'SaaS · Restaurant Management', description: 'Restaurant operations workflows, role-based dashboards and API-driven management tools.', color: 'bg-[#fff078]', link: 'https://github.com/' },
  { number: '03', title: 'SparkFresh', type: 'React · Booking Experience', description: 'A clean laundry booking website focused on service discovery and a straightforward booking flow.', color: 'bg-[#f6b9d1]', link: 'https://github.com/' },
]

function StickyNote({ className = '', label, children }) {
  return <article className={`note absolute p-6 sm:p-8 ${className}`}>
    <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[.12em]">{label}</span>
    <div className="mt-4">{children}</div>
  </article>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'

  async function submitContact(e) {
    e.preventDefault()
    setStatus('Sending…')
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || 'Could not send message')
      setStatus('Message sent — thank you!')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus(`${err.message}. Is the backend running?`)
    }
  }

  const nav = [
    ['DISCOVER', '#discover'], ['ABOUT', '#about'], ['WORKS', '#works']
  ]

  return <main className="paper-grid min-h-screen overflow-hidden">
    <header className="sticky top-4 z-50 mx-4 mt-4 rounded-[20px] bg-ink px-5 py-4 text-white shadow-sm sm:mx-8 sm:px-7 lg:mx-auto lg:mt-7 lg:max-w-[1600px]">
      <div className="flex items-center justify-between gap-4">
        <a href="#discover" className="flex min-w-0 items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f6f4ee] text-2xl">👨🏻‍💻</div>
          <div className="min-w-0">
            <div className="truncate font-sans text-base font-extrabold tracking-wide sm:text-xl">Gitesh Patidar</div>
            <div className="mt-0.5 font-mono text-[10px] tracking-widest text-white/65 sm:text-xs">FULL-STACK DEVELOPER</div>
          </div>
        </a>
        <nav className="hidden items-center gap-3 md:flex">
          {nav.map(([label, href], i) => <a key={label} href={href} className={`rounded-full border border-white/15 px-5 py-3 font-mono text-xs font-bold transition hover:bg-white/15 ${i === 0 ? 'bg-white/15' : ''}`}>{label}</a>)}
          <a href="/resume.pdf" className="ml-1 flex items-center gap-2 rounded-full bg-lemon px-6 py-3 font-mono text-xs font-bold text-ink transition hover:-translate-y-0.5">RESUME <ArrowUpRight size={14} /></a>
        </nav>
        <button className="md:hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav className="mt-4 flex flex-col gap-2 md:hidden">{nav.map(([label, href]) => <a key={label} onClick={() => setMenuOpen(false)} href={href} className="rounded-xl border border-white/15 px-4 py-3 font-mono text-sm">{label}</a>)}<a href="/resume.pdf" className="rounded-xl bg-lemon px-4 py-3 font-mono text-sm font-bold text-ink">RESUME ↗</a></nav>}
    </header>

    <section id="discover" className="relative mx-auto min-h-[760px] max-w-[1600px] px-6 pb-20 pt-20 sm:px-12 lg:min-h-[790px] lg:px-12 lg:pt-28">
      <div className="relative z-10 max-w-[900px]">
        <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-black/[.035] px-3 py-2.5 font-mono text-[10px] tracking-[.12em] sm:px-5 sm:text-xs">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-bold text-white">01</span> DISCOVERY STARTS HERE
        </div>
        <div className="relative mt-16 sm:mt-20">
          <p className="absolute -top-8 left-1 z-10 -rotate-3 font-handwritten text-3xl italic text-blue-600 sm:-top-10 sm:text-4xl">Hello, I'm</p>
          <h1 className="font-display text-[clamp(3.2rem,10.5vw,9.2rem)] font-black uppercase leading-[.82] tracking-[-.075em]">
            <span className="block whitespace-nowrap">GITESH</span>
            <span className="mt-2 block text-orange">PATIDAR</span>
          </h1>
          <svg className="mt-5 h-8 w-full max-w-[790px]" viewBox="0 0 790 32" fill="none" aria-hidden="true"><path d="M3 23C145 -3 266 37 411 14S623 3 787 19" stroke="#1470d9" strokeWidth="2.4" /></svg>
        </div>
        <p className="mt-8 max-w-[720px] text-2xl leading-snug sm:text-3xl lg:text-[36px]">I build digital products that solve real problems—<br className="hidden sm:block" /> not just beautiful screens.</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <a href="#works" className="group inline-flex items-center gap-5 rounded-full border border-ink bg-lemon px-7 py-5 font-mono text-xs font-bold shadow-[5px_7px_0_#201d1c] transition hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:px-9 sm:text-sm">EXPLORE SELECTED WORK <ArrowRight size={17} className="transition group-hover:translate-x-1" /></a>
          <a href="#about" className="border-b border-ink pb-1 font-mono text-xs font-bold sm:text-sm">A LITTLE ABOUT ME ↗</a>
        </div>
      </div>

      <div className="pointer-events-none absolute right-2 top-[390px] hidden h-[430px] w-[480px] lg:block xl:right-12">
        <StickyNote className="right-[170px] top-[-20px] h-[270px] w-[310px] rotate-[-5deg] bg-[#fff58e]" label="CURRENTLY">
          <h2 className="font-sans text-3xl font-black leading-tight">Full-Stack<br />Developer</h2>
          <p className="mt-4 font-handwritten text-xl italic">@ Building for the web</p>
          <span className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-red-300 bg-red-600 shadow-md" />
        </StickyNote>
        <StickyNote className="right-0 top-[190px] z-10 h-[250px] w-[310px] rotate-[4deg] bg-[#aee5fb]" label="TECH TOOLKIT">
          <h2 className="font-sans text-3xl font-black leading-tight">MERN Stack</h2>
          <p className="mt-4 font-handwritten text-xl italic">React · Node · Express · MongoDB</p>
        </StickyNote>
        <StickyNote className="right-[180px] top-[390px] h-[240px] w-[310px] rotate-[-2deg] bg-[#f7b4d0]" label="LATEST PROJECT">
          <h2 className="font-sans text-3xl font-black leading-tight">MediBook<br />Appointment App</h2>
          <span className="mt-3 inline-block -rotate-2 bg-white/70 px-3 py-1 font-handwritten text-lg italic">+ real-time booking</span>
        </StickyNote>
        <p className="absolute right-0 top-[480px] rotate-[-5deg] font-handwritten text-sm italic text-blue-600">a few things I'm building ↗</p>
      </div>
    </section>
    <MovingText />
    <AboutStory />
    <Timeline />
    <MyApproach />
    <ProjectsPage />
    <StatsSection />
    <NextPhase />


    <section id="contact" className="bg-ink px-6 py-20 text-white sm:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div><p className="font-mono text-xs tracking-[.16em] text-white/60">04 / LET'S CONNECT</p><h2 className="mt-5 font-display text-5xl font-black leading-[.95] sm:text-7xl">HAVE A GOOD<br />PROJECT IDEA?</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">Have an opportunity, collaboration or interesting problem? Send me a message.</p>
          <div className="mt-8 flex gap-4"><a aria-label="GitHub" href="https://github.com/" className="rounded-full border border-white/20 p-3 hover:bg-white/10"><Github /></a><a aria-label="LinkedIn" href="https://linkedin.com/" className="rounded-full border border-white/20 p-3 hover:bg-white/10"><Linkedin /></a><a aria-label="Email" href="mailto:your.email@example.com" className="rounded-full border border-white/20 p-3 hover:bg-white/10"><Mail /></a></div>
        </div>
        <form onSubmit={submitContact} className="space-y-4">
          <label className="block font-mono text-xs">YOUR NAME<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-sans text-base outline-none focus:border-lemon" placeholder="Your name" /></label>
          <label className="block font-mono text-xs">EMAIL ADDRESS<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-sans text-base outline-none focus:border-lemon" placeholder="you@example.com" /></label>
          <label className="block font-mono text-xs">MESSAGE<textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="mt-2 w-full resize-y rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-sans text-base outline-none focus:border-lemon" placeholder="Tell me a little about it…" /></label>
          <button className="flex items-center gap-4 rounded-full bg-lemon px-7 py-4 font-mono text-xs font-bold text-ink transition hover:translate-x-1">SEND MESSAGE <ArrowRight size={16} /></button>
          {status && <p role="status" className="text-sm text-white/75">{status}</p>}
        </form>
      </div>
      <footer className="mx-auto mt-16 flex max-w-6xl flex-wrap justify-between gap-3 border-t border-white/15 pt-6 font-mono text-[10px] tracking-wider text-white/50"><span>© {new Date().getFullYear()} GITESH PATIDAR</span><a href="#discover">BACK TO TOP ↑</a><span>BUILT WITH REACT + TAILWIND</span></footer>
    </section>
  </main>
}
