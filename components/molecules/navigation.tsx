import NavigationLink from "../atoms/navigationLink";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-center space-x-8">
      <NavigationLink href="/" text="Shop" />
      <NavigationLink href="" text="About" />
      <NavigationLink href="" text="Tutorials" />
      <NavigationLink href="" text="Contact" />
    </nav>
  );
};

export default Navigation;
