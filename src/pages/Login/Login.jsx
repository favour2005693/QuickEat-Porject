import { useNavigate } from 'react-router-dom'
import google from "../../assets/images/google.jpg";
import apple from "../../assets/images/apple.jpg";
import "./Login.css";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <form>
        <h2>Login into your account</h2>
        <div className="form-group">
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            className="input"
            name=""
            id=""
            placeholder="Enter your E-mail"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            className="input"
            name=""
            id=""
            placeholder="Enter your password"
          />
        </div>
        <div className="check-box-container">
          <div className="remember-me">
            <input type="checkbox" name="" id="" />
            <p>Remember Me</p>
          </div>
          <div className="forgotten-password">
            <a href="#">Forgot Passwword</a>
          </div>
        </div>
        <div className="login-button-container">
        <button className="login-button">Login</button>
        </div>
        <div className="divider">
          <span>Or login with </span>
        </div>
        <div className="authentication-container">
          <button className="authentication-button">
            <img src={google} alt="image" className="authentication-icon" />
            Google
          </button>
          <button className="authentication-button">
            <img src={apple} alt="image" className="authentication-icon" />
            Apple
          </button>
        </div>
        <p className="dont-have-account">Don't have an account?  <span onClick={()=> navigate("/sign-up")} className='Create-Account'>Create Account</span></p>
      </form>
    </div>
  );
}
