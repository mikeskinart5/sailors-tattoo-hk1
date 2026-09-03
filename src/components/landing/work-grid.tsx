"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  size: "lg" | "md" | "sm";
};
const PROJECTS: Project[] = [
  {
    id: "p1",
    title: "Skull",
    category: "Black and Greywash",
    year: "2024",
    image: "/work/skull.jpg",
    size: "lg",
  },
  {
    id: "p2",
    title: "Anchor Rose",
    category: "Color Realism",
    year: "2023",
    image:"/work/black.jpg",
    size: "md",
  },
  {
    id: "p3",
    title: "The Captain",
    category: "Portraits",
    year: "2023",
    image:"/work/old-school.jpg",
    size: "md",
  },
  {
    id: "p5",
    title: "Harbor Lines",
    category: "Pattern",
    year: "2023",
    image:
      "https://placehold.co/900x900/0a0a0a/c8a25a?text=Pattern&font=raleway",
    size: "md",
  },
  {
    id: "p6",
    title: "Concrete Salt",
    category: "Graffiti",
    year: "2022",
    image:
      "https://placehold.co/1200x900/0a0a0a/f4f1ea?text=Graffiti&font=raleway",
    size: "md",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function WorkGrid() {
  return (
    <section
      id="work"
      className="relative w-full bg-background px-5 py-24 md:px-10 md:py-36"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        {/* Section header */}
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
              <span>Selected Work · 2006 — 2026</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="font-black uppercase text-display text-[clamp(2.5rem,7vw,6rem)] text-foreground"
            >
              The Portfolio
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base"
          >
            A selection of pieces from the studio — tribal patterns, black &
            grey realism, color portraits, and graffiti studies. Every tattoo
            is a one-off, designed for the person wearing it.
          </motion.p>
        </div>

        {/* Project grid — bento style */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {PROJECTS.map((project, i) => {
            const span =
              i === 0
                ? "md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-auto"
                : i === 4
                ? "md:col-span-2 aspect-square"
                : "md:col-span-2 aspect-square";
            return (
              <motion.article
                key={project.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-card ${span}`}
              >
                {/* Image */}
               <img
  src={project.image}
  alt={project.title.replace(/&apos;/g, "'")}
  loading="lazy"
  className="absolute inset-0 h-full w-full object-cover saturate-0 contrast-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
/>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-background/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-between p-5 md:p-7">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span
                      className="rounded-full border border-white/10 bg-background/40 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-foreground backdrop-blur-sm"
                    >
                      {project.category}
                    </span>
                    <span className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-foreground/60">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-end justify-between gap-4">
                    <h3
                      className="font-black uppercase text-tight text-2xl text-foreground md:text-3xl"
                      dangerouslySetInnerHTML={{ __html: project.title }}
                    />

                    {/* View Project button — appears on hover */}
                    <motion.span
                      initial={false}
                      className="flex translate-y-2 items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-background opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      View Project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </motion.span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* See more link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex justify-center md:mt-24"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-foreground/70"
          >
            <span className="h-px w-8 bg-foreground transition-all duration-300 group-hover:w-16" />
            See the full archive
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
