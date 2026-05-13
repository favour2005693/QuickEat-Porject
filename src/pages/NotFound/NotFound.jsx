import { useNavigate } from "react-router-dom";
import errorImage from "../../assets/images/error-image.png";

import "./NotFound.css";
export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="error-container">
      <div className="error-body">
        <img src={errorImage} alt="img" className="error-image" />

        <div className="error-details">
          <h1>404</h1>
          <p>Oops! Page Not Found</p>

          <button className="error-button" onClick={() => navigate("/")}>
            Go to home
          </button>
        </div>
      </div>
    </div>
  );
}
