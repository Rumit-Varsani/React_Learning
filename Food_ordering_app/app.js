import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import { CDN_URL } from "./src/Utils/contants";



const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const Footer = () => {};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
