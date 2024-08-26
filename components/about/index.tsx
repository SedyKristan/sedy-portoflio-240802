"use client";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About", 0.8);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.75 }}
      id="about"
    >
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading>About Me</SectionHeading>
        <p>
          “After graduating with a degree in Computer Engineering, I began my
          career as a{" "}
          <span className="font-semibold">full-stack web developer</span> in the
          healthcare industry. I have experience maintaining and developing
          websites, as well as creating new projects. My passion for visual arts
          led me to study <span className="font-semibold">UI/UX design</span>,
          allowing me to combine my technical and artistic skills to build and
          design engaging websites.{" "}
          <span className="font-bold text-secondary">
            I develop as a designer and I design as a developer
          </span>
          .”
        </p>
      </Container>
    </motion.section>
  );
};

export default About;
