import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <div className="content-body">
        <div className="middle-content">
          <Outlet />
        </div>
        <footer className="footer">
          <p>© 2024 VetApp. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
