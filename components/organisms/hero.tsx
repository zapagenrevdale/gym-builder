import Image from "next/image";
import PrimaryButton from "@/components/atoms/primaryButton";
import ArrowRightIcon from "@heroicons/react/24/outline/ArrowRightIcon";

const Hero = () => {
  const storeHandler = () => {};

  return (
    <div className="container w-full">
      {/* swiper */}
      <div className="relative flex flex-col min-h-[720px] justify-center items-center gap-10">
        <h1 className="text-8xl font-grotesk font-black w-2/3 text-center bg-gradient-to-r text-transparent bg-clip-text from-neutral-900 via-neutral-800 to-neutral-900">
          Power Up Your Fitness Journey with Quality Gym Equipment!
        </h1>
        <p className="text-xl font-semibold text-white w-1/3 text-center">
          Discover our top-tier gear designed to help you reach your fitness
          goals.
        </p>

        <PrimaryButton
          className="flex items-center justify-center primary-button-black font-bold gap-4 rounded-md"
          handler={storeHandler}
        >
          Explore Products <ArrowRightIcon className="h-4 w-4 stroke-[3px]" />
        </PrimaryButton>

        <Image
          alt="Background"
          src="/images/background.jpg"
          width={1500}
          height={750}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0",
            top: "0",
            objectFit: "cover",
            borderRadius: "6px",
            overflow: "hidden",
            zIndex: "-10",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
