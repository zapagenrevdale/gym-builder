import CollectionCard from "@/components/molecules/collectionCard";

const Categories = () => {
  return (
    <div className="container flex flex-col items-center font-medium mt-20">
      <h4 className="uppercase underline underline-offset-8 mb-4 text-sm">
        SHOP BY CATEGORIES
      </h4>
      <h2 className="text-5xl font-bold mb-14">Equipment Collection</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7 items-center">
        <CollectionCard
          items={11}
          category={"Living room"}
          image={"/images/cat1.webp"}
          href="/"
          className=""
        />
        <CollectionCard
          items={11}
          category={"Modern painting"}
          image={"/images/cat2.webp"}
          href="/"
          className="xl:h-3/4"
        />
        <CollectionCard
          items={11}
          category={"Clay Pots"}
          image={"/images/cat3.webp"}
          href="/"
          className=""
        />
        <CollectionCard
          items={11}
          category={"Classic Table"}
          image={"/images/cat4.webp"}
          href="/"
          className="xl:h-3/4"
        />
        <CollectionCard
          items={11}
          category={"Home Office"}
          image={"/images/cat5.webp"}
          href="/"
          className=""
        />
      </div>
    </div>
  );
};

export default Categories;
