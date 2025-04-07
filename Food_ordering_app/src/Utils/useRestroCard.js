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
        "https://mocki.io/v1/6861b5ad-c174-481b-aff8-17c053006c8a"
      );
      const jsondata = await response.json();

      console.log("Full API Response:", jsondata); // Debugging

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

  return {
    data,
    filteredResturant,
    setFilteredResturant,
  };
};

export default useRestroCard;
