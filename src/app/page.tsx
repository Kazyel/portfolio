import Navbar from "@/components/navbar";

import HeroSection from "@/components/sections/hero/hero-section";
import AboutSection from "@/components/sections/about/about-section";
import ProjectsSection from "@/components/sections/projects/projects-section";
import ContactSection from "@/components/sections/contact/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="xl:snap-mandatory xl:snap-y xl:overflow-y-scroll xl:h-screen xl:scroll-smooth bg-darkest">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}
