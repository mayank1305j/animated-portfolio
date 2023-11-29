import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const tl = gsap.timeline();
  useEffect(() => {
    if (isOpen) {
      tl.to(".nav", {
        width: "100%",
        duration: 0.2,
        ease: "power3.inOut",
        skewX: "0deg, -20deg",
      })
        .to(".nav", {
          skewX: "0deg",
          duration: 0.1,
        })
        .fromTo(
          ".nav .links li",
          {
            x: -50,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.2,
            stagger: 0.05,
          }
        );
    } else {
      tl.fromTo(
        ".nav .links li",
        {
          x: 0,
          opacity: 1,
        },
        {
          x: -50,
          opacity: 0,
          duration: 0.5,
          stagger: 0.05,
        }
      ).to(".nav", {
        width: 0,
        duration: 0.2,
        ease: "power3.inOut",
        skewX: "0deg, 20deg",
        onComplete: () => {
          gsap.to(".nav", {
            skewX: "0deg",
            duration: 0.1,
          });
        },
      });
    }
  }, [isOpen]);
  return (
    <div>
      <button
        className={`fixed top-4 right-4 z-[51] ${
          isOpen ? "text-white" : "text-black"
        } duration-1000`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
      <div
        className={`nav h-screen w-0 bg-black fixed top-0 left-0 z-50 duration-500 overflow-hidden flex flex-col justify-center items-center text-2xl text-primary capitalize `}
      >
        <ul className="links space-y-4">
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
          <li>home</li>
        </ul>
        <ColorSelector setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default Navbar;

const ColorSelector = ({ setIsOpen }) => {
  const [themeColor, setThemeColor] = useState("#1a5da9");

  const handleClick = (color = "#1a5da9") => {
    setIsOpen(false);
    setThemeColor(color);
  };

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", themeColor);
  }, [themeColor]);

  return (
    <div
      className={`h-10 absolute top-2 left-2 flex justify-center items-center gap-2 p-2 border rounded-full`}
    >
      <span
        onClick={() => handleClick("#ff6700")}
        className="duration-200 hover:bg-red-600 block bg-red-400 rounded-full h-5 w-5"
      ></span>
      <span
        onClick={() => handleClick("#ff24a9")}
        className="duration-200 hover:bg-indigo-600 block bg-indigo-400 rounded-full h-5 w-5"
      ></span>
      <span
        onClick={() => handleClick("#ffe700")}
        className="duration-200 hover:bg-green-600 block bg-green-400 rounded-full h-5 w-5"
      ></span>
      <span
        onClick={() => handleClick("#1624a1")}
        className="duration-200 hover:bg-yellow-600 block bg-yellow-400 rounded-full h-5 w-5"
      ></span>
      <span
        onClick={() => handleClick("#a8026e")}
        className="duration-200 hover:bg-purple-600 block bg-purple-400 rounded-full h-5 w-5"
      ></span>
      <span
        onClick={() => handleClick("#fff")}
        className="duration-200 hover:bg-purple-600 block bg-white rounded-full h-5 w-5"
      ></span>
    </div>
  );
};

// import { useState, useEffect } from "react";
// import gsap from "gsap";

// const tl = gsap.timeline();

// const animateNav = (width, skewX) => {
//   tl.to(".nav", {
//     width,
//     duration: 0.2,
//     ease: "power3.inOut",
//     skewX,
//   })
//     .to(".nav", {
//       skewX: "0deg",
//       duration: 0.1,
//     })
//     .fromTo(
//       ".nav .links li",
//       {
//         y: -10,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.5,
//         stagger: 0.5,
//       }
//     );
// };

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   useEffect(() => {
//     if (isOpen) {
//       animateNav("100%", "0deg, -20deg");
//     } else {
//       animateNav(0, "0deg, 20deg");
//     }
//   }, [isOpen]);

//   return (
//     <div className={`${isOpen ? "text-white" : "text-black"}`}>
//       <button
//         className={`fixed top-0 right-0 z-[51]`}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         Menu
//       </button>
// <div
//   className={`nav h-screen w-0 bg-black fixed top-0 left-0 z-50 duration-500 overflow-hidden flex flex-col justify-center items-center text-2xl`}
// >
//   <ul className="links space-y-4">
//     <li>home</li>
//     <li>home</li>
//     <li>home</li>
//     <li>home</li>
//     <li>home</li>
//   </ul>
// </div>
//     </div>
//   );
// };

// export default Navbar;
