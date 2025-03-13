import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col w-full max-container g-10"
    >
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality</span> Shoes
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
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="show8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
