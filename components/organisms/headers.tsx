import WebHeader from "@/components/organisms/webHeader";
import MobileHeader from "@/components/organisms/mobileHeader";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 w-full z-20 flex justify-center bg-white/[0.97]">
      <div className="container flex items-center justify-center shadow-md">
        <WebHeader />
        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;
