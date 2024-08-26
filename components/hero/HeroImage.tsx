"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

import heroImage from "@public/hero-image.svg";

const HeroImage = () => {
  const controls = useAnimation();

  const hexBorderVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        opacity: {
          duration: 0.5,
        },
        pathLength: {
          duration: 2,
          ease: "easeInOut",
          delay: 0.5,
        },
      },
    },
  };

  const hexImageVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 2,
        delay: 1.5,
      },
    },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
        },
        floating: {
          y: [0, -10, 0],
          transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          },
        },
      }}
      initial="hidden"
      animate={["visible", "floating"]}
      className="hero-image"
    >
      <motion.div
        variants={hexImageVariants}
        initial="hidden"
        animate={controls}
        className="raw"
      >
        <Image src={heroImage} alt="hero image" quality={95} />
      </motion.div>
      <svg
        width="339"
        height="390"
        viewBox="0 0 339 390"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M330.726 125.213V264.787C330.726 279.078 323.102 292.283 310.726 299.428L189.851 369.215C177.475 376.361 162.227 376.361 149.851 369.215L28.9761 299.428C16.6 292.283 8.97607 279.078 8.97607 264.787V125.213C8.97607 110.922 16.6 97.7171 28.9761 90.5718L149.851 20.7846C162.227 13.6393 177.475 13.6393 189.851 20.7846L310.726 90.5718C323.102 97.7171 330.726 110.922 330.726 125.213Z"
          stroke="white"
          strokeWidth="16"
          strokeLinecap="round"
          variants={hexBorderVariants}
          initial="hidden"
          animate={controls}
        />
      </svg>
    </motion.div>
  );
};

export default HeroImage;
