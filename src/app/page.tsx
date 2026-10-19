import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { About } from "@/components/home/About";
import { Process } from "@/components/home/Process";
import { Skills } from "@/components/home/Skills";
import { Work } from "@/components/home/Work";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <Marquee />
      <About />
      <Process />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}
