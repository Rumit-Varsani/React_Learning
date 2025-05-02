import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-center py-10">
      <div className="w-3/12 bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-extrabold text-center text-amber-600 mb-6 border-b pb-4">
          🛒 Your Cart
        </h1>
        <button className="text-center bg-black ">Cler Items</button>
        {cartItems.length > 0 ? (
          <ItemList items={cartItems} />
        ) : (
          <p className="text-center text-gray-500 mt-10 text-lg">
            Your cart is empty.
          </p>
        )}
      </div>
    </div>
  );
};

export default Cart;
