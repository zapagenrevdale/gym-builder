import NavigationButton from "@/components/atoms/navigationButton";
import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import ShoppingBagIcon from "@heroicons/react/24/outline/ShoppingBagIcon";

const NavigationTransaction = () => {
  const searchHandler = () => {};

  return (
    <div>
      {/* search */}
      <NavigationButton handler={searchHandler}>
        <MagnifyingGlassIcon className="h-5 w-5 text-black" />
      </NavigationButton>
      <NavigationButton handler={searchHandler}>
        <UserIcon className="h-5 w-5 text-black" />
      </NavigationButton>
      <NavigationButton handler={searchHandler}>
        <HeartIcon className="h-5 w-5 text-black" />
      </NavigationButton>
      <NavigationButton handler={searchHandler}>
        <ShoppingBagIcon className="h-5 w-5 text-black" />
      </NavigationButton>
    </div>
  );
};

export default NavigationTransaction;
