const ITEMS = ['Video Production','Meta Ads','Google Ads','Reels Direction','DaVinci Resolve','Brand Strategy','Content Creation','Post-Production']
const ALL   = [...ITEMS, ...ITEMS]

export default function MarqueeSection() {
  return (
    <div className="py-8 border-t border-b border-white/[0.07] overflow-hidden">
      <div className="marquee-track">
        {ALL.map((item,i) => (
          <div key={i} className="flex items-center gap-6 font-display text-[13px] font-semibold tracking-[0.12em] uppercase text-muted whitespace-nowrap">
            {item}
            <span className="w-1 h-1 rounded-full bg-accent inline-block flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}
