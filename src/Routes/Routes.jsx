import {
    createBrowserRouter,
   
  } from "react-router-dom";
import GeneralLayout from "../Layout/GeneralLayout";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import OurPlan from "../Pages/OurPlan";
import Blog from "../Pages/Blog";
import SingleBlog from "../Pages/SingleBlog";
import Profile from "../Pages/Profile";



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
        },
        {
          path: "/singleblog/:id",
          element: <SingleBlog></SingleBlog>
        },
        {
          path: "/userprofile",
          element: <Profile></Profile>
        }
      ]
    },
  ]);


