import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../Utils/useResturantMenu";
import Restaurantcategory from "./Restaurantcategory";
import { useState } from "react";

const Resturantmenu = () => {
  const { restaurantId } = useParams();
  const [showIndex,setShowIndex] = useState(null);
  const { resinfo, loading } = useResturantMenu(restaurantId);

  // Log loading state

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Shimmer />
      </div>
    );
  }

  if (!resinfo) {
    return <div>Error loading restaurant data</div>;
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = resinfo?.data?.cards[2]?.card?.card?.info || [];

  // const { slaString } = resinfo?.data?.cards[2]?.card?.card?.info.sla || [];

  const { itemCards } =
    resinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  const categories =
    resinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("category", categories);
  return (
    <div className="bg-indigo-50 min-h-screen w-full flex flex-col items-center justify-start py-10">
      {/* Restaurant Info Card */}
      <div className="w-[90%] md:w-[50%] bg-white rounded-2xl shadow-2xl p-6 mb-10 text-center border border-indigo-100">
        <h1 className="font-bold text-3xl mb-3 text-indigo-700">{name}</h1>
        <h2 className="font-bold flex items-center justify-center text-lg mb-2 text-gray-700">
          <span className="material-symbols-outlined align-middle text-yellow-500 mr-1">
            star_rate
          </span>
          {avgRatingString +
            " (" +
            totalRatingsString +
            ") - " +
            costForTwoMessage}
        </h2>
        <h3 className="font-medium text-gray-600">{cuisines.join(", ")}</h3>
        <h3 className="font-medium text-gray-600 mt-1">Outlet: {areaName}</h3>
      </div>

      {/* Menu Section */}
      <div className="w-[90%] md:w-[50%]">
        <h2 className="font-extrabold text-3xl mb-6 text-center text-indigo-600">
          Menu
        </h2>

        {/* NEW: Wrap all categories inside one div with space-y-4 */}
        <div className="space-y-4 cursor-pointer">
          {categories.map((category,index) => (
            <Restaurantcategory
              key={category?.card?.card?.title}
              cdata={category?.card?.card}
              showItems={index===showIndex ? true : false}
              setShowIndex={()=>setShowIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resturantmenu;
