"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideos, setloadedVideos] = useState(0);

  const totalVideos = 3;
  const nextVidRef = useRef(null);
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });

        gsap.to("#next-video", {
          transformOrigin: "center center",
          duration: 1,
          scale: 1,
          width: "100%",
          height: "100%",
          ease: "power1.inOut",
          onStart: () => {
            const video = document.getElementById(
              "next-video"
            ) as HTMLVideoElement;
            if (video) {
              video.play();
            }
          },
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          duration: 1.5,
          scale: 0,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",

      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: 0.5,
      },
    });
  });

  const handleMiniVdClick = () => {
    sethasClicked(true);
    setcurrentIndex(upcomingVideoIndex);
  };

  const getVideo = (index: number) => {
    return `videos/hero-${index}.mp4`;
  };

  const handleVideoLoad = () => {
    setloadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setisLoading(false);
    }
  }, [loadedVideos]);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="transition-all ease-in scale-50 hover:scale-100 opacity-0 hover:opacity-100 duration-200"
            >
              <video
                src={getVideo(upcomingVideoIndex)}
                loop
                ref={nextVidRef}
                muted
                id="current-video"
                className="scale-150 size-64 origin-center object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            src={getVideo(upcomingVideoIndex)}
            ref={nextVidRef}
            className="invisible object-center object-cover z-20 absolute-center size-64"
            id="next-video"
          />
          <video
            src={getVideo(upcomingVideoIndex)}
            autoPlay
            loop
            muted
            className="absolute object-cover object-center size-full top-0 left-0"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-50">
          G<b>a</b>ming
        </h1>
        <div className="absolute z-40 top-0 left-5">
          <div className="mt-24 sm:px-10 ">
            <h1 className="special-font hero-heading text-blue-50">
              Redefi<b>n</b>e
            </h1>
            <p className="text-blue-50 max-w-64 mb-5 font-robert-regular">
              Enter The MetaGame Layer <br />
              Unleash The Play Economy
            </p>
            <Button
              className="flex-center gap-1 !bg-yellow-300"
              icon={TiLocationArrow}
              title="Watch Trailer"
              id="watch-trailer"
            />
          </div>
        </div>
      </div>
      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-5 text-black">
        G<b>a</b>ming
      </h1>
    </div>
  );
};

export default Hero;
