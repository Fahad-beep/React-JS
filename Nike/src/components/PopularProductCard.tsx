import React from "react";
import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="w-full max-sm:w-full flex flex-1 flex-col">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <div className="flex mt-8 justify-start gap-2.5 items-start">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl text-slate-gray font-montserrat leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="font-palanquin leading-normal mt-2 text-2xl font-semibold">
        {name}
      </h3>
      <p className="font-montserrat leading-normal mt-2 text-2xl font-semibold text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
