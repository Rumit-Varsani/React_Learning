import { useState, useEffect } from "react";
import { ItemsMenus } from "./contants";

const useResturantMenu = (resId) => {
  const [resinfo, setResinfo] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        console.log("Fetching menu for", resId);  // Log fetch attempt
        setLoading(true); // Set loading to true when fetching
        const response = await fetch(ItemsMenus + resId);
        console.log("Response received", response); // Log the response
        const json = await response.json();
        console.log("JSON response", json); // Log the JSON response
        setResinfo(json); // Set real data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        console.error("Menu fetch failed", err); // Log any errors
        setLoading(false); // Stop loading on error
      }
    };

    if (resId) {
      fetchMenu();
    }
  }, [resId]); // Only run when restaurantId changes

  return { resinfo, loading }; // Return both data and loading state
};

export default useResturantMenu;
