import searchIcon from "../../assets/svg/magnifying-glass-solid-full (1).svg";
import "./Search.css";
export default function Search() {
  return (
    <div>
      <div className="search-main-container">
        <div className="search-header-container">
          <h2>Search Product</h2>
        </div>

      <div className="search-body-container">
        <div className="search-input-container">
          <img src={searchIcon} alt="icon" className="search-icon" />
          <input type="text" name="" id="" className="search-input" />
          <button className="search-btn">Search</button>
        </div>
        </div>
      </div>
    </div>
  );
}
