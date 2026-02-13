import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import OperatingHours from "@/components/OperatingHours";
import Venues from "@/components/Venues";
import RoomShowcase from "@/components/RoomShowcase";
import DongguSection from "@/components/DongguSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900 relative">
      {/* Global ambient background */}
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />

      <Navbar />
      <Hero />

      <div className="relative z-10">
        <RoomShowcase />

        <div className="section-divider max-w-md mx-auto" />
        <OperatingHours />

        <div className="section-divider max-w-md mx-auto" />
        <Venues />

        <div className="section-divider max-w-md mx-auto" />
        <DongguSection />

        <div className="section-divider max-w-md mx-auto" />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
