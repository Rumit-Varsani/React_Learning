import { Link } from "react-router-dom";
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
    try {
      const response = await fetch(
        "https://mocki.io/v1/6861b5ad-c174-481b-aff8-17c053006c8a"
      );
      const jsondata = await response.json();

      console.log("Full API Response:", jsondata); // Debugging

      // Extract restaurant data correctly
      const restaurants = jsondata?.infoWithStyle?.restaurants || [];

      if (!Array.isArray(restaurants)) {
        console.error("Invalid restaurant data:", restaurants);
        return;
      }

      setData(restaurants);
      setFilteredResturant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
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
