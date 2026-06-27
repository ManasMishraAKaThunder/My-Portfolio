import { Hero } from "@/section/Hero";
import { Experience } from "@/section/Experience";
import { Projects } from "@/section/Project";
import { about } from "@/section/about";
import {testimonial} from "@/section/testimonial";
import {contact} from "@/section/contact";
import "@/index.css";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <navbar />
        <main>
          <Hero />
          <about />
          <Projects />
          <Experience />
          <testimonial />
          <contact />
        </main>
    </div>
  );
}

export default App;