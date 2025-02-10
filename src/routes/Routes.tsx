// import Country from "../pages/Country";
// import Appointment from "../pages/Appointment";
// import Home from "../pages/Home";
// import Login from "../pages/login";
// import SignUp from "../pages/signup";
// import { Navigate } from "react-router";
// import CountryDetail from "../pages/CountryDetail";

import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";

// const userMenu = [
//   {
//     path: "/myAppointment",
//     element: <Appointment />,
//   },
// ];

// const adminMenu = [
//   {
//     path: "/country",
//     element: <Country />,
//   },
//   {
//     path: "/countryDetail/:id",
//     element: <CountryDetail />,
//   },
// ];

const userRoutes = [
  {
    path: "/",
    element: <Dashboard />
  }
]

export const routeData = [
    {
      path: "/",
      element: <Home />,
      nestedRoutes: userRoutes,
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/signup",
      element: <Signup/>
    }
    // {
    //   path: "/Login",
    //   element: auth ? (
    //     isAdmin === "true" ? (
    //       <Navigate to="/country" />
    //     ) : (
    //       <Navigate to="/myAppointment" />
    //     )
    //   ) : (
    //     <Login />
    //   ),
    // },
    // {
    //   path: "/signup",
    //   element: auth ? (
    //     isAdmin === "true" ? (
    //       <Navigate to="/country" />
    //     ) : (
    //       <Navigate to="/myAppointment" />
    //     )
    //   ) : (
    //     <SignUp />
    //   ),
    // },
  ];
