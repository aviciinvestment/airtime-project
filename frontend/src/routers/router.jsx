import {createBrowserRouter} from "react-router-dom";

import App from "../App";
import Home from "../pages/home/home";
  

  const routers = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/dashboard",
            element: <div>Dashboard</div>
        },
        {
            path: "/settings",
            element: <div>profile setting or account setting</div>
        },
        {
            path: "/transactions",
            element: <div>All Transaction Records</div>
         },
         {
            path: "/contact",
            element: <div>Contacts</div>
         },
        {
            path: "/about",
            element: <div>About</div>
        }        
      ]
    },
  ]);

  export default routers;