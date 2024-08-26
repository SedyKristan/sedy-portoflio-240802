"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";
import { IoCloudDownloadOutline } from "react-icons/io5";

const HeroHeadline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 1, delay: 1, ease: "easeInOut" },
      }}
      className="hero-headline"
    >
      <h1 className="text-center lg:text-left">
        Hi, I'm Sedy, <span>a</span> web developer and designer
        <span>with</span> 1 year and 9 months{" "}
        <span>
          of experience. I specialize in building and designing websites using
          React.js (Next.js) and Figma.
        </span>
      </h1>
      <Button href="/CV.pdf" download target="_blank">
        Download CV
        <IoCloudDownloadOutline />
      </Button>
    </motion.div>
  );
};

export default HeroHeadline;
