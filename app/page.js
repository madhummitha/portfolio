import Header from "./components/Header";
import Contact from "./contact/page";
import About from "./about/page";
import Projects from "./projects/page";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
