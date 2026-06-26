import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Now from "./components/Now.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-lg focus:bg-[var(--color-accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[oklch(0.16_0_0)]"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Now />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
