"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/lib/data";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => {
    return { opacity: 1, y: 0, transition: { delay: 0.05 * index } };
  },
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");

  return (
    <section ref={ref} className="bg-custom-gradient">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading>Skills</SectionHeading>
        <ul className="skill-wrapper">
          {skillsData.map((skill, index) => {
            return (
              <motion.li
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <Image src={skill.imageURL} alt={`skill-${skill.name}`} />
                <p className="skill-label">{skill.name}</p>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
};

export default Skills;
