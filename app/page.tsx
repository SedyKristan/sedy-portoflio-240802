import About from "@/components/about";
import Contacts from "@/components/contacts";
import Experiences from "@/components/experiences";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experiences />
      <Contacts />
    </main>
  );
}
