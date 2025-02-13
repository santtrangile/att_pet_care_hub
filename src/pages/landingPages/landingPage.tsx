import HappyCustomer from "./happyCustomers";
import HeroSection from "./heroSection";
import MeetUs from "./meetUs";



const LandingPage = () => {
  return (
    <div className="landing-main-wrapper">
      <HeroSection/>
      <HappyCustomer/>
      <MeetUs/>
    </div>
  );
};

export default LandingPage;
