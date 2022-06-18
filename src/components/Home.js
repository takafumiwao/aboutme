import React from "react";
import Header from "./Header";
import HomeBody from "./HomeBody";

const Home = () => {
  return (
    <div className="bg-yellow-300 h-screen">
      {/* Header */}
      <Header />
      {/* Body */}
      <HomeBody />
    </div>
  );
};

export default Home;
