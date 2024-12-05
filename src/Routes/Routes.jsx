import {
    createBrowserRouter,
   
  } from "react-router-dom";
import GeneralLayout from "../Layout/GeneralLayout";
import Home from "../Pages/Home";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";



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
        }
      ]
    },
  ]);


