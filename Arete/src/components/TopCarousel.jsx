import { useState, useEffect, useRef } from "react";
import { SlArrowLeftCircle, SlArrowRightCircle } from "react-icons/sl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TopCarousel = () => {
  const [curr, setCurr] = useState(1);
  const [transitioning, setTransitioning] = useState(false);
  const [imageHeight, setImageHeight] = useState("auto");
  const circleRefs = useRef([]);

  const topCarousel = [
    "img/carousel_1.png",
    "img/carousel_2.png",
    "img/carousel_3.png",
  ];

  const carouselText = [
    "EXPERIENCE THE EPITOME OF LUXURY",
    "DISCOVER UNMATCHED SOPHISTICATION",
    "EXPERIENCE THE EPITOME OF LUXURY",
  ];

  const changeImageDot = ({ index }) => {
    if (transitioning || curr === index) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurr(index);
      setTransitioning(false);
    }, 100);
  };

  const next = () => {
    if (transitioning || curr === topCarousel.length - 1) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurr(curr + 1);
      setTransitioning(false);
    }, 100);
  };

  const prev = () => {
    if (transitioning || curr === 0) return;
    setTransitioning(true);
    setTimeout(() => {
      setCurr(curr - 1);
      setTransitioning(false);
    }, 100);
  };

  useEffect(() => {
    setImageHeight("60vh");
  }, []);
  useEffect(() => {}, [curr]);
  useGSAP(() => {
    // Kill any existing animations
    circleRefs.current.forEach((ref) => {
      if (ref?.animation) ref.animation.kill();
    });

    // Animate only the current active pulse circle
    if (circleRefs.current[curr]) {
      circleRefs.current[curr].animation = gsap.to(
        circleRefs.current[curr].element,
        {
          r: 6.5,
          opacity: 0,
          strokeWidth: 0.1,
          duration: 0.69,
          ease: "expo.out",
          repeat: -1,
          repeatDelay: 0.8,
          onRepeat: () => {
            gsap.set(circleRefs.current[curr].element, {
              r: 3.5,
              opacity: 0.7,
              strokeWidth: 0.5,
            });
          },
        }
      );
    }

    // Hide other pulse circles
    circleRefs.current.forEach((ref, index) => {
      if (index !== curr && ref?.element) {
        gsap.set(ref.element, {
          opacity: 0,
          r: 3.5,
          strokeWidth: 0.5,
        });
      }
    });
  }, [curr]);

  return (
    <>
      <div className="flex absolute z-40 h-full w-full items-end justify-end overflow-hidden">
        <svg
          viewBox="0 0 213 600"
          preserveAspectRatio="none"
          className="absolute w-full h-full"
        >
          <path
            d="M 150 0 Q 170 300, 150 600"
            stroke="white"
            strokeWidth="0.15"
            fill="none"
          />
          {[0.2, 0.35, 0.5].map((t, index) => {
            const x =
              150 * (1 - t) * (1 - t) + 170 * 2 * (1 - t) * t + 150 * t * t;
            const y =
              0 * (1 - t) * (1 - t) + 300 * 2 * (1 - t) * t + 600 * t * t;

            return (
              <svg
                key={index}
                x={x - 3 - index * 0.98 - 5}
                y={y - 0}
                width="19"
                height="270"
                viewBox="0 0 30 85"
                preserveAspectRatio="none"
                cursor={`${curr == index ? "" : "pointer"}`}
                onClick={() => changeImageDot({ index: index })}
              >
                <circle
                  ref={(el) => {
                    if (el) circleRefs.current[index] = { element: el };
                  }}
                  cx="15"
                  cy="15"
                  r="3.5"
                  fill="white"
                  stroke="transparent"
                  strokeWidth="4"
                  className={`${curr === index ? "outer-circle" : "hidden"}`}
                />
                <circle
                  cx="15"
                  cy="15"
                  r="3.5"
                  fill="white"
                  stroke="transparent"
                  strokeWidth="4"
                />
                <circle
                  cx="15"
                  cy="15"
                  r="6.5"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.2"
                  className={`${curr == index ? "visible" : "hidden"}`}
                />
              </svg>
            );
          })}
        </svg>
      </div>
      <div
        className="w-full overflow-hidden relative "
        style={{ height: imageHeight }}
      >
        <div className="h-full w-full">
          {topCarousel.map((slide, index) => (
            <div
              key={index}
              className={`w-full h-full transition-opacity duration-500 ${
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
                    img.onload = () => {
                      const aspectRatio = img.height / img.width;
                      const calculatedHeight = `calc(100vw * ${aspectRatio})`;
                      setImageHeight(calculatedHeight);
                    };
                  }
                }}
              />

              {/* Text overlay - centered both horizontally and vertically */}
              <div className="absolute inset-0 flex items-center justify-start pl-[135px] z-10">
                <div className="text-8xl font-extralight text-white max-w-[50%]">
                  {carouselText[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[190px] left-[135px] flex gap-6 z-40">
          <button
            onClick={prev}
            className={`${curr === 0 ? "opacity-60" : "opacity-90"}`}
            disabled={curr === 0 || transitioning}
          >
            <SlArrowLeftCircle size={63} color="white" />
          </button>
          <button
            onClick={next}
            className={`${
              curr === topCarousel.length - 1 ? "opacity-60" : "opacity-90"
            }`}
            disabled={curr === topCarousel.length - 1 || transitioning}
          >
            <SlArrowRightCircle size={63} color="white" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TopCarousel;
