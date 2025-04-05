// components/Shimmer.js
const Shimmer = () => {
    return (
      <div className="shimmer">
        <div className="shimmer-header"></div>
        <div className="shimmer-subheader"></div>
        <div className="shimmer-menu">
          {Array(5)
            .fill("")
            .map((_, index) => (
              <div className="shimmer-item" key={index}></div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  