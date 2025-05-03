import { useDispatch } from "react-redux";
import { CDN_URL } from "../Utils/contants";
import { addItems } from "../Utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="grid gap-6 mt-6">
      {items.map((item) => {
        const info = item.card.info;
        const price = (info.price ?? info.defaultPrice) / 100;
        const description = info.description?.replace(/[^\x20-\x7E]/g, "");

        return (
          <div
            key={info.id}
            className="flex items-center gap-6 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="w-28 h-28 rounded-xl overflow-hidden shrink-0 border border-gray-200">
              {info.imageId ? (
                <img
                  src={CDN_URL + info.imageId}
                  alt={info.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
                  No Image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800">
                {info.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-amber-600">
                  ₹{price}
                </span>
                <button
                  onClick={() => handleAddItems(item)}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full transition"
                >
                  <span className="material-symbols-outlined text-base">
                    add_shopping_cart
                  </span>
                  Add
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
