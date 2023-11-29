import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import useOnScreen from "./useOnScreen";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

gsap.registerPlugin(ScrollTrigger);

export const TapeWidget = ({ content, rotate }) => {
  useEffect(() => {
    const animation = gsap.fromTo(
      ".scroll-container",
      { x: "0%" },
      { x: "-2000%", ease: "none", repeat: -1, duration: 35 }
    );

    // ScrollTrigger.create({
    //   trigger: ".scroll-container",
    //   start: "top 50%",
    //   end: "top -100%",
    //   animation: animation,
    //   scrub: 5,
    // });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div
      className={`overflow-hidden w-full bg-accent text-white ${rotate} mt-10 scale-105 origin-center border hover:bg-sky-400 hover:text-black duration-1000`}
    >
      <div className="w-full overflow-x-auto remove-scrollbar">
        <div className="text-lg w-full flex justify-center items-center gap-4 p-4 overflow-x-auto remove-scrollbar">
          {content &&
            content.map((text, index) => (
              <h2
                key={index}
                className="min-w-[100px] w-[100px] max-w-[100px] text-center uppercase scroll-container "
              >
                {text}
              </h2>
            ))}
        </div>
      </div>
    </div>
  );
};

export const HorizontalScrollSections = () => {
  const [animationProgress, setAanimationProgress] = useState(0);
  useEffect(() => {
    const animation2 = gsap.fromTo(
      "#boxContainer",
      { x: "0%" },
      { x: `-200vw`, ease: "power3" }
    );

    ScrollTrigger.create({
      trigger: "#nicecontainer",
      start: "top 0%",
      end: `+=3000px`,
      scrub: 1,
      pin: true,
      animation: animation2,
      onUpdate: (self) => {
        const progress = self.progress * 100;
        setAanimationProgress(Math.round(progress));
      },
      // snap: {
      //   snapTo: "labels", // Snap to labels (start and end points)
      //   duration: { min: 0.1, max: 0.5 }, // Snap duration
      //   delay: 0.2, // Delay before snapping starts
      //   ease: "power3.inOut", // Snap easing
      // },
    });

    return () => {
      animation2.kill();
    };
  }, []);
  return (
    <div id="nicecontainer" className="overflow-hidden h-screen relative">
      <div className="h-10 w-10 rounded-full bg-black text-white absolute top-4 left-4 z-10 flex justify-center items-center">
        {animationProgress}
      </div>
      <div id="boxContainer" className="h-full flex w-[300vw] relative">
        <HorizontalScrollSection num={1} />
        <HorizontalScrollSection num={2} />
        <HorizontalScrollSection num={3} />
      </div>
    </div>
  );
};

const HorizontalScrollSection = ({ num }) => {
  const sectionRef = useRef(null);
  const spanRef = useRef(null);

  const onScreen = useOnScreen(sectionRef);

  useEffect(() => {
    if (onScreen) {
      console.log(num + " is on screen");
    }
  }, [onScreen]);

  return (
    <div
      ref={sectionRef}
      className="box w-screen h-full border-4 bg-indigo-200 flex justify-center items-center"
    >
      <span
        ref={spanRef}
        className="text-8xl font-bold text-accent duration-1000"
      >
        {num}
      </span>
    </div>
  );
};

// export const TapeWidget = ({ content }) => {
//   useEffect(() => {
//     console.log(content);
//     const animation = gsap.to(".scroll-container h2", {
//       x: "-100%",
//       duration: 2,
//       repeat: -1,
//       ease: "linear",
//     });

//     return () => {
//       animation.kill();
//     };
//   }, []);
//   return (
//     <div className="overflow-hiddeen w-full bg-gray-950 text-white">
//       <div className="remove-scrollbar scroll-container text-6xl whitespace-nowrap w-full flex justify-center items-center overflow-auto p-4">
//         {content &&
//           content.map((text, index) => {
//             return (
//               <h2 key={index} className="min-w-[200px] text-center">
//                 {text}
//               </h2>
//             );
//           })}
//       </div>
//     </div>
//   );
// };
