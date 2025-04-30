import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../Utils/useResturantMenu";
import Restaurantcategory from "./Restaurantcategory";
import { useState } from "react";

const Resturantmenu = () => {
  const { restaurantId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const { resinfo, loading } = useResturantMenu(restaurantId);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-indigo-50">
        <Shimmer />
      </div>
    );
  }

  if (!resinfo) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-600 text-lg">
        Error loading restaurant data
      </div>
    );
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resinfo?.data?.cards[2]?.card?.card?.info || {};

  const categories =
    resinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="bg-indigo-50 min-h-screen flex flex-col items-center justify-start py-10">
      {/* Restaurant Info Card */}
      <div className="w-[90%] md:w-[50%] bg-white rounded-2xl shadow-xl p-6 mb-10 text-center border border-indigo-100">
        <h1 className="text-3xl font-bold text-indigo-700 mb-3">{name}</h1>

        <div className="text-lg font-semibold text-gray-700 mb-2 flex items-center justify-center">
          <span className="material-symbols-outlined text-yellow-500 mr-1">
            star_rate
          </span>
          {avgRatingString} ({totalRatingsString}) - {costForTwoMessage}
        </div>

        <p className="text-gray-600 font-medium">{cuisines.join(", ")}</p>
        <p className="text-gray-600 font-medium mt-1">Outlet: {areaName}</p>
      </div>

      {/* Menu Section */}
      <div className="w-[90%] md:w-[50%]">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Menu
        </h2>

        <div className="space-y-4 cursor-pointer">
          {categories.map((category, index) => (
            <Restaurantcategory
              key={category?.card?.card?.title}
              cdata={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resturantmenu;
