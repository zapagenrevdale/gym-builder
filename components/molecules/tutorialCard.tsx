import Image from "next/image";

const Tutorial: React.FC<Props> = ({ title, date, image }) => {
  return (
    <div className="max-w-[275px]">
      <div className="aspect-square mb-4 overflow-hidden rounded-md">
        <Image
          alt="Background"
          src={image}
          width={250}
          height={250}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <time className="font-light text-sm">{date}</time>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  date: string;
  image: string;
}

export default Tutorial;
