import { Link } from "react-router-dom";
import ResturentCard, { withPromotedLabel } from "./ResturentCard";
import useRestroCard from "../Utils/useRestroCard";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useState, useContext } from "react";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const { data, filteredResturant, setFilteredResturant } = useRestroCard();
  const ResturentCardPromoted = withPromotedLabel(ResturentCard);
  const onlineStatus = useOnlineStatus();
  const [searchText, setSearchText] = useState("");
  if (onlineStatus === false) {
    return (
      <h1 className="text-red-600 text-2xl font-semibold text-center p-4">
        Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }

  const { loggedInUser, setShowInfo } = useContext(UserContext);
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white px-6 py-10">
      {/* Search & Sort Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-6 rounded-2xl shadow-md max-w-5xl mx-auto mb-8">
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <input
            type="text"
            data-testid="searchbox"
            className="border border-gray-300 h-10 w-64 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="h-10 px-5 bg-amber-400 text-white font-semibold rounded-md hover:bg-amber-500 transition"
            onClick={() => {
              const filteredsearch = data.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(filteredsearch);
            }}
          >
            Search
          </button>
        </div>
        <input
          type="text"
          
          className="border border-gray-300 h-10 w-64 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Search Username..."
          value={loggedInUser}
          onChange={(e) => setShowInfo(e.target.value)}
        />
        <button
          className="mt-4 sm:mt-0 h-10 px-5 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          onClick={() => {
            const filteredList = data.filter((res) => res.info.avgRating > 4.3);
            setFilteredResturant(filteredList);
          }}
        >
          Sort by Rating
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {filteredResturant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restuarant/" + restaurant.info.id}
            className="block"
          >
            {restaurant.info.promoted ? (
              <ResturentCardPromoted resData={restaurant} />
            ) : (
              <ResturentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
