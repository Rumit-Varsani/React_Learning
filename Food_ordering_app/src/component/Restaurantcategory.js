import { useState } from "react";
import ItemList from "./ItemList";
const Restaurantcategory = ({ cdata,showItems,setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowIndex();
  }; 
  return (
    <div className="bg-white shadow-lg p-4 flex flex-col rounded-xl ">
      <div className="flex justify-between items-center cursor-pointer ">
        <span className="font-semibold " onClick={handleClick}>
          {cdata?.title} ({cdata?.itemCards?.length})
        </span>
        <span>↓</span>
      </div>
      {/* Render ItemList */}
      {showItems && <ItemList items={cdata?.itemCards} />}
    </div>
  );
};

export default Restaurantcategory;
