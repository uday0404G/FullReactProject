import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border mt-4">
      <div className="container-fluid">
        {/* Logo Section */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img
            src="https://static.zennioptical.com/dev/image/site/logo/zenni-logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ height: "50px" }}
          />
        </Link>

        {/* Toggle Button for Mobile View */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Eyeglasses" className="nav-link">EYEGLASSES</Link>
            </li>
            <li className="nav-item">
              <Link to="/Sunglass" className="nav-link">SUNGLASSES</Link>
            </li>
            <li className="nav-item">
              <Link to="/Lenses" className="nav-link">LENSES</Link>
            </li>
            <li className="nav-item">
              <Link to="/Collection" className="nav-link">COLLECTIONS</Link>
            </li>
            <li className="nav-item">
              <Link to="/Contacts" className="nav-link">CONTACTS</Link>
            </li>
            <li className="nav-item">
              <Link to="/Brand" className="nav-link">BRANDS</Link>
            </li>
          </ul>

          {/* Search Box */}
          <div className="d-flex align-items-center me-3">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Search"
              style={{ width: "200px" }}
            />
          </div>

          {/* Icons Section */}
          <div className="d-flex">
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">center_focus_strong</span>
              <p className="m-0">Visualsearch</p>
            </div>
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">person</span>
              <p className="m-0">LOGIN</p>
            </div>
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">favorite</span>
              <p className="m-0">FAVORITE</p>
            </div>
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">help</span>
              <p className="m-0">HELP</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <span className="material-symbols-outlined">shopping_cart</span>
              <p className="m-0">CART</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
