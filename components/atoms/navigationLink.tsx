import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const NavigationLink: React.FC<Props> = ({ href, text }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      className="font-medium text-lg font-grotesk"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <p>{text}</p>
      <motion.div
        animate={{
          width: hovered ? "100%" : "0px",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className="bg-neutral-800 h-[2px]"
      />
    </Link>
  );
};

interface Props {
  href: string;
  text: string;
}

export default NavigationLink;
