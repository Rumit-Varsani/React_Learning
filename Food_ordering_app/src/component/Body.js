import ResturentCard from "./ResturentCard";
import {useEffect, useState} from "react";

const Body = () => {
    const[filteredResturant,setfiltredResturant] = useState([]);

    useEffect(()=>{
      console.log("useEffect called!");
      fetchData();
    },[]);

    const fetchData = async () => {
      try {
          const response = await fetch(
              "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.0759837&lng=72.8776559&carousel=true&third_party_vendor=1"
          );
          const jsondata = await response.json();
          
          console.log("Full API Response:", jsondata); // Log the entire response
  
          // Extract restaurant data
          const restaurants = jsondata?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  
          console.log("Extracted Restaurants:", restaurants);
  
          setfiltredResturant(restaurants);
  
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };
  


    console.log("Body Called!");
    return( 
      <div className="body">
        <div className="short-list">
            <button className="short-btn" onClick={() => { 
                const filteredlist =resList.filter(res=>res.info.avgRating>4.3); 
                setfiltredResturant(filteredlist);
                // Add your sorting function logic here
                console.log("Sorting the Restaurant");
            }}>
                Sort the Restaurant
            </button>
        </div>
        <div className="res-container">
          {filteredResturant.map((resList)=>(
            <ResturentCard key={resList.info.id} resData={resList} />
          ))}
        </div>
        
      </div>
      
    );
  };
  export default Body