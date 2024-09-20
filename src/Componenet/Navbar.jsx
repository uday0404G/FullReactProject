import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const MyNavbar = () => {
  const Lo=localStorage.getItem("IsLogin")
  const Logout=()=>{
    localStorage.removeItem("IsLogin",false)
  }
  const handleLogout = () => {
    localStorage.removeItem("IsLogin"); 
    navigate("/Login"); 
  };
  return (
    <Navbar bg="light" expand="lg" className="border mt-4">
      <Container fluid>
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://static.zennioptical.com/dev/image/site/logo/zenni-logo.png"
            alt="Logo"
            className="img-fluid"
            style={{ height: "50px" }}
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Collapsible Navbar Menu */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/Eyeglasses">EYEGLASSES</Nav.Link>
            <Nav.Link as={Link} to="/Sunglass">SUNGLASSES</Nav.Link>
            <Nav.Link as={Link} to="/Lenses">LENSES</Nav.Link>
            <Nav.Link as={Link} to="/Collection">COLLECTIONS</Nav.Link>
            <Nav.Link as={Link} to="/Contacts">CONTACTS</Nav.Link>
            <Nav.Link as={Link} to="/Brand">BRANDS</Nav.Link>
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

        
          <div className="d-flex">
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">center_focus_strong</span>
              <p className="m-0">Visualsearch</p>
            </div>
          { Lo? 
              <Nav.Link as={Link} onClick={Logout}  to="/Login" className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">person</span>
              <p className="m-0">Logout</p>
             
            </Nav.Link>
           :     <Nav.Link as={Link} to="/Login" className="d-flex flex-column align-items-center me-3">
           <span className="material-symbols-outlined">person</span>
           <p className="m-0">LOGIN</p>
         </Nav.Link> 
          }
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">favorite</span>
              <p className="m-0">FAVORITE</p>
            </div>
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">help</span>
              <p className="m-0">HELP</p>
            </div>
            <Nav.Link  as={Link} to="/Cart" className="d-flex flex-column align-items-center">
              <span className="material-symbols-outlined">shopping_cart</span>
              <p className="m-0">CART</p>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
