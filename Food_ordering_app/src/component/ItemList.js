import { CDN_URL } from "../Utils/contants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-4 m-2 text-left flex justify-between border-b pb-4"
        >
          <div className="w-/12">
            <div className="">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="text-gray-600 text-sm">
                ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
              </span>
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description?.replace(/[^\x20-\x7E]/g, "")}
            </p>
          </div>

          <div className="w-3/12 ">
            {item.card.info.imageId ? (
              <img
                src={CDN_URL + item.card.info.imageId}
                alt={item.card.info.name}
                className=" "
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded"></div> // fallback empty box if no image
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
