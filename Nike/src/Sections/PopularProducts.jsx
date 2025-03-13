import React from "react";
import { products } from "../assets/constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>

        <p className="text-slate-gray mt-2 lg:max-w-lg font-montserrat">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          accusantium officia rerum culpa explicabo consequuntur ex, saepe in
          neque voluptas enim temporibus maiores, repellat dolor magnam ad
          perferendis libero ut. Ea, vero?
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md: grid-cols-3 sm:grid-cols-2 grid-1 sm:gap-4 gap-16">
        {products.map((prod) => (
          <PopularProductCard key={prod.name} {...prod} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
