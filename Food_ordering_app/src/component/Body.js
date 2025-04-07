import { Link } from "react-router-dom";
import ResturentCard from "./ResturentCard";
import useRestroCard from "../Utils/useRestroCard";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useState } from "react";

const Body = () => {
  const { data, filteredResturant, setFilteredResturant } = useRestroCard();

  const onlineStatus= useOnlineStatus();
  const [searchText, setSearchText] = useState("");
  if(onlineStatus===false)
  {
    return <h1>Looks like you are offline! Please check your internet connection</h1>
  }
  console.log("Body Called!");

  return (
    <div className="body">
      <div className="short-list">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredsearch = data.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              console.log("before", filteredsearch);
              setFilteredResturant(filteredsearch);

              console.log("after", filteredsearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="short-btn"
          onClick={() => {
            const filteredList = data.filter((res) => res.info.avgRating > 4.3);
            setFilteredResturant(filteredList);
          }}
        >
          Sort the Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restuarant/"+restaurant.info.id}
          >
            <ResturentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
