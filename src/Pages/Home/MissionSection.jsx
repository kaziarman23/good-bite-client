import endHunger from "../../assets/Home/Mission/endHunger.png";
import fmailyMeal from "../../assets/Home/Mission/fmailyMeal.png";
import hotMeal from "../../assets/Home/Mission/hotMeal.png";

const MissionSection = () => {
  const missionDetails = [
    {
      id: 1,
      icon: endHunger,
      name: "End Hunger",
      description:
        "Collect surplus food from restaurants, events, and households to feed those in need and reduce food wastage.",
    },
    {
      id: 2,
      icon: hotMeal,
      name: "Hot Meals Tonight",
      description:
        "Collaborate with local kitchens and caterers to deliver warm meals directly to shelters and food-insecure families.",
    },
    {
      id: 3,
      icon: fmailyMeal,
      name: "Don't Waste Food",
      description:
        "Reduce food waste by redirecting excess food to people who need it, working towards a sustainable community.",
    },
  ];

  return (
    <div className="w-full h-full bg-black text-white overflow-hidden">
      <div className="w-4/5 h-full my-10 mx-auto">
        <h1 className="text-2xl text-center font-bold my-10">
          We are in a mission to help the poor people
        </h1>
        <div className="flex flex-col justify-center items-center gap-5 lg:flex-row">
          {missionDetails.map((mission) => (
            <div key={mission.id} className="w-full h-72 border-2 sm:h-48 lg:h-64">
              <div className="flex justify-center items-center gap-3 p-5">
                <img
                  src={mission.icon}
                  alt={mission.name}
                  className="w-12 h-12 object-cover"
                />
                <h1>{mission.name}</h1>
              </div>
              <p className="p-5 h-40 sm:h-24 lg:h-40">{mission.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MissionSection;
