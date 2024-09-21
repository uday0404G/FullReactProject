import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';

const MyNavbar = () => {
  // Use useState to track the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Use useEffect to get login status from localStorage on component mount
  useEffect(() => {
    const loginState = localStorage.getItem("IsLogin");
    setIsLoggedIn(loginState === "true");
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <Navbar bg="white" expand="lg" className="border mt-4">
      <Container fluid>
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/" >
          <img
            src="https://static.zennioptical.com/dev/image/site/logo/zenni-logo.png"
            alt="Logo"
            className="img-fluid ps-2"
            style={{ height: "40px",width:"90%" }}
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Collapsible Navbar Menu */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="text-dark" to="/Eyeglasses">EYEGLASSES</Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/Sunglass">SUNGLASSES</Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/Lenses">LENSES</Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/Collection">COLLECTIONS</Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/Contacts">CONTACTS</Nav.Link>
           
          </Nav>

          {/* Search Box */}
          <Form className="d-flex align-items-center me-3">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              style={{ width: "200px" }}
            />
          </Form>

          {/* Right Side Icons */}
          <div className="d-flex">
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">center_focus_strong</span>
              <p className="m-0">Visualsearch</p>
            </div>

            {/* Conditional rendering based on login state */}
            {isLoggedIn ? (
              <Nav.Link as={Link} to="/UserDetails" className="d-flex flex-column align-items-center me-3">
                <span className="material-symbols-outlined">person</span>
                <p className="m-0">User</p>
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/Login" className="d-flex flex-column align-items-center me-3">
                <span className="material-symbols-outlined">person</span>
                <p className="m-0">Login</p>
              </Nav.Link>
            )}

            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">favorite</span>
              <p className="m-0">Favorite</p>
            </div>

            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">help</span>
              <p className="m-0">Help</p>
            </div>

            <Nav.Link as={Link} to="/Cart" className="d-flex flex-column align-items-center">
              <span className="material-symbols-outlined">shopping_cart</span>
              <p className="m-0">Cart</p>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
