import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../Products";
import { useDispatch } from "react-redux";
import { addToCart } from "../stores/ShoppingCart";

const Detail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [detail, setDetail] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
    const product = products.find((product) => product.slug === slug);
    if (product) {
      setDetail(product);
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  const updateQuantity = (type) => {
    setQuantity((prev) =>
      type === "decrement" ? Math.max(1, prev - 1) : prev + 1
    );
  };

  const handleAddToCart = () => {
    if (detail) {
      dispatch(
        addToCart({
          productId: detail.id,
          quantity,
          price: detail.price,
        })
      );
    }
  };

  const renderDetail = () => {
    if (!detail) return null;
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 bg-green-50 p-10 shadow-md rounded-xl shadow-lg">
        {/* Image Section */}
        <div className="flex justify-center items-center bg-yellow-100 shadow-md p-5 rounded-xl">
          <img
            src={detail.image}
            alt={detail.name}
            className="w-full h-auto max-w-[300px] rounded-xl shadow-md"
          />
        </div>

        {/* Details Section */}
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-extrabold text-lime-600 uppercase">
            {detail.name}
          </h1>
          <p className="text-3xl font-semibold text-green-800">
            ${detail.price.toFixed(2)}
          </p>
          <div className="flex items-center gap-5">
            <div className="flex gap-2 items-center bg-green-50 p-2 rounded-lg">
              <button
                className="bg-lime-200 h-10 w-10 font-bold text-xl rounded-full flex justify-center items-center text-lime-800 hover:bg-lime-300"
                onClick={() => updateQuantity("decrement")}
              >
                -
              </button>
              <span className="bg-lime-100 h-10 w-10 font-bold text-xl rounded-full flex justify-center items-center text-lime-800">
                {quantity}
              </span>
              <button
                className="bg-lime-200 h-10 w-10 font-bold text-xl rounded-full flex justify-center items-center text-lime-800 hover:bg-lime-300"
                onClick={() => updateQuantity("increment")}
              >
                +
              </button>
            </div>
            <button
              className="bg-lime-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-lime-600"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p className="text-green-700 text-lg leading-relaxed">
            {detail.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-green-100 p-10">
      {renderDetail()}
    </div>
  );
};

export default Detail;
