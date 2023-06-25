import TutorialCard from "@/components/molecules/tutorialCard";

const Tutorials = () => {
  return (
    <div className="container flex flex-col items-center font-medium mt-20">
      <h4 className="uppercase underline underline-offset-8 mb-4 text-sm">
        EQUIPMENT LIBRARY
      </h4>
      <h2 className="font-bold mb-14">Latest Tutorials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 ">
        <TutorialCard
          title={
            "Dumbbell Workout Guide: Essential Exercises for Building Strength and Muscle"
          }
          image={"/images/cat1.webp"}
          date={"January 26, 2023"}
        />
        <TutorialCard
          title={
            "Kettlebell Training Tutorial: Mastering Form and Technique for Full-Body Workouts"
          }
          image={"/images/background.jpg"}
          date={"January 26, 2023"}
        />

        <TutorialCard
          title={
            "Barbell Basics: A Comprehensive Guide to Safely and Effectively Using a Barbell"
          }
          image={"/images/cat1.webp"}
          date={"January 26, 2023"}
        />

        <TutorialCard
          title={
            "TRX Suspension Training: Mastering Core Stability and Functional Strength"
          }
          image={"/images/cat1.webp"}
          date={"January 26, 2023"}
        />

        <TutorialCard
          title={
            "Resistance Band Exercises: Full-Body Workout Routine for Strength and Flexibility"
          }
          image={"/images/cat1.webp"}
          date={"January 26, 2023"}
        />
      </div>
    </div>
  );
};

export default Tutorials;
