import resList from "../Utils/mockdata";
import ResturentCard from "./ResturentCard";
import {useState} from "react";
const Body = () => {
    const[filteredResturant,setfiltredResturant] = useState(resList);
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