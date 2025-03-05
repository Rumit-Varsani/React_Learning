import React from "react";
import ReactDOM from "react-dom/client";

const parent = (
  <div>
    <div>
      <h1>I am an h1 tag</h1>
      <h1>I am an h1 tag</h1>
    </div>
    <div>
      <h1>I am an h1 tag</h1>
      <h1>I am an h1 tag</h1>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
