import {
    createBrowserRouter,
   
  } from "react-router-dom";
import GeneralLayout from "../Layout/GeneralLayout";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import OurPlan from "../Pages/OurPlan";
import Blog from "../Pages/Blog";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <GeneralLayout></GeneralLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>

        },
        {
          path: "/registration",
          element: <Registration></Registration>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/ourplan",
          element: <OurPlan></OurPlan>
        },
        {
          path: "/blogs",
          element: <Blog></Blog>
        }
      ]
    },
  ]);


