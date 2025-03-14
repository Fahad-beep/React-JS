import React from "react";
import { services } from "../assets/constants";
import ServiceCard from "../components/ServiceCard";
const Services = () => {
  return (
    <section className="max-container flex justify-center gap-9 flex-wrap">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  );
};

export default Services;
