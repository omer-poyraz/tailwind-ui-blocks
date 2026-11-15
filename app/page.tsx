"use client";
import { useState } from "react";
import { Github, ArrowRight, Check, Star, Zap, Shield, Gauge, Plus, Minus, Sparkles } from "lucide-react";

const BUNDLE = "https://omerpoyraz.gumroad.com/l/nextjs-admin-bundle";

function BlockHead({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="font-display text-sm font-bold w-7 h-7 grid place-items-center rounded-lg" style={{ background: "var(--brand-soft)", color: "var(--brand)" }}>{n}</span>
      <span className="block-label">{label}</span>
      <span className="h-px flex-1 bg-[var(--border)]" />
    </div>
  );
}

function Faq() {
  const items = [
    ["Can I use these in commercial projects?", "Yes — everything is MIT licensed, free for personal and commercial use, no attribution required."],
    ["Do I need a component library?", "No. Every block is plain Tailwind utility classes plus a few lucide icons. Copy, paste, done."],
    ["Does it support dark mode?", "Yes, all blocks are theme-aware via CSS variables. Flip one attribute to switch themes."],
  ];
  const [open, setOpen] = useState(0);
  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {items.map(([q, a], i) => (
        <div key={i} className="card overflow-hidden">
          <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-medium">
            {q}{open === i ? <Minus size={18} className="text-[var(--brand)] shrink-0" /> : <Plus size={18} className="text-[var(--muted)] shrink-0" />}
          </button>
          {open === i && <p className="px-5 pb-4 text-sm text-[var(--muted)] -mt-1">{a}</p>}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--border)] sticky top-0 z-20 backdrop-blur" style={{ background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
        <div className="max-w-5xl mx-auto px-5 h-16 flex items-center gap-2">
          <span className="font-display font-bold">UI<span className="text-[var(--brand)]">Blocks</span></span>
          <a href="https://github.com/omer-poyraz/tailwind-ui-blocks" className="ml-auto inline-flex items-center gap-1.5 h-9 px-3 rounded-lg border border-[var(--border)] text-sm hover:bg-[var(--surface-2)]"><Github size={16} /> Star</a>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-5 py-12 space-y-16">
        {/* HERO BLOCK */}
        <section>
          <BlockHead n="1" label="Hero section" />
          <div className="card p-10 sm:p-14 text-center">
            <span className="pill"><Sparkles size={13} /> New · v2.0 is here</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mt-5 text-balance">Ship your landing page<br />in an afternoon</h1>
            <p className="text-[var(--muted)] mt-4 max-w-md mx-auto">Production-ready Tailwind sections you can copy, paste and launch — no design skills required.</p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
              <button className="btn btn-brand">Start building <ArrowRight size={16} /></button>
              <button className="btn">Live demo</button>
            </div>
          </div>
        </section>

        {/* LOGO CLOUD */}
        <section>
          <BlockHead n="2" label="Logo cloud" />
          <div className="card p-8">
            <p className="text-center text-sm text-[var(--muted)] mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
              {["Northwind", "Acme", "Globex", "Umbrella", "Initech", "Hooli"].map((l) => (
                <span key={l} className="font-display font-semibold text-lg">{l}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURE GRID */}
        <section>
          <BlockHead n="3" label="Feature grid" />
          <div className="grid sm:grid-cols-3 gap-5">
            {[[Zap, "Blazing fast", "Static-first output that scores 100 on Lighthouse out of the box."],
              [Shield, "Secure by default", "Sensible headers, no inline secrets, zero third-party trackers."],
              [Gauge, "Scales with you", "From a landing page to a full SaaS without rewriting a line."]].map(([Icon, t, d]: any, i) => (
              <div key={i} className="card p-6">
                <span className="grid place-items-center w-11 h-11 rounded-xl" style={{ background: "var(--brand-soft)", color: "var(--brand)" }}><Icon size={20} /></span>
                <h3 className="font-display font-bold mt-4">{t}</h3>
                <p className="text-sm text-[var(--muted)] mt-1.5">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* STATS BAND */}
        <section>
          <BlockHead n="4" label="Stats band" />
          <div className="card p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[["12k+", "GitHub stars"], ["99.9%", "Uptime"], ["48", "Ready sections"], ["4.9/5", "Avg rating"]].map(([v, l]) => (
              <div key={l}><div className="font-display text-3xl font-bold" style={{ color: "var(--brand)" }}>{v}</div><div className="text-sm text-[var(--muted)] mt-1">{l}</div></div>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section>
          <BlockHead n="5" label="Testimonial" />
          <div className="card p-10 text-center max-w-2xl mx-auto">
            <div className="flex justify-center gap-1 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}</div>
            <p className="font-display text-xl sm:text-2xl font-medium text-balance">"We replaced our entire marketing site with these blocks in one sprint. It just looks expensive."</p>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-11 h-11 rounded-full grid place-items-center font-semibold" style={{ background: "var(--brand-soft)", color: "var(--brand)" }}>MR</div>
              <div className="text-left"><div className="text-sm font-semibold">Maria Rossi</div><div className="text-xs text-[var(--muted)]">Head of Growth, Northwind</div></div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <BlockHead n="6" label="FAQ accordion" />
          <Faq />
        </section>

        {/* CTA + bundle */}
        <section>
          <BlockHead n="7" label="CTA section" />
          <div className="card p-10 text-center" style={{ background: "linear-gradient(135deg, var(--brand-soft), var(--surface))" }}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Need the dashboard too?</h2>
            <p className="text-[var(--muted)] mt-2 max-w-lg mx-auto">These marketing blocks pair with six production-ready Next.js admin panels — the full front-to-back stack.</p>
            <a href={BUNDLE} className="inline-flex items-center gap-2 mt-6 h-11 px-6 rounded-xl bg-[var(--brand)] text-[#04201c] font-semibold">Get all 6 for $99 <ArrowRight size={17} /></a>
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 mt-5 text-xs text-[var(--muted)]">
              {["MIT licensed", "No attribution", "Lifetime updates"].map((f) => <span key={f} className="inline-flex items-center gap-1"><Check size={13} className="text-[var(--brand)]" /> {f}</span>)}
            </div>
          </div>
        </section>

        <footer className="pt-8 border-t border-[var(--border)] text-sm text-[var(--muted)] flex justify-between">
          <span>MIT © Ömer Poyraz</span>
          <a href="https://github.com/omer-poyraz/tailwind-ui-blocks" className="hover:text-[var(--fg)]">GitHub</a>
        </footer>
      </main>
    </div>
  );
}
