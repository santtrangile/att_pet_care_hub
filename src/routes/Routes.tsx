import LandingPage from "../pages/landingPages/landingPage";
import Home from "../pages/home";
import Login from "../pages/login";
import Signup from "../pages/signup";
import ClinicServices from "../pages/clinicServices";
import BookSlot from "../pages/bookSlot";
import ProductDetail from "../pages/productDetail";

const userRoutes = [
  {
    path: "/",
    element: <LandingPage />
  }, {
    path : "/clinicServices/:clinicId",
    element: <ClinicServices/>
  }, {
    path: "/book-slot/:clinicId/:serviceId",
    element: <BookSlot/>
  }, {
    path: "product/:productId",
    element: <ProductDetail/>
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
  ];