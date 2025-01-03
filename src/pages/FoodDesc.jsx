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
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div>
          <img src={detail.image} alt={detail.name} className="w-full" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl uppercase font-bold">{detail.name}</h1>
          <p className="font-bold text-3xl">${detail.price.toFixed(2)}</p>
          <div className="flex gap-5">
            <div className="flex gap-2 justify-center items-center">
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={() => updateQuantity("decrement")}
              >
                -
              </button>
              <span className="bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center">
                {quantity}
              </span>
              <button
                className="bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center"
                onClick={() => updateQuantity("increment")}
              >
                +
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <p>{detail.description}</p>
        </div>
      </div>
    );
  };

  return <div>{renderDetail()}</div>;
};

export default Detail;
