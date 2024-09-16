import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  return (
    <>  
      <navbar className="row  container-fluid mt-4 d-flex justify-content-between border" style={{ height: "80px" }}>
        <div className="col-1 border d-flex justify-content-between align-items-center h-100">
        <Link to="/" className="nav-link">
          <img
            src="https://static.zennioptical.com/dev/image/site/logo/zenni-logo.png"
            alt="Logo"
            className="img-fluid p-2"
            style={{ height: "50px", width: "100%" }}
          />
          </Link>
        </div>
        <div className="col-6 d-flex justify-content-around text-center h-100">
          <nav className="navbar navbar-expand-lg col-12">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-between align-items-center w-100 h-100">
              <li className="nav-item"><Link to="/Eyeglasses" className="nav-link">EYEGLASSES</Link></li>
              <li className="nav-item"><Link to="/Sunglass" className="nav-link">SUNGLASSES</Link></li>
              <li className="nav-item"><Link to="/Lenses" className="nav-link">LENSES</Link></li>
              <li className="nav-item"><Link to="/Collection" className="nav-link">COLLECTIONS</Link></li>
              <li className="nav-item"><Link to="/Contacts" className="nav-link">CONTACTS</Link></li>
              <li className="nav-item"><Link to="/Brand" className="nav-link">BRANDS</Link></li>
            </ul>
          </nav>
        </div>
        <div className="d-flex align-items-center col-2  h-100">
          <input type="text" className="h-50 w-100 rounded-pill p-3" placeholder="Search " />
        </div>
        <div className="col-3 d-flex h-100">
          <div className="col-3 d-flex flex-column justify-content-around align-items-center  h-100">
          <span class="material-symbols-outlined">center_focus_strong</span>
            <p style={{ marginBottom: "0" }}>Visualsearch</p>
          </div>  
          <div className="col-2 d-flex flex-column justify-content-around align-items-center border h-100">
            <span className="material-symbols-outlined">person</span>
            <p style={{ marginBottom: "0" }}>LOGIN</p>
          </div>
          <div className="col-3 d-flex flex-column justify-content-around align-items-center border h-100">
            <span className="material-symbols-outlined">favorite</span>
            <p style={{ marginBottom: "0" }}>FAVORITE</p>
          </div>
          <div className="col-2 d-flex flex-column justify-content-around align-items-center border h-100">
            <span className="material-symbols-outlined">help</span>
            <p style={{ marginBottom: "0" }}>HELP</p>
          </div>
          <div className="col-2 d-flex flex-column justify-content-around align-items-center border h-100">
            <span className="material-symbols-outlined">shopping_cart</span>
            <p style={{ marginBottom: "0" }}>CART</p>
          </div>
        </div> 
      </navbar>
    </>
  );
};

export default Navbar;
