import { useState, useEffect, useRef } from "react";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animator } from "chart.js";

const MidCarousel = () => {
  const [curr, setCurr] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const leftNumRef = useRef(null);
  const rightNumRef = useRef(null);

  const topCarousel = [
    "img/carousel_4.png",
    "img/carousel_4.png",
    "img/carousel_4.png",
  ];

  const carouselText = ["MANSION", "LUXURY VILLAS", "INTERIOR"];

  const next = () => {
    if (transitioning) return;
    setTransitioning(true);
    if (curr == carouselText.length - 2) {
      animateCount("back");
    } else if (curr == carouselText.length - 1) {
      animateCount("");
    }
    setTimeout(() => {
      curr == carouselText.length - 1 ? setCurr(0) : setCurr(curr + 1);
      setTransitioning(false);
    }, 100);
  };

  const prev = () => {
    if (transitioning) return;
    if (curr == 0) {
      setCurr(carouselText.length - 1);
    }
    setTransitioning(true);
    setTimeout(() => {
      curr == 0 ? setCurr(carouselText.length - 1) : setCurr(curr - 1);
      setTransitioning(false);
    }, 100);
  };

  const animateCount = (direction) => {
    const leftNum = leftNumRef.current;
    const rightNum = rightNumRef.current;
    const leftPos = leftNum.getBoundingClientRect();
    const rightPos = rightNum.getBoundingClientRect();

    // Calculate the distance between left and right numbers
    const distance = leftPos.left - rightPos.left;

    if (direction === "back") {
      const clone = rightNum.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.left = `${rightPos.left}px`;
      clone.style.top = `${rightPos.top}px`;
      document.body.appendChild(clone);
      gsap.fromTo(
        clone,
        { x: 0, opacity: 0.5 },
        {
          x: distance,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            leftNum.textContent = rightNum.textContent;
            clone.remove();
          },
        }
      );
    } else {
      const clone = leftNum.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.left = `${leftPos.left}px`;
      clone.style.top = `${leftPos.top}px`;
      document.body.appendChild(clone);
      gsap.fromTo(
        clone,
        { x: 0, opacity: 1 },
        {
          x: -distance,
          opacity: 0.5,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            clone.remove();
          },
        }
      );
    }
  };
  useEffect(() => {}, [curr]);

  return (
    <div className="w-full overflow-hidden relative">
      <div className="absolute inset-0 z-10 grid grid-rows-[1_1_1fr_1fr] ">
        <div className="relative flex items-end justify-center z-10 ">
          <span ref={leftNumRef} className={`text-white font-thin `}>
            {curr + 1}
          </span>
          <div className="pb-3 mx-4">
            <div className="min-w-16 min-h-[1px] bg-white" />
          </div>
          <span ref={rightNumRef} className="text-white opacity-50 ">
            {carouselText.length}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <span className=" w-[27%] font-semibold text-white text-center">
            Elevating living to an art form – indulge in the epitome of luxury
            with our bespoke villa designs.
          </span>
        </div>
        <div className="relative flex items-start justify-center whitespace-nowrap bg-yellow-6002">
          <div className="text-8xl font-extralight text-white  absolute left-0 transform -translate-x-1/2">
            {carouselText[curr == 0 ? carouselText.length - 1 : curr - 1]}
          </div>
          <div className="text-8xl font-extralight text-white  ">
            {carouselText[curr]}
          </div>
          <div className="text-8xl font-extralight text-white  transform  absolute right-0 translate-x-1/2">
            {carouselText[curr + 1 >= carouselText.length ? 0 : curr + 1]}
          </div>
        </div>
        <div className="flex gap-6 justify-center items-start z-10 pt-[20px]">
          <button
            onClick={prev}
            className="opacity-90"
            disabled={transitioning}
          >
            <SlArrowLeftCircle size={63} color="white" />
          </button>
          <button
            onClick={next}
            className="opacity-90"
            disabled={transitioning}
          >
            <SlArrowRightCircle size={63} color="white" />
          </button>
        </div>
      </div>
      {topCarousel.map((slide, index) => (
        <div
          key={index}
          className={`w-full h-full transition-opacity duration-500 -z-10 ${
            curr === index
              ? "opacity-100"
              : "opacity-0 pointer-events-none absolute top-0 left-0"
          }`}
        >
          <img
            src={slide}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
            onLoad={() => {
              if (index === 0) {
                const img = new Image();
                img.src = slide;
              }
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default MidCarousel;
