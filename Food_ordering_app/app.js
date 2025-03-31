import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Resturantmenu from "./src/component/Resturantmenu";

// App Layout component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

// Router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
    {
      path:"/",
      element:<Body />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path:"/restuarant/:restaurantId",
      element:<Resturantmenu/>
    },
  ],
  },
  
]);

// Create root and render the RouterProvider
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
