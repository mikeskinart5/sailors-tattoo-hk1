"use client";

import { motion } from "framer-motion";
import { Facebook, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative w-full overflow-hidden bg-background px-5 pb-10 pt-24 md:px-10 md:pb-12 md:pt-36"
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
          <span>Contact · Bookings Open</span>
        </motion.div>

        {/* Massive LET'S TALK CTA */}
        <motion.a
          href="mailto:mikeskinart5@icloud.com"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="group block w-full"
        >
          <h2 className="font-black uppercase text-display text-[clamp(3.5rem,17vw,18rem)] leading-[0.82] text-foreground/30 transition-colors duration-500 group-hover:text-foreground">
            Let&apos;s
          </h2>
          <h2 className="flex items-center gap-4 font-black uppercase text-display text-[clamp(3.5rem,17vw,18rem)] leading-[0.82] text-foreground transition-colors duration-500 group-hover:text-[var(--gold-soft)]">
            Talk
            <ArrowUpRight className="h-[0.45em] w-[0.45em] shrink-0 transition-transform duration-500 group-hover:translate-x-3 group-hover:-translate-y-3" />
          </h2>
        </motion.a>

        {/* Contact grid */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 md:grid-cols-12 md:gap-8">
          {/* Email card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5"
          >
            <div className="flex items-center gap-3 text-eyebrow text-foreground/60">
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </div>
            <div className="mt-4 space-y-1">
              <a
                href="mailto:mikeskinart5@icloud.com"
                className="block font-bold text-xl text-foreground transition-colors hover:text-[var(--gold-soft)] md:text-2xl"
              >
                mikeskinart5@icloud.com
              </a>
              <a
                href="mailto:mikeskinart5.official@icloud.com"
                className="block text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                mikeskinart5.official@icloud.com
              </a>
            </div>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="flex items-center gap-3 text-eyebrow text-foreground/60">
              <Phone className="h-4 w-4" />
              <span>Phone</span>
            </div>
            <a
              href="https://wa.me/85296784293"
              className="mt-4 block font-bold text-xl text-foreground transition-colors hover:text-[var(--gold-soft)] md:text-2xl"
            >
              +852 9678 4293
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              Bookings by appointment
            </p>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-4"
          >
            <div className="flex items-center gap-3 text-eyebrow text-foreground/60">
              <MapPin className="h-4 w-4" />
              <span>Studio</span>
            </div>
            <p className="mt-4 font-bold text-xl leading-snug text-foreground md:text-2xl">
              No.107 1/f DD5
              <br />
              Pa Mei, 4265 Tung Chung
              <br />
              Hong Kong
            </p>
          </motion.div>
        </div>

        {/* Tagline strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-white/10 py-10 text-center"
        >
          <p className="text-eyebrow text-muted-foreground">
            &ldquo;If the body is a temple, why not decorate the walls?&rdquo;
          </p>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/black-cat-logo.png"
              alt="Sailors Tattoo HK mark"
              className="h-9 w-9 object-contain mix-blend-screen"
            />
            <span className="font-black uppercase text-sm tracking-[0.2em] text-foreground">
              Sailors Tattoo HK
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/Sailors-Tattoo-Hong-Kong-226169224167908/timeline"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Sailors Tattoo HK on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground/70 transition-colors duration-300 hover:border-foreground hover:text-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:mikeskinart5@icloud.com"
              aria-label="Email Sailors Tattoo HK"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground/70 transition-colors duration-300 hover:border-foreground hover:text-foreground"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="tel:+85296784293"
              aria-label="Call Sailors Tattoo HK"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-foreground/70 transition-colors duration-300 hover:border-foreground hover:text-foreground"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            &copy; {new Date().getFullYear()} Sailors Tattoo HK · Mike dela Paz
          </p>
        </div>
      </div>
    </footer>
  );
}
