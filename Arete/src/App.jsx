import React from "react";
import TopCarousel from "./components/TopCarousel";
import Header from "./components/Header";
import MidText from "./components/MidText";

const App = () => {
  return (
    <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
      <div className="min-h-screen w-screen">
        <Header />
        <TopCarousel />
        <MidText />
      </div>
    </div>
  );
};

export default App;
