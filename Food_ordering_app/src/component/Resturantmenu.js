import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemsMenus } from "../Utils/contants";

const Resturantmenu = () => {
  const [menuData, setmenuData] = useState([]);
  const {restaurantId} = useParams();
  console.log(restaurantId);
  useEffect(() => {
    FetchMenu();
   
  }, []);

  const FetchMenu = async () => {
    const data = await fetch(ItemsMenus+restaurantId);
    const jsonData = await data.json();
    console.log(jsonData);
    setmenuData(jsonData);
  };
  if (!menuData?.data) {
    return <h1>Loading...</h1>;
  }

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
  } = menuData?.data?.cards[2]?.card?.card?.info || [];

  const { slaString } = menuData?.data?.cards[2]?.card?.card?.info.sla || [];

  const { itemCards } =
    menuData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h2>
        {avgRatingString +
          "(" +
          totalRatingsString +
          ") - " +
          costForTwoMessage}
      </h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>Outlet {areaName}</h3>
      <h3>{slaString}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs"} {item.card.info.price / 100 || item.card.info.defaultPrice/100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Resturantmenu;
