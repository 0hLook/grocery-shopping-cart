import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./cartItems";
import { toggleStatusTab } from "../stores/ShoppingCart";

const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  const handleCloseTabCart = () => {
    dispatch(toggleStatusTab());
  };

  const handleClearCart = () => {
    dispatch({ type: "cart/clear" }); // Dispatching a clear action directly.
  };

  const totalCost = carts.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 bg-green-200 shadow-2xl w-96 h-full grid grid-rows-[auto_1fr_auto] 
    transform transition-transform duration-500
    ${statusTab === false ? "translate-x-full" : ""}
    `}
    >
      <h2 className="p-5 text-lime-500 font-bold text-2xl">Shopping Cart</h2>
      {/* Scrollable area for cart items */}
      <div className="p-5 overflow-y-auto scrollbar-hide">
        {carts.length > 0 ? (
          carts.map((item, key) => <CartItem key={key} data={item} />)
        ) : (
          <p className="text-center text-lime-500 font-bold">
            Your cart is empty!
          </p>
        )}
      </div>
      {/* Total and actions */}
      <div className="bg-green-100 shadow-md p-5 grid grid-cols-2 items-center">
        <h4 className="text-lime-500 font-bold text-lg">
          Total: ${totalCost.toFixed(2)}
        </h4>
        <button
          className="text-white bg-red-600 hover:bg-red-500 rounded-full px-4 py-2 text-center"
          onClick={handleClearCart}
        >
          Clear All
        </button>
      </div>
      <div className="grid grid-cols-2">
        <button
          className="bg-yellow-600 text-white text-lg font-bold py-3 px-6 hover:bg-yellow-500"
          onClick={handleCloseTabCart}
        >
          CLOSE
        </button>
        <button className="bg-green-600 text-white text-lg font-bold py-3 px-6 hover:bg-green-500">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartTab;
