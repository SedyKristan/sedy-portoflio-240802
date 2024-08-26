"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { experiencesData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectionContext";

const Experiences = () => {
  const { ref } = useSectionInView("Experiences", 0.5);
  const { activeSection } = useActiveSectionContext();

  return (
    <section id="experiences" ref={ref}>
      <Container className="flex flex-col items-center gap-8 text-center">
        <SectionHeading>My Experiences</SectionHeading>
        <VerticalTimeline
          lineColor=""
          animate={activeSection === "Experiences"}
        >
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={activeSection === "Experiences"}
                contentStyle={{
                  background: "#9BBBFC20",
                  boxShadow: "none",
                  textAlign: "left",
                  padding: "20px 24px",
                  borderTop: "2px solid #4741A6",
                  borderRadius: "0px",
                  opacity: `${activeSection === "Experiences" ? "1" : "0"}`,
                }}
                contentArrowStyle={{
                  borderRight: "8px solid #F3F1EF",
                }}
                date={item.date}
                dateClassName="!font-bold"
                icon={item.icon}
                iconClassName="icon"
              >
                <div className="experiences-item">
                  <div>
                    <h3>{item.title}</h3>
                    <p className="text-sm font-bold">{item.company}</p>
                  </div>
                  <p className="description">{item.description}</p>
                </div>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </Container>
    </section>
  );
};

export default Experiences;
