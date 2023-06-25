import Navigation from "@/components/molecules/navigation";
import NavigationTransaction from "@/components/molecules/navigationTransaction";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 w-full z-20 flex justify-center bg-white/[0.97]">
      <div className="container flex items-center justify-center shadow-md">
        <div className="h-18 lg:h-20 flex items-center max-w-[1200px] justify-between w-full">
          <h1 className="font-grotesk text-2xl">
            <span className="font-light">Gym</span>
            <span className="font-extrabold">Builder </span>
          </h1>
          {/* nav */}
          <Navigation />

          {/* buttons */}
          <NavigationTransaction />
        </div>
        {/* logo */}
      </div>
    </header>
  );
};

export default Header;
