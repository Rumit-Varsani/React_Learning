import { useState } from "react";
import ItemList from "./ItemList";

const Restaurantcategory = ({ cdata, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 mb-4 border border-gray-100">
      {/* Header */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <h2 className="text-lg font-bold text-gray-800">
          {cdata?.title}{" "}
          <span className="text-gray-500 font-medium">
            ({cdata?.itemCards?.length})
          </span>
        </h2>
        <span
          className={`material-symbols-outlined transform transition-transform duration-300 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        >
          expand_more
        </span>
      </div>

      {/* Collapsible content with scrollable container */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showItems ? "max-h-[1000px] mt-4" : "max-h-0"
        }`}
      >
        <div className="scrollable-content max-h-80">
          {showItems && <ItemList items={cdata?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default Restaurantcategory;
