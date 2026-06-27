import { Navbar } from "@/layout/navbar";
import { Hero } from "@/section/Hero";
import { Experience } from "@/section/Experience";
import { Projects } from "@/section/Project";
import { About } from "@/section/about";
import { Testimonial } from "@/section/testimonial";
import { Contact } from "@/section/contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
}

export default App;