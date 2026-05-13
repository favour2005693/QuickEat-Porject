import { useNavigate } from 'react-router-dom'
import "./Sign-up.css";
import google from "../../assets/images/google.jpg";
import apple from "../../assets/images/apple.jpg";

export default function Sign_up() {
    const navigate = useNavigate();
  return (

    <div className="sign-up-container">
      <form action="">
        <h2>Create an account</h2>
        <div className="form-group">
          <label htmlFor="fname">First Name*</label>
          <input type="text" name="" id="" className="form-input" placeholder='First Name' />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input type="email" name="" id="" className="form-input" placeholder='Email' />
        </div>

        <div className="form-group">
          <label htmlFor="Password">Password*</label>
          <input type="password" name="" id="" className="form-input" placeholder='Password' />
        </div>
        
        <div className="sign-up-button-container">
          <button className="sign-up-button">Sign Up</button>
        </div>
        <div className="divider">
          <span>Or SignUp with </span>
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

          <p className="dont-have-account">Already have an account?  <span onClick={()=> navigate("/login")} className='Create-Account'>Login</span></p>
      </form>
    </div>
  );
}
