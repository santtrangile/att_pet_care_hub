import { _signIn } from "../redux/actions/users.actions";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";
import SocialButton from "../components/SocialMediaButtons";

interface ISignupInterface {
  _signIn: (email: string) => void;
}

interface signUpDataInteface {
  email?: string;
  password?: string;
}

const SignUp = ({ _signIn }: ISignupInterface) => {
  const [signupData, setSignupData] = useState<signUpDataInteface>({ email: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="login-wrapper signup">
      <div className="container">
        <div className="top-container">
          <span className="logo"></span>
          <InputField
            width="47%"
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={onChange}
          />
          <InputField
            width="47%"
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={onChange}
          />
          <InputField
            width="100%"
            label="Email"
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            onChange={onChange}
          />
          <InputField
            width="100%"
            label="Password"
            type="password"
            name="password"
            placeholder="********"
            onChange={onChange}
          />
          <InputField
            width="100%"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="********"
            onChange={onChange}
          />
          <Button
            label="Sign Up"
            onClick={() => _signIn(signupData.email || "")}
          />
          <div className="login-footer">
            <Link to={"/login"}>Already have an account?</Link>
          </div>
        </div>

        <div className="separator-container">
          <div className="line"></div>
          <span className="separator">or</span>
          <div className="line"></div>
        </div>
        <div className="bottom-container">
          <SocialButton type="google" />
          <SocialButton type="facebook" />
          <SocialButton type="apple" />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({});

export default connect(mapStateToProps, { _signIn })(SignUp);
