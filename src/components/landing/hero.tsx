"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useBookingStore } from "@/lib/booking-store";

const MARQUEE_ITEMS = [
  "Tribal",
  "Realism",
  "Portraits",
  "Black & Grey",
  "Color",
  "Patterns",
  "Graffiti",
  "Custom",
];

export function Hero() {
  const openBooking = useBookingStore((s) => s.open);
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] w-full flex-col overflow-hidden bg-background"
    >
      {/* Background video of Mike tattooing — full-bleed cinematic */}
<div className="absolute inset-0 z-0 overflow-hidden">
  <video
    className="h-full w-full object-cover opacity-50 mix-blend-luminosity saturate-0 contrast-110"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/video/mikeskinart-live.mp4" type="video/mp4" />
  </video>
  {/* Cinematic overlays — darken edges and fade to background */}
  <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(10,10,11,0.7)_100%)]" />
  {/* Subtle film grain — adds a filmic texture */}
  <div
    className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
    style={{
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
    }}
  />
</div>

      {/* Giant logo watermark behind headline — very subtle, screen-blended */}
      <motion.img
        src="/black-cat-logo.png"
        alt=""
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.07, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-[5] h-[140%] w-auto -translate-x-1/2 -translate-y-1/2 mix-blend-screen object-contain"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col justify-center px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1600px]">
          {/* Top brand row: eyebrow on the left, logo seal on the right.
              Sits in normal document flow so it can never overlap the headline. */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-start justify-between gap-6 md:mb-10"
          >
            {/* Eyebrow — gold with 3D depth effect */}
<div className="flex items-center gap-3 pt-1 text-eyebrow">
  <span className="h-px w-10" style={{ background: "var(--gold)" }} />
  <span
    className="hidden sm:inline font-bold tracking-[0.22em] uppercase"
    style={{
      color: "var(--gold)",
      textShadow:
        "0 1px 0 rgba(0,0,0,0.8), 0 2px 0 rgba(0,0,0,0.6), 0 3px 0 rgba(0,0,0,0.4), 0 4px 6px rgba(0,0,0,0.5), 0 0 20px rgba(200,162,90,0.3)",
    }}
  >
    Tattoo Studio · Hong Kong
  </span>
  <span
    className="sm:hidden font-bold tracking-[0.22em] uppercase"
    style={{
      color: "var(--gold)",
      textShadow:
        "0 1px 0 rgba(0,0,0,0.8), 0 2px 0 rgba(0,0,0,0.6), 0 3px 0 rgba(0,0,0,0.4), 0 4px 6px rgba(0,0,0,0.5), 0 0 20px rgba(200,162,90,0.3)",
    }}
  >
    HK Tattoo Studio
  </span>
</div>

            {/* Logo seal — black bg blends away via mix-blend-mode: screen.
                Float + rotation handled by CSS keyframes.
                Sized to never exceed the top bar height. */}
            <div className="flex shrink-0 flex-col items-end gap-1.5">
              <img
                src="/black-cat-logo.png"
                alt="Sailors Tattoo HK — black cat mark with silver and gold shadow"
                className="h-auto w-[100px] mix-blend-screen object-contain animate-seal-float-rotate sm:w-[120px] md:w-[140px]"
              />
              <div className="flex items-center gap-2 pr-1 text-eyebrow text-foreground/60">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--gold)" }}
                />
                <span>Est. Hong Kong</span>
              </div>
            </div>
          </motion.div>

          {/* Massive display headline — sized with clamp() so it scales
              with the viewport but never gets so big it crowds the layout. */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-black uppercase text-display text-foreground"
          >
            <span className="block text-[clamp(2.75rem,11vw,11rem)] leading-[0.85]">
              Sailor&apos;s
            </span>
            <span className="block text-[clamp(2.75rem,11vw,11rem)] leading-[0.85] text-foreground/30">
              Ink
            </span>
          </motion.h1>

          {/* Sub-line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col gap-6 md:mt-12 md:flex-row md:items-end md:justify-between"
          >
            <p className="max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
              A custom tattoo studio by Mike Skinart — a dreamer who once
              sailed across the world and fell in love with ink. Every line
              tells the story of where he&apos;s been.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-background transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                View the Work
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-background transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <button
                type="button"
                onClick={openBooking}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground/5"
              >
                Book a Session
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-24 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-foreground/50 md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-scroll-bob" />
      </motion.div>

      {/* Marquee ticker */}
      <div className="marquee-pause-on-hover relative z-10 border-y border-white/10 bg-background/40 backdrop-blur-sm">
        <div className="flex overflow-hidden whitespace-nowrap py-4 md:py-5">
          <div className="animate-marquee flex shrink-0 items-center">
            {Array.from({ length: 4 }).map((_, groupIdx) => (
              <div key={groupIdx} className="flex shrink-0 items-center">
                {MARQUEE_ITEMS.map((item, i) => (
                  <span
                    key={`${groupIdx}-${i}`}
                    className="flex shrink-0 items-center"
                  >
                    <span className="px-6 text-2xl font-black uppercase tracking-tight text-foreground/90 md:text-4xl">
                      {item}
                    </span>
                    <span
                      className="text-2xl md:text-4xl"
                      style={{ color: "var(--gold)" }}
                    >
                      &#x2715;
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}