"use client";

import Container from "../ui/Container";
import HeroHeadline from "./heroHeadline";
import HeroImage from "./HeroImage";
import { useSectionInView } from "@/lib/hooks";

const Hero = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section id="home" ref={ref} className="home">
      <Container className="hero">
        <HeroImage />
        <HeroHeadline />
      </Container>
    </section>
  );
};

export default Hero;
