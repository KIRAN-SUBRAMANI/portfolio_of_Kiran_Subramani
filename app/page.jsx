import TopNav from "../components/TopNav";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects/>
      <Education />
      <Contact />
      <Footer />
      {/* later: Experience, Skills, Projects, Contact */}
    </>
  );
}