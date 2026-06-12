'use client'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-bg px-8 md:px-12 pt-16 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

        <div>
          <div className="font-display text-[22px] font-extrabold text-white tracking-tight mb-5">
            Aashish<span className="text-accent">.</span>
          </div>
          <p className="text-sm text-muted leading-[1.7] max-w-[280px] mb-8">
            Creative & Digital Media Director — video production, performance advertising, and brand storytelling.
          </p>
          <div className="flex gap-4">
            {[{s:'ig',href:'https://instagram.com'},{s:'in',href:'https://linkedin.com/in/aashishpandeycreative'},{s:'yt',href:'https://youtube.com'},{s:'fb',href:'https://facebook.com'}].map(({s,href})=>(
              <a key={s} href={href} target="_blank" rel="noopener noreferrer" data-hover
                className="w-9 h-9 border border-white/[0.07] rounded-full flex items-center justify-center text-muted text-sm no-underline transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5"
              >{s}</a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-[13px] font-semibold tracking-widest uppercase text-cream mb-6">Navigate</h4>
          <ul className="flex flex-col gap-3.5 list-none">
            {[{l:'About',h:'/about'},{l:'Work',h:'/work'},{l:'Services',h:'/services'},{l:'Process',h:'/process'},{l:'Contact',h:'/contact'}].map(({l,h})=>(
              <li key={h}><Link href={h} className="text-sm text-muted hover:text-cream transition-colors duration-200 no-underline">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[13px] font-semibold tracking-widest uppercase text-cream mb-6">Services</h4>
          <ul className="flex flex-col gap-3.5 list-none">
            {['Video Production','Meta Ads','Google Ads','Content Creation','Brand Identity'].map(s=>(
              <li key={s}><Link href="/services" className="text-sm text-muted hover:text-cream transition-colors duration-200 no-underline">{s}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-[13px] font-semibold tracking-widest uppercase text-cream mb-6">Contact</h4>
          <ul className="flex flex-col gap-3.5 list-none">
            <li><a href="mailto:pandeyaashish0501@gmail.com" className="text-sm text-muted hover:text-cream transition-colors no-underline">pandeyaashish0501@gmail.com</a></li>
            <li><a href="tel:+916261501625" className="text-sm text-muted hover:text-cream transition-colors no-underline">+91 6261-501625</a></li>
            <li><span className="text-sm text-muted">Mumbai / Ratlam, MP</span></li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-white/[0.07]">
        <p className="text-[13px] text-muted">© 2025 Aashish Pandey. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy" className="text-[13px] text-muted hover:text-cream no-underline transition-colors">Privacy Policy</Link>
          <Link href="/terms"   className="text-[13px] text-muted hover:text-cream no-underline transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  )
}
