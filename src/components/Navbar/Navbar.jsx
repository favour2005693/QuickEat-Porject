import { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useLoader } from "../../context/LoaderContext";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import cartIcon from "../../assets/images/cartIcon.png";
import search from "../../assets/svg/magnifying-glass-solid-full (1).svg";

export default function Navbar() {
  const navigate = useNavigate();

  const { showLoader, hideLoader } = useLoader();

  const handleNavigate = (path) => {
    showLoader();

    setTimeout(() => {
      navigate(path);
      hideLoader();
    }, 2000);
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TOP NAV */}
      <nav className="nav">
        <img
          src={logo}
          alt="logo"
          className="logo"
          onClick={() => navigate("/")}
        />

        {/* DESKTOP LINKS */}
        <div className="nav-links">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Menu
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>
          <NavLink
            onClick={() => handleNavigate("/service")}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to="/service"
          >
            Service
          </NavLink>

          
        </div>
        {/* RIGHT SIDE MENU */}
          <div className="right-side-menu">
            <NavLink to="/cart" className="cart-container">
              <img src={cartIcon} alt="cart" className="cart icon" />
              <span className="cart-count">0</span>
            </NavLink>
            <NavLink to="/search" className="nav-hh
            search-icon">
              <img src={search} alt="search" className="icon" />
            </NavLink>
            <NavLink to="/login" className="login-btn">
              Login
            </NavLink>
          </div>
        {/* MOBILE MENU BUTTON */}

        <div className="menu-btn" onClick={() => setIsOpen(true)}>
          ☰
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`overlay ${isOpen ? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE SIDEBAR */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <div className="close-btn" onClick={() => setIsOpen(false)}>
          ✖
        </div>

        <NavLink to="/" onClick={() => setIsOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/menu" onClick={() => setIsOpen(false)}>
          Menu
        </NavLink>
        <NavLink to="/cart" onClick={() => setIsOpen(false)}>
          Cart
        </NavLink>
        <NavLink to="/about" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink to="/service" onClick={() => setIsOpen(false)}>
          Service
        </NavLink>
        <NavLink to="/login" onClick={() => setIsOpen(false)}>
          Login
        </NavLink>
      </div>
    </>
  );
}
