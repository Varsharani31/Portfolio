import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Internships from "./components/Internships";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <div className="bg-blobs" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Internships />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}