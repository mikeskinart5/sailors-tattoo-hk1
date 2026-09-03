"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "12+", label: "Years at sea" },
  { value: "2000+", label: "Pieces inked" },
  { value: "1", label: "Founder, one chair" },
  { value: "∞", label: "Stories told" },
];

export function About() {
  return (
    <section
      id="studio"
      className="relative w-full bg-background px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-3 text-eyebrow text-foreground/60"
        >
          <span className="h-px w-10 bg-foreground/40" />
          <span>The Studio · Mike Skinart</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          {/* Left — Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6"
          >
            <h2 className="font-black uppercase text-display text-[clamp(2.5rem,6vw,5.5rem)] text-foreground">
              Once a sailor,
              <br />
              <span className="text-foreground/30">always an artist.</span>
            </h2>

            

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 flex items-center gap-5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.02]">
                <img
                  src="/black-cat-logo.png"
                  alt="Sailors Tattoo HK mark"
                  className="h-12 w-12 object-contain mix-blend-screen"
                />
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">Mike Skinart</p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Founder &amp; Sole Artist
                </p>
              </div>
            </motion.div>

            {/* Stats row */}
            <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-background px-4 py-6 text-center"
                >
                  <div className="text-3xl font-black text-foreground md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Looping video placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-6"
          >
            <div className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-card md:aspect-[3/4]">
              {/* Looping video */}
              <video
                className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
                autoPlay
                muted
                loop
                playsInline
                poster="https://placehold.co/900x1200/0a0a0a/c8a25a?text=Sailors+Tattoo+HK&font=raleway"
              >
                <source
                  src="https://cdn.coverr.co/videos/coverr-a-tattoo-artist-at-work-1080p.mp4"
                  type="video/mp4"
                />
                <source
                  src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
                  type="video/mp4"
                />
              </video>

              {/* Cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-background/10" />

              {/* Top-left chip */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-background/50 px-3 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                <span className="text-[0.65rem] uppercase tracking-[0.16em] text-foreground">
                  Live · In the Studio
                </span>
              </div>

              {/* Bottom caption */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.18em] text-foreground/60">
                  Studio · Tung Chung, HK
                </p>
                <p className="mt-2 font-black uppercase text-2xl leading-tight text-foreground md:text-3xl">
                  The Chair
                  <br />
                  Where the sea
                  <br />
                  Meets the skin
                </p>
              </div>
            </div>

            {/* Caption strip */}
            <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-muted-foreground">
              <span>Reel · 00:42</span>
              <span>Shot on site</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
