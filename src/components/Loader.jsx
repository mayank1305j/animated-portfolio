import React, { useEffect } from "react";
import gsap from "gsap";

const setupLoaderAnimation = () => {
  const loaderTl = gsap.timeline();
  loaderTl
    .to("html, body", {
      overflow: "hidden",
    })
    .to(".loader-text li span", {
      translateY: 0,
      stagger: 0.3,
      ease: "elastic.out(1,0.3)",
      duration: 2,
    })
    .to(".loader-text li span", {
      opacity: 0,
      stagger: 0.3,
    })
    .to(".loader", {
      height: 0,
    })
    .to("html, body", {
      overflow: "auto",
    });
};

const Loader = () => {
  useEffect(() => {
    setupLoaderAnimation();
  }, []);

  return (
    <div className="loader fixed top-0 left-0 h-screen w-full bg-black text-white z-[100] flex flex-col justify-center items-center overflow-hidden">
      <ul className="loader-text flex justify-center items-center gap-2 text-xl capitalize">
        <li className="overflow-hidden">
          <span className="translate-y-full inline-block py-2">developer,</span>
        </li>
        <li className="overflow-hidden">
          <span className="translate-y-full inline-block py-2">designer,</span>
        </li>
        <li className="overflow-hidden">
          <span className="translate-y-full inline-block py-2">visioner.</span>
        </li>
      </ul>
    </div>
  );
};

export default Loader;
