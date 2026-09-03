"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useBookingStore } from "@/lib/booking-store";
import { useShopStore } from "@/lib/shop-store";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const openBooking = useBookingStore((s) => s.open);
  const openShop = useShopStore((s) => s.open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-5 md:px-10 md:py-7">
        {/* Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Sailors Tattoo — back to top"
        >
          <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.02] transition-colors duration-300 group-hover:border-[var(--gold)]">
            <img
              src="/black-cat-logo.png"
              alt=""
              aria-hidden
              className="h-9 w-9 object-contain opacity-95 mix-blend-screen transition-transform duration-500 group-hover:scale-110"
            />
          </span>
          <span className="font-bold text-base font-black uppercase tracking-[0.2em] text-foreground md:text-lg">
            Sailors
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          {/* Shop button — opens the shop modal */}
          <li>
            <button
              type="button"
              onClick={openShop}
              className="group relative flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors duration-300 hover:text-foreground"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Shop
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-foreground transition-all duration-300 group-hover:w-full" />
            </button>
          </li>
        </ul>

        {/* CTA on desktop */}
        <button
          type="button"
          onClick={openBooking}
          className="hidden md:inline-flex items-center rounded-full border border-white/15 bg-white/[0.02] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-background"
        >
          Book a Session
        </button>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-background/95 px-5 pb-10 pt-28 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  className="border-b border-white/5"
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5 text-5xl font-black uppercase tracking-tight text-foreground"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-medium text-muted-foreground">
                      0{i + 1}
                    </span>
                  </a>
                </motion.li>
              ))}
              {/* Shop — mobile menu item */}
              <motion.li
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.34, duration: 0.5 }}
                className="border-b border-white/5"
              >
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openShop();
                  }}
                  className="flex w-full items-baseline justify-between py-5 text-5xl font-black uppercase tracking-tight text-foreground"
                >
                  <span className="flex items-center gap-3">
                    <ShoppingBag className="h-6 w-6 text-[var(--gold)]" />
                    Shop
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    04
                  </span>
                </button>
              </motion.li>
            </ul>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="space-y-3"
            >
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openBooking();
                }}
                className="w-full rounded-full bg-foreground py-4 text-xs font-semibold uppercase tracking-[0.18em] text-background"
              >
                Book a Session
              </button>
              <a
                href="tel:+85296784293"
                className="block text-sm uppercase tracking-[0.18em] text-muted-foreground"
              >
                +852 5231 4491
              </a>
              <a
                href="mailto:mikeskinart5@icloud.com"
                className="block text-sm uppercase tracking-[0.18em] text-muted-foreground"
              >
                mikeskinart5@icloud.com
              </a>
              <p className="pt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground/60">
                Tung Chung · Hong Kong
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}