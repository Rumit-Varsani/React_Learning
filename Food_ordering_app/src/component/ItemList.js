import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/contants";
import { addItems } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item)=>{
    dispatch(addItems(item));
    
  };
  
  return (
    <div className="space-y-6 mt-6">
      {items.map((item) => {
        const info = item.card.info;
        const price = (info.price ?? info.defaultPrice) / 100;
        const description = info.description?.replace(/[^\x20-\x7E]/g, "");

        return (
          <div
            key={info.id}
            className="flex justify-between items-start gap-6 p-4 border-b border-gray-200"
          >
            {/* Content Area */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{info.name}</h3>
              <p className="text-sm text-gray-600">₹{price}</p>
              <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>

            {/* Image and Button Area */}
            <div className="flex flex-col items-center justify-between shrink-0 rounded-lg overflow-hidden" style={{ width: "100px", height: "100px" }}>
              {info.imageId ? (
                <img
                  src={CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                  No Image
                </div>
              )}
              <button className="py-1 bg-amber-400   rounded-md hover:bg-amber-500 transition"
                onClick={()=>handleAddItems(item)}
              >
                <span className="material-symbols-outlined text-white">
                  add_shopping_cart
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;