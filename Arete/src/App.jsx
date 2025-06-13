import React from "react";
import TopCarousel from "./components/TopCarousel";
import Header from "./components/Header";
import MidText from "./components/MidText";
import MidCarousel from "./components/MidCarousel";

const App = () => {
  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
      <div className="min-h-screen w-screen">
        <Header />
        <TopCarousel />
        <MidText />
        <MidCarousel />
      </div>
    </div>
  );
};

export default App;
