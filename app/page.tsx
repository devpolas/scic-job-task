import CallToAction from "@/components/homepage/cta";
import FaqSection from "@/components/homepage/faq";
import Contact from "@/components/homepage/contact";
import HeroSection from "@/components/homepage/hero";
import Testimonials from "@/components/homepage/testimonials";
import WhyChooseUs from "@/components/homepage/why-choose";
import TopTour from "@/components/homepage/top-tour";

export default function page() {
  return (
    <div>
      <HeroSection />
      <TopTour />
      <CallToAction />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <FaqSection />
    </div>
  );
}
