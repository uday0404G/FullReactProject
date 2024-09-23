import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form, FormControl, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AddtocartDetails, UserDetail } from "../Redux/Loginreducer/action";
import Preloader from "./Preloader";

const MyNavbar = () => {
  const selector = useSelector((state) => state); // Get the state
  const dispatch = useDispatch();
  const Uid = localStorage.getItem("Uid");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fetch user details if logged in
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(UserDetail(Uid));
    }
  }, [dispatch, isLoggedIn]);

  // Fetch cart details if the Uid is available
  useEffect(() => {
    if (Uid) {
      dispatch(AddtocartDetails(Uid));
    }
  }, [dispatch, Uid]);

  useEffect(() => {
    const loginState = localStorage.getItem("IsLogin");
    setIsLoggedIn(loginState === "true");
  }, []);

  const udata = selector.UData;
  const cartCount = selector.Cart?.length || 0; // Handle cart length safely

  // Show preloader while user data is loading
  if (!udata) {
    return <Preloader />;
  }

  return (
    <Navbar bg="white" expand="lg" className="border mt-4">
      <Container fluid>
        {/* Logo Section */}
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://static.zennioptical.com/dev/image/site/logo/zenni-logo.png"
            alt="Logo"
            className="img-fluid ps-2"
            style={{ height: "40px", width: "90%" }}
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Collapsible Navbar Menu */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link as={Link} className="text-dark" to="/Eyeglasses">
              EYEGLASSES
            </Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/Sunglass">
              SUNGLASSES
            </Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/Lenses">
              LENSES
            </Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/Collection">
              COLLECTIONS
            </Nav.Link>
            <Nav.Link as={Link} className="text-dark" to="/Contacts">
              CONTACTS
            </Nav.Link>
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
          <div className="d-flex align-items-center">
            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">center_focus_strong</span>
              <p className="m-0">Visualsearch</p>
            </div>

            {/* Conditional rendering based on login state */}
            {isLoggedIn ? (
              <Nav.Link
                as={Link}
                to="/UserDetails"
                className="d-flex flex-column align-items-center me-3"
              >
                {udata?.PhotoURL ? (
                  <img
                    src={udata.PhotoURL}
                    alt="User"
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <span className="material-symbols-outlined" style={{ fontSize: "40px" }}>
                    person
                  </span>
                )}
                <p className="m-0">User</p>
              </Nav.Link>
            ) : (
              <Nav.Link
                as={Link}
                to="/Login"
                className="d-flex flex-column align-items-center me-3"
              >
                <span className="material-symbols-outlined">person</span>
                <p className="m-0">Login</p>
              </Nav.Link>
            )}

            <div className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">favorite</span>
              <p className="m-0">Favorite</p>
            </div>

            <Nav.Link as={Link} to="/Help" className="d-flex flex-column align-items-center me-3">
              <span className="material-symbols-outlined">help</span>
              <p className="m-0">Help</p>
            </Nav.Link>

            {/* Cart Icon with Count */}
            <Nav.Link as={Link} to="/Cart" className="d-flex flex-column align-items-center position-relative">
              <span className="material-symbols-outlined">shopping_cart</span>
              <p className="m-0">Cart</p>
              {cartCount > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
