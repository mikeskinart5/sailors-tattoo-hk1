"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Book, Shirt, ArrowUpRight, Star } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useShopStore } from "@/lib/shop-store";
import { PRODUCTS, stripeMode, type ProductType } from "@/lib/products";

type FilterType = "all" | ProductType;

export function ShopModal() {
  const isOpen = useShopStore((s) => s.isOpen);
  const close = useShopStore((s) => s.close);
  const [filter, setFilter] = useState<FilterType>("all");

  const filtered =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.type === filter);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) close();
      }}
    >
      <DialogContent className="max-h-[92vh] overflow-y-auto overflow-x-hidden border-white/10 bg-background/95 p-0 backdrop-blur-xl sm:max-w-[1000px]">
        <DialogHeader className="border-b border-white/10 px-6 pb-6 pt-7">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-6 w-6 text-[var(--gold)]" />
              <DialogTitle className="font-black uppercase text-3xl tracking-tight text-foreground">
                The Shop
              </DialogTitle>
            </div>
            <span
              className={`rounded-full px-3 py-1 text-[0.6rem] uppercase tracking-[0.16em] ${
                stripeMode === "test"
                  ? "border border-yellow-500/30 bg-yellow-500/10 text-yellow-300"
                  : "border border-green-500/30 bg-green-500/10 text-green-300"
              }`}
            >
              {stripeMode === "test" ? "Test Mode" : "Live"}
            </span>
          </div>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Books, prints, and merch from Mike Skirt. Every purchase
            supports the studio. Secure checkout handled by Stripe.
          </DialogDescription>

          <div className="mt-5 flex gap-2">
            {(
              [
                { key: "all", label: "All" },
                { key: "book", label: "Books" },
                { key: "merch", label: "Merch" },
              ] as { key: FilterType; label: string }[]
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilter(tab.key)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-200 ${
                  filter === tab.key
                    ? "bg-foreground text-background"
                    : "border border-white/15 text-foreground/70 hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </DialogHeader>

        <div className="p-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <motion.article
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-card"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-background">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    className="h-full w-full object-cover saturate-0 contrast-110 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-3 top-3 flex gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] backdrop-blur-md ${
                        product.type === "book"
                          ? "bg-foreground/80 text-background"
                          : "border border-white/20 bg-background/50 text-foreground"
                      }`}
                    >
                      {product.type === "book" ? (
                        <Book className="h-3 w-3" />
                      ) : (
                        <Shirt className="h-3 w-3" />
                      )}
                      {product.type === "book" ? "Book" : "Merch"}
                    </span>
                    {product.featured && (
                      <span
                        className="inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] backdrop-blur-md"
                        style={{
                          borderColor: "var(--gold)",
                          background: "rgba(200,162,90,0.15)",
                          color: "var(--gold-soft)",
                        }}
                      >
                        <Star className="h-3 w-3" />
                        Featured
                      </span>
                    )}
                  </div>
                  {product.soldOut && (
                    <div className="absolute inset-0 flex items-center justify-center bg-background/80">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/60">
                        Sold Out
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-black uppercase text-lg leading-tight text-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <span
                      className="font-bold text-lg"
                      style={{ color: "var(--gold-soft)" }}
                    >
                      {product.price}
                    </span>
                    {product.soldOut ? (
                      <span className="rounded-full border border-white/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Sold Out
                      </span>
                    ) : (
                      <a
                        href={product.paymentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-background transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
                      >
                        Buy
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-center text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
            Secure checkout by Stripe · Free shipping on orders over USD 75
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
