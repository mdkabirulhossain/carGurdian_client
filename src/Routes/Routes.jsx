import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import About from "../Pages/Home/About/About";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "../Providers/PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:"/",
            element:<Home></Home>  
        },
        {
            path:"/about",
            element:<About></About>
        },
        
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Registration></Registration>
        },
        {
          path:'/checkout/:id',
          element:<PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
        }
        
      ]
    },
  ]);

  export default router;