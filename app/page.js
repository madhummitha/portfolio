import Image from "next/image";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Contact from "./contact/page";
import About from "./about/page";

export default function Home() {
  return (
    <div>
      {/* <NavBar /> */}
      <Header />
      <About />
      <Contact />
    </div>
  );
}
