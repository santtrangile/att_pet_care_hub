import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-main-wrapper">
      <div className="hero-section-wrapper">
        <div className="image-wrapper">
          <div className="content-wrapper">
            <h1>Pet Care</h1>
            <p>Your one-stop solution for all things pet-related, with a twist!</p>
            <Button label="Join Us" onClick={() => navigate("/login")} />
          </div>
        </div>
        <div className="video-wrapper">
          <video
            width="100%"
            height="auto"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen noplaybackrate"
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src="/heroSectionVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
