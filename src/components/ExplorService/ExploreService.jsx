import truck from "../../assets/svg/truck-fast-solid-full.svg";
import handshake from "../../assets/svg/hand-holding-dollar-solid-full.svg";
import pizza from "../../assets/svg/pizza-slice-solid-full.svg";

import "./ExploreService.css";

export default function ExploreMenu() {
  return (
    <section className="feature-section">
      <h2 className="section-title">Explore Service</h2>
      <div className="explore-service-body">
        <div className="explore-service-container">
          <div className="explore-service-content">
            <div className="explore-service-icon-container">
              <img src={truck} alt="icon" className="explore-service-icon" />
            </div>
            <div className="explore-service-details">
              <h3>Free Delivery</h3>
              <p>We devliver right to your doorstep</p>
            </div>
          </div>

          {/* explore-service-content */}

          <div className="explore-service-content">
            <div className="explore-service-icon-container">
              <img
                src={handshake}
                alt="icon"
                className="explore-service-icon"
              />
            </div>
            <div className="explore-service-details">
              <h3>Secure Payment</h3>
              <p>We ensure Secure Payment</p>
            </div>
          </div>

          {/* explore-service-content */}

          <div className="explore-service-content">
            <div className="explore-service-icon-container">
              <img src={pizza} alt="icon" className="explore-service-icon" />
            </div>
            <div className="explore-service-details">
              <h3>Hot Pizza</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
