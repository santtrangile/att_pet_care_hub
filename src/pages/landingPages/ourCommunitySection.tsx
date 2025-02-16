import SocialIcon from "../../components/SocialMediaButtons";

const OurCommunitySection = () => {
    return (
        <div className="our-community-section">
            <h1>Join Our Community!</h1>
            <div className="bottom-container">
                <SocialIcon type="google" />
                <SocialIcon type="facebook" />
                <SocialIcon type="apple" />
            </div>
        </div>
    )
}

export default OurCommunitySection;