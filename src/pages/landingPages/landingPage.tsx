import AwesomePartners from "./awesomeSection";
import BuzzSection from "./buzzSection";
import ContactUsSection from "./contactUsSection";
import HappyCustomer from "./happyCustomers";
import HeroSection from "./heroSection";
import JoinUsSection from "./joinUsSection";
import MeetUs from "./meetUs";
import OurCommunitySection from "./ourCommunitySection";



const LandingPage = () => {
  return (
    <div className="landing-main-wrapper">
      <HeroSection/>
      <HappyCustomer/>
      <MeetUs/>
      <BuzzSection/>
      <JoinUsSection/>
      <AwesomePartners/>
      <OurCommunitySection/>
      <ContactUsSection/>
    </div>
  );
};

export default LandingPage;
