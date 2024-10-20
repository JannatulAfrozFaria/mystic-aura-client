import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Login from "../pages/login/login";
import SignUp from "../pages/signUp/SignUp";
// import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home> ,
        },
        {
            path: '/shop/:category',
            element: <Shop></Shop>,
            // element: <PrivateRoute>
            //            <Shop></Shop>
            //         </PrivateRoute> ,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
            path: '/signUp',
            element: <SignUp></SignUp>,
        },
      ]
    },
  ]);