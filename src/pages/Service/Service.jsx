import servicetextData from "../../data/serviceData";
import Footer from "../../components/Footer/Footer";
import "./Service.css";

export default function Service() {
  return (
    <div>
      <div className="service-container">
        <div className="service-text-container">
          <h1>Services</h1>
        </div>
      </div>
      <h2 className="section-title">Service Overview</h2>

      <div className="service-card-container">
        {servicetextData.map((services, id) => (
          <div key={id} className="service-card">
            <div className="service-image">
              <img src={services.image} alt="image" className="service-icon" />
            </div>
            <h2>{services.heading}</h2>
            <p>{services.text}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
