import { _signIn } from "../redux/actions/users.actions";
import { connect } from "react-redux";
import { RootState } from "../redux/store";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialButton from "../components/SocialMediaButtons";
import { toast } from "react-toastify";

interface ILoginInterface {
  _signIn: (email: string) => void;
}

interface loginDataInteface {
  userId: string;
  email: string;
  password: string;
}

const Login = ({ _signIn }: ILoginInterface) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState<loginDataInteface>({
    userId: "2",
    email: "",
    password: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const logIn = async () => {
    try {
      localStorage.setItem("isAdmin", "true");
      localStorage.setItem("token", loginData.userId);
      window.dispatchEvent(new Event("storage"));
      navigate('/')
    } catch (err: any) {
      toast.error(err?.response?.data?.message);
    } finally {
      _signIn(loginData.email || "");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="container">
        <div className="top-container">
          <span className="logo"></span>
          <InputField
            label="Email"
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            onChange={onChange}
          />
          <InputField
            label="Password"
            type="password"
            name="password"
            placeholder="********"
            onChange={onChange}
          />
          <Button label="Login" onClick={() => logIn()} />
          <div className="login-footer">
            <Link to="/forgot-password">Forgot Password?</Link>
            <Link to={"/signup"}>Create Account</Link>
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

export default connect(mapStateToProps, { _signIn })(Login);
