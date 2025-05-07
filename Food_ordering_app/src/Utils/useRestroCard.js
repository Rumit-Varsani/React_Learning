import { useEffect, useState } from "react";

const useRestroCard = () => {
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
  
      const jsondata = await response.json();
     
      const cards = jsondata?.data?.cards || [];
  
      let restaurants = [];
  
      for (const card of cards) {
        const restList =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restList) {
          restaurants = restList;
          break;
        }
      }
  
      setData(restaurants);
      setFilteredResturant(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  
  
  return {
    data,
    filteredResturant,
    setFilteredResturant,
  };
};

export default useRestroCard;
