export type ProductType = "book" | "merch";

export interface Product {
  id: string;
  type: ProductType;
  title: string;
  description: string;
  price: string;
  image: string;
  paymentUrl: string;
  featured?: boolean;
  soldOut?: boolean;
}

export const stripeMode: "test" | "live" = "live";

export const PRODUCTS: Product[] = [
  {
    id: "book-sailors-ink",
    type: "book",
    title: "Saltwater & Ink",
    description:
      "A 67-page master class in tattoo technique by Mike Skinart, founder of Sailors Tattoo HK. Memoir + 7 chapters covering machines, ink, skin, technique, hygiene, design, and the business of tattooing. ~20,000 words. PDF format, printable. For serious artists only.",
    price: "HKD 180",
      image: "/shop/book-cover.jpg",
    paymentUrl: "https://mikeskinart.gumroad.com/l/srilu?_gl=1*dvotp7*_ga*MTI0NDIzNTg2OS4xNzg3OTk3NjQx*_ga_6LJN6D94N6*czE3ODc5OTc2NDAkbzEkZzEkdDE3ODgwMDA2NTAkajU4JGwwJGgw",
    featured: true,
  },
  {
    id: "book-sketches",
    type: "book",
    title: "Sketches from the Sea",
    description:
      "A softcover collection of preparatory drawings and graffiti studies — the rough work that becomes the final tattoo.",
    price: "USD 35",
    image:
      "https://placehold.co/600x800/0a0a0a/f4f1ea?text=Sketches&font=raleway",
    paymentUrl: "https://buy.stripe.com/test_8wM3eq4agdUV6HI9ba",
  },
{
  id: "merch-tee-black",
  type: "merch",
  title: "Sailors Badge Tee",
  description:
    "Sailors Tattoo HK emblem tee. Circular badge design featuring a tall ship in stormy seas, red roses, golden anchors, and lightning — classic American traditional tattoo style. Printed on premium black cotton. Unisex. Printed on demand, shipped worldwide.",
  price: "USD 35",
  image: "/shop/sailors-badge-transparent.png",
  paymentUrl: "https://www.etsy.com/hk-en/listing/4568783275/sailors-tattoo-skull-emblem-t-shirt",
  featured: true,
},  
  

  {
    id: "merch-tee-black",
    type: "merch",
    title: "Limited Prints",
    description:
      "A2 archival giclée prints of three signature tattoo designs, signed and numbered. Edition of 50.",
    price: "USD 120",
    image:
      "https://placehold.co/600x600/0a0a0a/c8a25a?text=Limited+Prints&font=raleway",
    paymentUrl: "https://buy.stripe.com/test_aEUaIL7sC28Z4Os8wM7eV00",
  },
  {
    id: "merch-tee-black",
    type: "merch",
    title: "Limited Prints",
    description:
      "A pack of 5 vinyl die-cut stickers featuring tattoo motifs. Weatherproof, dishwasher-safe.",
    price: "USD 12",
    image:
      "https://placehold.co/600x600/0a0a0a/f4f1ea?text=Sticker+Pack&font=raleway",
    paymentUrl: "https://buy.stripe.com/test_7sI3eq6oC28Z8xi7sXZEH00",
  },
];
