import React, { useState, useEffect } from "react";
import { products } from "../Products";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/ShoppingCart";

const CartItem = ({ data: { productId, quantity } }) => {
  const [productDetails, setProductDetails] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const product = products.find((product) => product.id === productId);
    setProductDetails(product);
  }, [productId]);

  const updateQuantity = (change) => {
    dispatch(changeQuantity({ productId, quantity: quantity + change }));
  };

  if (!productDetails) return null;

  const totalPrice = (productDetails.price * quantity).toFixed(2); // Ensure two decimal places

  return (
    <div className="flex justify-between items-center bg-green-300 text-white p-2 border-b-2 border-green-700 gap-5 rounded-md">
      <img
        src={productDetails.image}
        alt={productDetails.name}
        className="w-12"
      />
      <h3>{productDetails.name}</h3>
      <p>${totalPrice}</p> {/* Display the formatted price */}
      <div className="w-20 flex justify-between font-bold gap-2">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={() => updateQuantity(-1)}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={() => updateQuantity(1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
