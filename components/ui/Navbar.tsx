"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/activeSectionContext";
import { links } from "@/lib/data";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 1.5 } }}
    >
      <ul>
        {links.map((link) => (
          <motion.li key={link.id}>
            <Link
              href={link.id}
              className={activeSection === link.name ? "active" : "default"}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
            >
              <span className="active-label">{link.name}</span>
              {link.name === activeSection && (
                <motion.span
                  layoutId="activeLink"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                  className="active-bg"
                ></motion.span>
              )}
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
