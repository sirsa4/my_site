import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/projects/Projects";
import CV from "./components/Cv";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CV />
      <Skills />
      <About />
      <Projects />
    </>
  );
}
