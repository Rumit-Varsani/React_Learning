import ResturentCard from "./ResturentCard";
import { useEffect, useState } from "react";

const Body = () => {
    const [filteredResturant, setFilteredResturant] = useState([]);

    useEffect(() => {
        console.log("useEffect called!");
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://mocki.io/v1/a75bfba8-033c-4a47-bc84-8787857dece0"
            );
            const jsondata = await response.json();

            console.log("Full API Response:", jsondata); // Log the entire response

            // Extract restaurant data
            const restaurants =
                jsondata?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

            console.log("Extracted Restaurants:", restaurants);

            setFilteredResturant(restaurants);

        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    console.log("Body Called!");

    return (
        <div className="body">
            <div className="short-list">
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
