import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";

import portfolioImage from "@public/portfolio.png";
import portfolioV2Image from "@public/portfolio-v2.png";
import healthcareImage from "@public/healthcare.png";

import airtable from "@public/skills/airtable.svg";
import appscript from "@public/skills/appscript.svg";
import automation from "@public/skills/automation.svg";
import blender from "@public/skills/blender.svg";
import bulma from "@public/skills/bulma.svg";
import css from "@public/skills/css.svg";
import figma from "@public/skills/figma.svg";
import firebase from "@public/skills/firebase.svg";
import gatsby from "@public/skills/gatsby.svg";
import git from "@public/skills/git.svg";
import graphql from "@public/skills/graphql.svg";
import html from "@public/skills/html.svg";
import illustrator from "@public/skills/illustrator.svg";
import javascript from "@public/skills/javascript.svg";
import materialUi from "@public/skills/material-ui.svg";
import nextJs from "@public/skills/nextjs.svg";
import prototyping from "@public/skills/prototyping.svg";
import reactJs from "@public/skills/reactjs.svg";
import scss from "@public/skills/scss.svg";
import tailwindcss from "@public/skills/tailwindcss.svg";
import typescript from "@public/skills/typescript.svg";
import ui from "@public/skills/ui.svg";
import ux from "@public/skills/ux.svg";
import wireframing from "@public/skills/wireframing.svg";

export const links = [
  {
    name: "Home",
    id: "#home",
  },
  {
    name: "About",
    id: "#about",
  },
  {
    name: "Projects",
    id: "#projects",
  },
  {
    name: "Skills",
    id: "#skills",
  },
  {
    name: "Experiences",
    id: "#experiences",
  },
  {
    name: "Contact",
    id: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "UIUX Design",
    description:
      "During my UI/UX course at CIIT College of Arts and Technology, I learned user-centered design principles, user research, and analysis. I developed skills in creating user personas, journey maps, and wireframes using Figma. The course emphasized usability testing and iterative design, equipping me to create intuitive and visually appealing interfaces.",
    company: "CIIT College of Arts and Technology Inc.",
    date: "2023",
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Fullstack Web Developer",
    description:
      "I managed and maintained websites, ensuring optimal functionality. I developed large-scale projects, collaborated with business units to translate requirements into technical solutions, and created visual designs, prototypes, and wireframes to enhance user experience, ensuring seamless transitions from design to front-end code",
    company: "MedGrocer",
    date: "2022-Present",
    icon: React.createElement(CgWorkAlt),
  },
];

export const projectsData = [
  {
    title: "HealthCare App",
    description:
      "I designed the user flow and UI for the HealthCare app, creating an intuitive and sleek experience. As the front-end developer, I implemented key functionalities to enhance usability and streamline healthcare management.",
    tags: [
      "Figma",
      "Adobe Ill.",
      "ReactJs",
      "NextJs",
      "TailwindCSS",
      "Airtable",
      "Firebase",
      "Framer",
    ],
    imageURL: healthcareImage,
  },
  {
    title: "Portoflio",
    description:
      "I design and develop dynamic web experiences, utilizing Framer Motion for engaging animations. My portfolio showcases a range of projects and highlights my skills and experiences in creating innovative and interactive user interfaces.",
    tags: ["Figma", "ReactJs", "NextJs", "TailwindCSS", "Typescript", "Framer"],
    imageURL: portfolioImage,
  },
  {
    title: "Portoflio v2",
    description:
      "Featuring enhanced animations with Framer Motion and an improved design, my Portfolio v2 showcases a refined approach to web development. Utilizing Airtable for web sourcing, this version is still a work in progress, continually evolving to better reflect my skills and projects.",
    tags: ["Figma", "ReactJs", "NextJs", "TailwindCSS", "Airtable", "Framer"],
    imageURL: portfolioV2Image,
  },
] as const;

export const skillsData = [
  { name: "HTML", imageURL: html, order: 1 },
  { name: "CSS", imageURL: css, order: 2 },
  { name: "Javascript", imageURL: javascript, order: 3 },
  { name: "Typescript", imageURL: typescript, order: 4 },
  { name: "ReactJS", imageURL: reactJs, order: 5 },
  { name: "NextJS", imageURL: nextJs, order: 6 },
  { name: "GraphQL", imageURL: graphql, order: 7 },
  { name: "Gatsby", imageURL: gatsby, order: 8 },
  { name: "SCSS", imageURL: scss, order: 9 },
  { name: "TailwindCSS", imageURL: tailwindcss, order: 10 },
  { name: "Git", imageURL: git, order: 11 },
  { name: "Material UI", imageURL: materialUi, order: 12 },
  { name: "Bulma", imageURL: bulma, order: 13 },
  { name: "Appscript", imageURL: appscript, order: 14 },
  { name: "Firebase", imageURL: firebase, order: 15 },
  { name: "Airtable", imageURL: airtable, order: 16 },
  { name: "Automation", imageURL: automation, order: 17 },
  { name: "UI", imageURL: ui, order: 18 },
  { name: "UX", imageURL: ux, order: 19 },
  { name: "Prototyping", imageURL: prototyping, order: 20 },
  { name: "Illustrator", imageURL: illustrator, order: 21 },
  { name: "Figma", imageURL: figma, order: 22 },
  { name: "Wireframing", imageURL: wireframing, order: 23 },
  { name: "Blender", imageURL: blender, order: 24 },
] as const;
