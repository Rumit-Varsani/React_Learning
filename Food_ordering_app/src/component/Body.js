import ResturentCard from "./ResturentCard";
import { useEffect, useState } from "react";

const Body = () => {
    
  const [filteredResturant, setFilteredResturant] = useState([]);
    const[data,setData] = useState([]);
  const [searchText, setsearchText] = useState("");
  useEffect(() => {
    console.log("useEffect called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=21.1702401&lng=72.83106070000001&carousel=true&third_party_vendor=1"
      );
      const jsondata = await response.json();
      
      console.log("Full API Response:", jsondata); // Log the entire response

      // Extract restaurant data
      const restaurants =
        jsondata?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      console.log("Extracted Restaurants:", restaurants);
      setData(restaurants)
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
                
              const filteredsearch = data.filter(
                (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()) 
              );

              console.log("before",filteredsearch);
              setFilteredResturant(filteredsearch);
             
              console.log("after",filteredsearch);
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
