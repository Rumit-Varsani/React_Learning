import ResturentCard from "./ResturentCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [data, setData] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    console.log("useEffect called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://mocki.io/v1/ca91595a-a813-4237-85cb-ca29d32c7ddb"
    );
    const jsondata = await response.json();

    console.log("Full API Response:", jsondata); // Log the entire response

    // Extract restaurant data
    const restaurants =
      jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("Extracted Restaurants:", restaurants);
    setData(restaurants);
    setFilteredResturant(restaurants);
  };

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
              setsearchText(e.target.value);
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
            const filteredList = filteredResturant.filter(
              (res) => res.info.avgRating > 4.3
            );
            setFilteredResturant(filteredList);
            console.log("Sorting the Restaurant");
          }}
        >
          Sort the Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => (
          <ResturentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
