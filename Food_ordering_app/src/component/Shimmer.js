const Shimmer = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-80 h-48 bg-gray-200 animate-pulse rounded-lg">
        <div className="w-full h-3 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-2/3 h-3 bg-gray-300 rounded-md mb-4"></div>
        <div className="w-full h-4 bg-gray-300 rounded-md mb-2"></div>
        <div className="w-full h-4 bg-gray-300 rounded-md"></div>
      </div>
    </div>
  );
};

export default Shimmer;
