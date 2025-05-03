import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removeItems } from "../Utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearAllItems = ()=>{
    dispatch(clearCart());
  };
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12 bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-amber-600 mb-8">
          🛒 Your Cart
        </h1>

        <button
          className="w-full bg-red-500 text-white py-2 rounded-lg mb-6 hover:bg-red-600 transition duration-200"
          onClick={()=>clearAllItems()} // replace with actual functionality
        >
          Clear All Items
        </button>

        <div className="space-y-4">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              <ItemList items={cartItems} />
              {/* Add total section */}
              <div className="text-right mt-4">
                <p className="text-xl font-semibold text-gray-800">
                  Total: ₹
                  {cartItems.reduce((total, item) => total + (item.card.info.price ?? item.card.info.defaultPrice) / 100, 0)}
                </p>
              </div>

              <button
                className="w-full bg-amber-500 text-white py-2 rounded-lg mt-6 hover:bg-amber-600 transition duration-200"
                onClick={() => alert("Proceed to Checkout!")}
              >
                Proceed to Checkout
              </button>
            </div>
          ) : (
            <p className="text-center text-gray-500 mt-10 text-lg">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
