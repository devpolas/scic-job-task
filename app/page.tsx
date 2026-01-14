import Contact from "@/components/homepage/contact";
import HeroSection from "@/components/homepage/hero";
import TourCard from "@/components/tour/tour-card";

export default function page() {
  return (
    <div>
      <HeroSection />
      <TourCard />
      <Contact />
    </div>
  );
}
