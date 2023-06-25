import Categories from "@/components/organisms/categories";
import Hero from "@/components/organisms/hero";
import Tutorials from "@/components/organisms/tutorials";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Hero />
      <Categories />
      <Tutorials />
    </div>
  );
};

export default Home;
