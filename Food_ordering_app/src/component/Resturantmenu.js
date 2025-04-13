import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useResturantMenu from "../Utils/useResturantMenu";

const Resturantmenu = () => {
  const { restaurantId } = useParams();
  console.log("Restaurant ID from params:", restaurantId); // Log the restaurant ID

  const { resinfo, loading } = useResturantMenu(restaurantId);

  console.log("Menu Data:", resinfo); // Log menu data
  console.log("Loading state:", loading); // Log loading state

  if (loading) {
    console.log("Loading... Rendering Shimmer");
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Shimmer />
      </div>
    );
  }

  if (!resinfo) {
    console.log("No menu data received yet.");
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

  const { slaString } = resinfo?.data?.cards[2]?.card?.card?.info.sla || [];

  const { itemCards } =
    resinfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  return (
    <div className="bg-gray-200 w-[100vw] h-[100vh] flex  justify-center flex-col">
      <div className="flex w-[50%] h-[30%] m-20 bg-white items-center justify-center flex-col rounded-2xl shadow-2xl">
        <h1 className="font-bold mb-5 text-3xl">{name}</h1>
        <h2 className="font-bold">
          <span className="material-symbols-outlined align-middle">
            star_rate
          </span>{" "}
          {avgRatingString +
            " (" +
            totalRatingsString +
            ") - " +
            costForTwoMessage}
        </h2>
        <h3 className="pr-45 font-bold">{cuisines.join(", ")}</h3>
        <h3 className="pr-33 font-bold">Outlet {areaName}</h3>
        {/* <h3>{slaString}</h3> */}
      </div>
      <div className="">
        <h2>Menu</h2>
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs"}{" "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resturantmenu;
