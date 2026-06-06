import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Pillars from "@/components/Pillars";
import Patents from "@/components/Patents";
import Publications from "@/components/Publications";
import Speaking from "@/components/Speaking";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-mist min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Pillars />
      <Patents />
      <Publications />
      <Speaking />
      <Contact />
    </main>
  );
}
