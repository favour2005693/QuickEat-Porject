import phoneIcon from "../../assets/svg/phone-solid-full.svg";
import emailIcon from "../../assets/svg/envelope-solid-full.svg";
import locationIcon from "../../assets/svg/location-dot-solid-full.svg";

import facebook from "../../assets/images/facebook.jpg";
import instgram from "../../assets/images/instgram.jpg";
import twitter from "../../assets/images/twitter.jpg";
import tiktok from "../../assets/images/tiktok.jpg";
import logo from "../../assets/images/logo.png";
import footerLogo from "../../assets/images/footerLogo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      {/* Footer Header */}
      <div className="footer-header">
        <h2 className="section-title">QuickEat</h2>
      </div>

      {/* Footer Body */}
      <div className="footer-body">
        {/* Footer Logo */}
        <div className="footer-logo">
          <img src={footerLogo} alt="logo" className="footer-logo" />
        </div>
        {/* Contact Section */}
        <div className="contact-container">
          <div className="contact-header">
            <h2>Our Contact</h2>
          </div>

          <div className="contact-body">
            <div className="contact-details">
              <div className="contact-icon">
                <img src={emailIcon} alt="icon" className="icon" />
              </div>
              <div className="contact-list">favouremma215@gmail.com</div>
            </div>

            {/* Phone Number */}
            <div className="contact-details">
              <div className="contact-icon">
                <img src={phoneIcon} alt="icon" className="icon" />
              </div>
              <div className="contact-list">
                <p>+234 (0) 9068733618</p>
                <p>+234 (0) 7074181699</p>
              </div>
            </div>

            {/* Address */}

            <div className="contact-details">
              <div className="contact-icon">
                <img src={locationIcon} alt="icon" className="icon" />
              </div>
              <div className="contact-list">
                <p>No.13 Goka Street</p>
              </div>
            </div>
          </div>
        </div>

        {/* service  */}
        <div className="footer-service-container">
          <div className="footer-service-header">
            <h2>Our Service</h2>
          </div>

          <div className="footer-service-body">
            <div className="footer-service-list">
              <ul className="footer-service-links">
                <li className="footer-servicce-link">Fast Delivery</li>
                <li className="footer-servicce-link">Awesome Team</li>
                <li className="footer-servicce-link">Table Service</li>
                <li className="footer-servicce-link">Order Token</li>
                <li className="footer-servicce-link">Fresh Healthy Food</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media LInks */}

        <div className="socailMedia-container">
          <div className="socialMedia-header">
            <h2>Social Media</h2>
          </div>

          <div className="socialMedai-body">
            <div className="socialMedia-icons">
              <a href="#">
                <img
                  src={facebook}
                  alt="socialMedia-icon"
                  className="socialMedia-icon"
                />
              </a>
              <a href="#">
                <img
                  src={instgram}
                  alt="socialMedia-icon"
                  className="socialMedia-icon"
                />
              </a>
              <a href="#">
                <img
                  src={twitter}
                  alt="socialMedia-icon"
                  className="socialMedia-icon"
                />
              </a>
              <a href="#">
                <img
                  src={tiktok}
                  alt="socialMedia-icon"
                  className="socialMedia-icon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>
          &copy; <span id="currentYear"></span>QuickEat. All rights reserved.
          Built <i className="fas fa-heart"></i> by FavLabs
        </p>
      </div>
    </footer>
  );
}


export default Footer