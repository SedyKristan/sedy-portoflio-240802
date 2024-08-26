import Link from "next/link";
import { motion } from "framer-motion";
import { useFormStatus } from "react-dom";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: "primary" | "secondary" | "danger";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "contained" | "outlined";
  href?: string;
  download?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
};

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  color = "primary",
  size = "medium",
  onClick,
  type = "button",
  variant = "contained",
  href,
  download,
  target,
}) => {
  const { pending } = useFormStatus();

  const hoverAnimation = {
    whileHover: { scale: 1.1 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
  };

  const pressedAnimation = {
    whileTap: { scale: 1 },
  };

  if (href) {
    return (
      <motion.a
        {...hoverAnimation}
        {...pressedAnimation}
        className={`button ${size} ${color} ${className ?? ""}`}
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      {...hoverAnimation}
      {...pressedAnimation}
      className={`button ${size} ${color} ${className ?? ""}`}
      onClick={onClick}
      type={type}
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
