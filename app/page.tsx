import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommunityOverview from "@/components/CommunityOverview";
import FloorPlanBrowser from "@/components/FloorPlanBrowser";
import Amenities from "@/components/Amenities";
import Gallery from "@/components/Gallery";
import Neighborhood from "@/components/Neighborhood";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PromoPopup from "@/components/PromoPopup";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <PromoPopup />
      <Navbar />
      <Hero />
      <CommunityOverview />
      <Amenities />
      <Gallery />
      <Neighborhood />
      <Contact />
      <Footer />
    </main>
  );
}
