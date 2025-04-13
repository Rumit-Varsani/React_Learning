import { Link } from "react-router-dom";
import ResturentCard from "./ResturentCard";
import useRestroCard from "../Utils/useRestroCard";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useState } from "react";

const Body = () => {
  const { data, filteredResturant, setFilteredResturant } = useRestroCard();

  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline! Please check your internet connection</h1>
    );
  }
  console.log("Body Called!");

  return (
    <div className=" bg-gray-200">
      <div className="flex h-25 items-center justify-around w-[50%]">
        <div className="space-x-5 ">
          <input
            type="text"
            className="border-1 h-8 w-64 pl-3"
            placeholder="Search here...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" h-10 w-25 bg-amber-400 text-xl rounded-xl"
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
          className="h-10 w-52 bg-amber-400 text-xl rounded-xl"
          onClick={() => {
            const filteredList = data.filter((res) => res.info.avgRating > 4.3);
            setFilteredResturant(filteredList);
          }}
        >
          Sort the Restaurant
        </button>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 ">
          {filteredResturant.map((restaurant) => (
            <div key={restaurant.info.id} className="m-5">
              <Link
                to={"/restuarant/" + restaurant.info.id}
                className="block w-full h-full"
              >
                <ResturentCard resData={restaurant} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
