import Header from "./components/Header";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
}
