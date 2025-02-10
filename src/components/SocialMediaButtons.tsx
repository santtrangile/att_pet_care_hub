import React from "react";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from 'react-icons/fc';

interface SocialIconProps {
  type: "google" | "facebook" | "apple";
  onClick?: () => void;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, onClick }) => {
    return (
        <button className={`social-icon ${type}`} onClick={onClick}>
            {type === "google" && <FcGoogle className="icon" />}
            {type === "facebook" && <FaFacebookF className="icon" />}
            {type === "apple" && <FaApple className="icon" />}
        </button>
    );
};

export default SocialIcon;
