import BuzzSection from "./buzzSection";
import HappyCustomer from "./happyCustomers";
import HeroSection from "./heroSection";
import JoinUsSection from "./joinUsSection";
import MeetUs from "./meetUs";



const LandingPage = () => {
  return (
    <div className="landing-main-wrapper">
      <HeroSection/>
      <HappyCustomer/>
      <MeetUs/>
      <BuzzSection/>
      <JoinUsSection/>
    </div>
  );
};

export default LandingPage;
