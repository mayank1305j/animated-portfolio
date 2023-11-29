import React from "react";
import HeroSection from "./sections/HeroSection";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { HorizontalScrollSections } from "./components/AnimationComponents";

const App = () => {
  return (
    <div className="relative">
      {/* <Loader /> */}
      <Navbar />
      <HeroSection />
      <HorizontalScrollSections />
      <div className="h-[700vh] w-full bg-indigo-800"></div>
    </div>
  );
};

export default App;
