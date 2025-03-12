import resList from "../Utils/mockdata";
import ResturentCard from "./ResturentCard";
const Body = () => {
    return (
      <div className="body">
        <div className="Search">Search</div>
        <div className="res-container">
          {resList.map((resList)=>(
            <ResturentCard key={resList.info.id} resData={resList} />
          ))}
          
        </div>
      </div>
    );
  };
  export default Body