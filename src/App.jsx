import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";

import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
