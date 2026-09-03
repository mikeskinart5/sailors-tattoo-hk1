"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    no: "01",
    title: "Tribal & Pattern",
    desc: "Custom geometric and Polynesian-inspired patterns, drawn freehand to follow the body's natural lines.",
  },
  {
    no: "02",
    title: "Portraits",
    desc: "Lifelike ink portraits of loved ones, icons, and heroes — refined line by line.",
  },
  {
    no: "03",
    title: "Black & Grey Realism",
    desc: "Soft shading, deep contrast. The bread and butter of the sailor's portfolio.",
  },
  {
    no: "04",
    title: "Color Realism",
    desc: "Full-spectrum pieces where pigment reads like paint — without bleeding into the skin.",
  },
  {
    no: "05",
    title: "Graffiti & Sketches",
    desc: "Urban studies and preparatory drawings that become standalone pieces on skin.",
  },
  {
    no: "06",
    title: "Custom Pieces",
    desc: "Something entirely your own. Tell Mike the story — he'll draw the rest.",
  },
];

export function Services() {
  return (
    <section className="relative w-full bg-background px-5 py-24 md:px-10 md:py-36">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3 text-eyebrow text-foreground/60"
            >
              <span className="h-px w-10 bg-foreground/40" />
              <span>What we ink</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-black uppercase text-display text-[clamp(2.5rem,7vw,6rem)] text-foreground"
            >
              Six disciplines.
              <br />
              <span className="text-foreground/30">One chair.</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.no}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative bg-background p-7 transition-colors duration-500 hover:bg-card md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {service.no}
                </span>
                <span className="h-2 w-2 rounded-full bg-foreground/20 transition-colors duration-500 group-hover:bg-[var(--gold)]" />
              </div>
              <h3 className="mt-8 font-black uppercase text-2xl leading-tight text-foreground md:text-3xl">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
