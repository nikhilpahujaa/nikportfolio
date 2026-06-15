import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Activity from "@/components/sections/Activity";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* Evidence before lists — projects come before skills */}
        <Projects />
        <Experience />
        <Skills />
        <Activity />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
