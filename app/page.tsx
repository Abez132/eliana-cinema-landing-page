import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Tickets from "@/components/Tickets";
import Snacks from "@/components/Snacks";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import ReservationCTA from "@/components/ReservationCTA";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingReserveButton from "@/components/FloatingReserveButton";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tickets />
      <Snacks />
      <Reviews />
      <Gallery />
      <ReservationCTA />
      <LocationSection />
      <Footer />
      <FloatingReserveButton />
    </main>
  );
}
