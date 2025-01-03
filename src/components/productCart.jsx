import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/ShoppingCart";
import iconCart from "../assets/IconCart.png";

const ProductCart = ({ data }) => {
  const { id, name, price, image, slug } = data;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
        price,
      })
    );
  };

  return (
    <div className="product-cart bg-white p-5 rounded-xl shadow-sm flex flex-col">
      <Link to={slug}>
        <img
          src={image}
          alt={`${name} product image`}
          className="product-image w-full h-80 object-cover object-top"
        />
      </Link>
      <h3 className="product-name text-2xl py-3 text-center font-medium">
        {name}
      </h3>
      <div className="product-details mt-auto flex justify-between items-center border-t pt-3">
        <p className="product-price">
          $<span className="text-2xl font-medium">{price}</span>
        </p>
        <button
          className="add-to-cart-btn bg-gray-300 p-2 rounded-md text-sm hover:bg-gray-400 flex gap-2"
          onClick={handleAddToCart}
        >
          <img src={iconCart} alt="Add to cart" className="cart-icon w-5" />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
