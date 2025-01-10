import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconCart from "../assets/IconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/ShoppingCart";
import HouseIcon from "../assets/House.png";

const Header = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);
  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab());
  };
  return (
    <header className="relative flex items-center mb-5">
      <Link to="/" className="text-xl text-lime-500 font-semibold flex items-center">
        <img src={HouseIcon} alt="Home" className="w-6 h-6 mr-2" />
        Home
      </Link>
      <h1 className="text-3xl flex-1 text-center text-lime-500 pr-12 font-bold">
        We sell Uninflated Groceries!
      </h1>
      <div
        className="w-10 h-10 bg-yellow-100 rounded-full
      flex justify-center items-center relative"
        onClick={handleOpenTabCart}
      >
        <img src={IconCart} alt="" className="w-6" />
        <span
          className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm
      w-5 h-5 rounded-full flex justify-center items-center"
        >
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
