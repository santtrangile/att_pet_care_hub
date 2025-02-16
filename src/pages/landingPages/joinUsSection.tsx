import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const JoinUsSection = () => {
    const navigate = useNavigate();
    return (
        <div className="join-wrapper">
            <div className="join-section">
                <h1>Join the Pet Revolution Today!</h1>
                <p>
                    Unleash the power of technology for your furry friends. Our app connects you with vets, pet supplies, and a vibrant community of pet lovers. Don't let your pet miss out on the best care!
                </p>
                <Button label='Get Started Now!' onClick={()=> navigate("/login")}/>
            </div>
        </div>
    )
}

export default JoinUsSection;