import { CDN_URL } from "../Utils/contants.js";

const ResturentCard = (props) => {
  const { resData } = props;
  return (
    <div className="bg-white p-5 h-95 flex flex-col rounded-2xl">
      <img
        className="w-auto h-50 object-cover rounded-2xl"
        src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
        alt="f-img"
      />
      <h3 className="p-1 font-bold">{resData.info.name}</h3>
      <h5 className="p-1">
        {resData.info.avgRating}
        <span className="material-symbols-outlined align-middle">
          star_rate
        </span>{" "}
        . {resData.info.sla.slaString}
      </h5>
      <h5 className="p-1">{resData.info.cuisines.join(", ")}</h5>
    </div>
  );
};

export default ResturentCard;
