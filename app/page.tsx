import Contact from "@/components/homepage/contact";
import HeroSection from "@/components/homepage/hero";
import TopTour from "@/components/tour/top-tour";

export default function page() {
  return (
    <div>
      <HeroSection />
      <TopTour />
      <Contact />
    </div>
  );
}
