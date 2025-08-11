import { TailwindIndicator } from "@/components/molecules/TailwindIndicator";
import AboutUs from "@/components/organisms/AboutUs/AboutUs";
import Hero from "@/components/organisms/Hero/Hero";
import Services from "@/components/organisms/Services/Services";

export default function LandingTemplate() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <TailwindIndicator />
    </>
  );
}
