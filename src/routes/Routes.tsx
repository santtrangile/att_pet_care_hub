// import Country from "../pages/Country";
// import Appointment from "../pages/Appointment";
// import Home from "../pages/Home";
// import Login from "../pages/login";
// import SignUp from "../pages/signup";
// import { Navigate } from "react-router";
// import CountryDetail from "../pages/CountryDetail";

import { Navigate } from "react-router-dom";
import Home from "../pages/home";

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

export const routeData = [
    {
      path: "/",
      element: <Home />,
      // nestedRoutes: isAdmin === "true" ? adminMenu : userMenu,
    },
    // {
    //   path: "/login",
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
