import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const Main = () => {
  return (
    <div className="main-div">
      <Header />
      <Outlet/>
    </div>
  );
};

//router configurations

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
  
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);
