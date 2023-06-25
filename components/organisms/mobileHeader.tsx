import Navigation from "@/components/molecules/navigation";
import NavigationTransaction from "@/components/molecules/navigationTransaction";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";

const MobileHeader = () => {
  return (
    <div className="h-16 lg:h-20 flex lg:hidden items-center max-w-[1200px] justify-between w-full px-4">
      <Bars3Icon className="h-5 w-5 text-black" />
      <h1 className="font-grotesk text-2xl">
        <span className="font-light">Gym</span>
        <span className="font-extrabold">Builder </span>
      </h1>
      <NavigationTransaction />
    </div>
  );
};

export default MobileHeader;
