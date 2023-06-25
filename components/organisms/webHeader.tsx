import Navigation from "@/components/molecules/navigation";
import NavigationTransaction from "@/components/molecules/navigationTransaction";

const WebHeader = () => {
  return (
    <div className="h-16 lg:h-20 hidden lg:flex items-center max-w-[1200px] justify-between w-full px-4">
      <h1 className="font-grotesk text-2xl">
        <span className="font-light">Gym</span>
        <span className="font-extrabold">Builder </span>
      </h1>
      <Navigation />
      <NavigationTransaction />
    </div>
  );
};

export default WebHeader;
