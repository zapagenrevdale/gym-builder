import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import PrimaryButton from "../atoms/primaryButton";
import { useRouter } from "next/router";

const CollectionCard: React.FC<Props> = ({
  category,
  href,
  image,
  items,
  className,
}) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();
  console.log(hovered);
  return (
    <div
      className={`relative rounded-lg overflow-hidden ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div whileHover={{ scale: 1.15, transition: { duration: 0.4 } }}>
        <Image
          alt="Background"
          src={image}
          width={360}
          height={461}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </motion.div>
      <PrimaryButton
        handler={() => router.push(href)}
        className={`${
          hovered ? "hover-button-white " : "primary-button-white"
        } flex items-center justify-between absolute bottom-6 left-1/2 -translate-x-1/2 w-5/6 rounded-md font-grotesk `}
      >
        <h6 className="font-semibold">{category}</h6>
        <p className="font-light font-sans text-sm">{items} ITEMS</p>
      </PrimaryButton>
    </div>
  );
};

interface Props {
  items: number;
  image: string;
  category: string;
  href: string;
  className: string;
}

export default CollectionCard;
