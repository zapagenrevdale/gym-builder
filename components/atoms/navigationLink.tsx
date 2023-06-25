import Link from "next/link";

const NavigationLink: React.FC<Props> = ({ href, text }) => {
  return (
    <Link href={href} className="font-medium text-lg font-grotesk">
      {text}
    </Link>
  );
};

interface Props {
  href: string;
  text: string;
}

export default NavigationLink;
