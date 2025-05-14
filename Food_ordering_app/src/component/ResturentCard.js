import { useContext } from "react";
import { CDN_URL } from "../Utils/contants.js";
import UserContext from "../Utils/UserContext.js";

const ResturentCard = ({ resData }) => {

  const {loggedInUser} = useContext(UserContext);
  return (
    <div data-testid="cards" className="bg-gradient-to-br from-white to-indigo-50 p-4 h-auto flex flex-col rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <img
        className="w-full h-48 object-cover rounded-xl mb-3"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
        alt="restaurant"
      />
      <h3 className="font-bold text-lg text-gray-800 mb-1">
        {resData.info.name}
      </h3>
      <h5 className="flex items-center text-gray-700 text-sm mb-1">
        {resData.info.avgRating}
        <span className="material-symbols-outlined text-yellow-400 ml-1 text-base">
          star_rate
        </span>
        <span className="mx-1 text-gray-400">•</span>
        {resData.info.sla.slaString}
      </h5>
      <h5 className="text-gray-600 text-sm">
        {resData.info.cuisines.join(", ")}
      </h5>
      <h5 className="text-gray-600 text-sm">
        {loggedInUser}
      </h5>
    </div>
  );
};

export const withPromotedLabel = (ResturentCard) => {
  return (props) => {
    return (
      <div className="relative">
        <span className="absolute top-2 left-2 z-10 bg-amber-400 text-xs font-semibold text-gray-800 px-3 py-1 rounded-full shadow-md">
          Promoted
        </span>
        <ResturentCard {...props} />
      </div>
    );
  };
};

export default ResturentCard;
