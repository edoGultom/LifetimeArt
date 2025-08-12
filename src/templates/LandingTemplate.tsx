import { TailwindIndicator } from "@/components/molecules/TailwindIndicator";
import AboutUs from "@/components/organisms/AboutUs/AboutUs";
import Contact from "@/components/organisms/Contact/Contact";
import FAQs from "@/components/organisms/FAQs/FAQs";
import Footer from "@/components/organisms/Footer/Footer";
import Hero from "@/components/organisms/Hero/Hero";
import Services from "@/components/organisms/Services/Services";
import Testimonials from "@/components/organisms/Testimonials/Testimonials";

export default function LandingTemplate() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <TailwindIndicator />
    </>
  );
}
