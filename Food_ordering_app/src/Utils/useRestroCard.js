import { useEffect, useState } from "react";

const useRestroCard = () => {
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect called!");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/f12dab67-eea5-4a41-ba7b-c6d1a76c0e16"
      );
  
      const jsondata = await response.json();
      console.log("Full JSON Response:", jsondata);
  
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
