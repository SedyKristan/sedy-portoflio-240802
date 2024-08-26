"use client";

import { projectsData } from "@/lib/data";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Project from "./Project";
import React from "react";
import { useSectionInView } from "@/lib/hooks";

const Projects = ({}) => {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section id="projects" ref={ref}>
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading>My Projects</SectionHeading>
        <div>
          {projectsData.map((project, index) => {
            return (
              <React.Fragment key={index}>
                <Project {...project} />
              </React.Fragment>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
