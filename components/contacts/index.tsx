"use client";

import { useSectionInView } from "@/lib/hooks";
import Button from "../ui/Button";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import { motion } from "framer-motion";

import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

const Contacts = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
    >
      <Container className="contacts-container mb-20 sm:mb-28 w-[min(100%,38rem)]">
        <SectionHeading>Contact Me</SectionHeading>
        <p>
          Please contact me directly at{" "}
          <a href="mailto:ribayasedy@gmail.com">ribayasedy@gmail.com</a> or
          through this form.
        </p>
        <form
          action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
              toast.error(error);
              return;
            }

            toast.success("Email sent Succesfully!");
          }}
        >
          <input
            type="email"
            name="senderEmail"
            placeholder="Your Email"
            required
            maxLength={500}
          />
          <textarea
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
          <Button type="submit" className="button">
            Submit <FaPaperPlane />
          </Button>
        </form>
      </Container>
    </motion.section>
  );
};

export default Contacts;
