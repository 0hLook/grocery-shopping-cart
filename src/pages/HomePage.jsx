import React from "react";
import { products } from "../Products";
import ProductCart from "../components/productCart";

const Home = () => {
  // Split products into categories
  const fruitsAndVegetables = products.filter(
    (product) => product.category === "fruitsAndVegetables"
  );
  const meats = products.filter((product) => product.category === "meats");

  return (
    <main className="pt-10 home-page">
      <header className="page-header">
      </header>

      <section className="my-10">
        <h2 className="text-2xl text-green-600 font-bold my-5 text-center">
          Fruits and Vegetables
        </h2>
        <div className="product-grid grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {fruitsAndVegetables.map((product) => (
            <ProductCart key={product.id} data={product} />
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl text-green-600 font-bold my-5 text-center">
          Meats
        </h2>
        <div className="product-grid grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
          {meats.map((product) => (
            <ProductCart key={product.id} data={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
