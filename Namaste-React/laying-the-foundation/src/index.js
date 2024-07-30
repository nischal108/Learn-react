import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantProfile from "./components/RestaurantProfile";
import Cart from "./components/Cart";
import UserContext from "../utils/loggedUserContext";
import appStore from "../utils/appStore";
import {Provider} from 'react-redux';
const About = lazy(()=> import("./components/About"));



const Main = () => {
  const [user, setUser] = useState({
    username: "guest",
    isLoggedIn: false
  });

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={[user, setUser]}>
      <div className="main-div">
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
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
        element: <Suspense fallback={<h1>Loading....</h1>}>
               <About name={"Nischal"} address={"Ramdhuni-5"} />,
        </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantProfile />,
      },
      {
        path: "/cart",
        element: <Cart/>,

      },
    ],
    errorElement: <Error />,
  },
  
]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);
