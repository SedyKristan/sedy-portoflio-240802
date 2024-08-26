"use client";

import { projectsData } from "@/lib/data";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  imageURL,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <div className="project-card group">
        <div className="wrapper group-even:sm:ml-[20rem]">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>

          <ul>
            {tags.map((tag, index) => {
              return <li key={index}>{tag}</li>;
            })}
          </ul>
        </div>

        <Image
          src={imageURL}
          alt={title}
          quality={95}
          className="group-even:right-[initial] 
            group-even:-left-40 
            group-hover:-translate-x-3 
            group-hover:-translate-y-3 
            group-hover:-rotate-2 
            group-hover:scale-[1.04]
            transition 
            group-even:group-hover:translate-x-3 
            group-even:group-hover:translate-y-3 
            group-even:group-hover:rotate-2 
            group-even:group-hover:scale-[1.04]
          "
        />
      </div>
    </motion.div>
  );
};

export default Project;
