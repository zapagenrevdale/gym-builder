import Categories from "@/components/organisms/categories";
import Hero from "@/components/organisms/hero";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />

      <Categories />
      <div className="h-screen"></div>
    </div>
  );
};

export default Home;
