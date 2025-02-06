import { Routes, Route } from "react-router-dom";
import { JSX } from "react";
import { connect } from "react-redux";
import { RootState } from "./redux/store";
import { routeData } from "./routes/Routes";

interface RouteInterface {
  path: string;
  element: JSX.Element;
  nestedRoutes?: {
    path: string;
    element: JSX.Element;
  }[];
}

const App = () => {

  return (
    <>
      <Routes>
        {routeData?.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}>
            {/* {route.nestedRoutes &&
              route.nestedRoutes.map((nestedRoute, nestedIndex) => (
                <Route
                  key={nestedIndex}
                  path={nestedRoute.path}
                  element={nestedRoute.element}
                />
              ))} */}
          </Route>
        ))}
      </Routes>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, {})(App);
