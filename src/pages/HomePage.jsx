import React from "react";
import { products } from "../Products";
import ProductCart from "../components/productCart";

const Home = () => {
  return (
    <main className="home-page">
      <header className="page-header">
        <h1 className="text-3xl my-5 text-center">~Our Daily Specials~</h1>
      </header>
      <section className="product-grid grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5">
        {products.map((product) => (
          <ProductCart key={product.id} data={product} />
        ))}
      </section>
    </main>
  );
};

export default Home;
