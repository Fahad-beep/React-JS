import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
const App = () => {
  const mouseHandler = (event) => {
    moveCursor(event.clientX, event.clientY);
  };
  const moveCursor = (cursorX, cursorY) => {
    // console.log(cursorX, cursorY);

    gsap.to(".mouseCircle", {
      x: cursorX,
      y: cursorY,
      duration: 0.4,
    });
  };
  const gsapBox = useRef();
  useGSAP(() => {
    gsap.from(".box", {
      x: 1000,
      duration: 1.6,
      delay: 0.7,
      ease: "back.out(5)",
    });
  });

  const animateMouseEnterHandler = (event) => {
    gsap.to(".animate", {
      backgroundColor: "green",
    });
  };
  const animateMouseLeaveHandler = (event) => {
    gsap.to(".animate", {
      backgroundColor: "white",
    });
  };
  const animateMouseClickHandler = (event) => {
    gsap.from(".animate", {
      scale: 0.4,
      duration: 2,
    });
  };

  return (
    <main onMouseMove={mouseHandler}>
      <div className="mouseCircle"></div>
      <button
        onMouseEnter={animateMouseEnterHandler}
        onMouseLeave={animateMouseLeaveHandler}
        onClick={animateMouseClickHandler}
        className="animate"
      >
        Animate
      </button>
      <div className="bgContainer">
        <div className="container">
          <div className="box" ref={gsapBox}></div>
          <div className="circle"></div>
        </div>
        <div className="container">
          <div className="box" ref={gsapBox}></div>
          <div className="circle"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
