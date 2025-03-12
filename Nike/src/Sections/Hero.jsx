import React from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { statistics } from "../assets/constants";

const Hero = () => {
  return (
    <section
      className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container min-h-screen"
      id="home"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-center w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
          The New Arrival
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p>
          Discover stylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start w-full h-20 flex-wrap gap-16 mt-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
