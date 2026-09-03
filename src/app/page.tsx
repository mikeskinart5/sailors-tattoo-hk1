import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { WorkGrid } from "@/components/landing/work-grid";
import { Services } from "@/components/landing/services";
import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { BookingModal } from "@/components/landing/booking-modal";
import { ShopModal } from "@/components/landing/shop-modal";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <WorkGrid />
      <Services />
      <About />
      <Contact />
      {/* Booking modal — triggered by any "Book a Session" button */}
      <BookingModal />
      {/* Shop modal — triggered by any "Shop" button */}
      <ShopModal />
    </main>
  );
}