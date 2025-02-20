import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  const pathName = useLocation().pathname;

  return (
    <div className="main-container">
      <Header />
      <div className="content-body">
        <div className={`${pathName === "/" ? "landing-content" : ""} middle-content`}>
          <Outlet />
        </div>
        <footer className="footer">
          <p>© 2025 VetApp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
