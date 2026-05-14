import heroImage from "../../assets/images/heroImage.png";
import another from "../../assets/images/bg.jpg";
import searchIcon from "../../assets/svg/magnifying-glass-solid-full (1).svg";

import "./Hero.css";
export default function Hero() {
  return (
    <section>
      <div className="hero-main-wrapper-container">
        {/* HERO LEFT SIDE CONTET */}
        <div className="hero-text-content-wrapper">
          <div className="hero-text-content">
            <h1>Delicious Food, Delivered Fast</h1>
            <p>Order your favourite meal from top resturant near you.</p>
          </div>
          <div className="hero-search-wrapper">
            <div className="hero-search-container">
              <input type="text" className="Search-input" name="" id="" />
              <img src={searchIcon} alt="icon" className="searchIcon" />
              <button className="search-button">Search</button>
            </div>
            {/* HERO ICON WRAPPER */}

            <div className="hero-icon-main-container">
              <div className="fast-delivery-wrapper-container"></div>
              <div className="best-quality-wrapper"></div>
              <div className="easy-payment-wrapper"></div>
            </div>
          </div>
        </div>
        {/* HERO RIGHT SIDE CONTENT */}
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img src={heroImage} alt="image" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
