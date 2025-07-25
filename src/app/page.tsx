import AboutSection from "@/components/sections/about/about-section";
import ProjectsSection from "@/components/sections/projects/projects-section";
import ContactSection from "@/components/sections/contact/contact-section";
import { Footer } from "@/components/footer";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/sections/hero/hero-section"));
const Navbar = dynamic(() => import("@/components/navbar"));

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
