"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/projects";
import Skills from "@/components/Skills"; // Correct import for Skills
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    Aos.refresh();
  }, []);

  return (
    <main>
      <Hero />
      <Projects /> {/* Correct naming */}
      <Skills />  {/* Ensured correct import */}
      <Contact />
      <About />
    </main>
  );
}
