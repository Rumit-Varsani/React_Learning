import { CDN_URL } from "../Utils/contants.js";

const ResturentCard = (props) => {
    const { resData } = props;
    return (
      <div className="res-card">
        <img
          className="f-img"
          src={`${CDN_URL}${resData.info.cloudinaryImageId}`}
          alt="f-img"
        />
        <h3>{resData.info.name}</h3>
        <h5>
          {resData.info.avgRating} . {resData.info.sla.slaString}
        </h5>
        <h5>{resData.info.cuisines.join(", ")}</h5>
      </div>
    );
  };

  export default ResturentCard