import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconCart from "../assets/IconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../stores/ShoppingCart";
import HouseIcon from "../assets/HouseIcon.png";

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
    <header className="fixed top-0 left-0 w-full bg-green-500 shadow-md z-50 flex items-center p-4">
      <Link to="/" className="text-xl text-lime-50 font-semibold flex items-center">
        <img src={HouseIcon} alt="Home" className="w-6 h-6 mr-2" />
        Home
      </Link>
      <h1 className="text-3xl flex-1 text-center text-lime-50 font-bold">
        We sell Uninflated Groceries!
      </h1>
      <div
        className="w-10 h-10 bg-white rounded-full flex justify-center items-center relative cursor-pointer"
        onClick={handleOpenTabCart}
      >
        <img src={IconCart} alt="Cart Icon" className="w-6" />
        <span
          className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm w-5 h-5 rounded-full flex justify-center items-center"
        >
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
