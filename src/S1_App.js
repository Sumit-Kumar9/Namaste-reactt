import Header from "./components/Header";
import Body from "./components/Body";
// import RastaurantCard from "./components/RastaurantCard";
import React from "react";
import ReactDOM from "react-dom/client";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

// 1:23.00
