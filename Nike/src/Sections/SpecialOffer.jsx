import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container ">
      <div className="flex-1">
        <img
          src={offer}
          alt="special offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red"> Special </span>Offer
        </h1>
        <p className="info-text mt-4 lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          aliquid accusantium necessitatibus in vitae sed fugiat deleniti
          placeat adipisci nihil omnis nostrum alias quam quis eveniet tempora
          perferendis error ab voluptates natus consequuntur, aperiam
          consectetur? Harum excepturi debitis dolor magnam!
        </p>
        <p className="mt-6 info-text lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          dolores quos consequuntur.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            borderColor="border-slate-grey"
            backgroundColor="bg-white"
            textColor="text-slate-gay"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
