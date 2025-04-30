import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import About from "./src/component/About";
import Contact from "./src/component/Contact";
import Resturantmenu from "./src/component/Resturantmenu";
import UserContext from "./src/Utils/UserContext";
// Import the custom styles if you're using a separate CSS file.

const AppLayout = () => {
  const [showInfo, setShowInfo] = useState("");
  useEffect(() => {
    const data = {
      Name: "Rumit Varsani",
    };
    setShowInfo(data.Name);
  }, []);
  return (
    <UserContext.Provider value={{loggedInUser: showInfo,setShowInfo}}>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restuarant/:restaurantId",
        element: <Resturantmenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
