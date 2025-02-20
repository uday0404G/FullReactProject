import React from 'react';
import './Footer.css'; // Make sure your CSS file is properly linked
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container d-flex flex-column align-items-center ">
      {/* Newsletter Section */}
{/*       <div className="newsletter-section text-center mb-4">
        <h3>Get 10% off your first order</h3>
        <p>Sign up now for exclusive news and savings</p>
        
        <form className="newsletter-form d-flex justify-content-center flex-wrap">
          <input
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            maxLength="60"
            name="email"
            className="form-control me-2 mb-2 mb-md-0"
            required
          />
          <button type="submit" aria-label="Sign Up" className="btn btn-primary">
            Sign Up
          </button>
        </form>

        <p className="mt-3">
          10% off only applies to full price items. Zenni reserves the right to modify or cancel at any time.
        </p>

        <div className="links mt-2">
          <a href="/privacy-policy">Privacy Policy</a>
          <span> &amp; </span>
          <a href="/terms-of-use">Terms</a>
        </div>
      </div> */}

      {/* Social Icons Section */}
{/*       <div className="social-icons w-100 mt-4 d-flex flex-column flex-md-row justify-content-center align-items-center">
        <ul className="socialize d-flex justify-content-center list-unstyled mb-2 mb-md-0 me-md-3">
          <li className="z-logo me-3">
            <img width="32" height="27" src="//static.zennioptical.com/marketing/logo/zlogo/ZEN_Sym_teal.png" alt="Z Logo Teal" />
          </li>
          <li className="connect-heading">
            <p>Socialize with us</p>
          </li>
        </ul>
        <ul className="socialize list-unstyled d-flex justify-content-center mb-0">
          <li className="shareContent me-3">
            <a href="https://www.facebook.com/ZenniOptical/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li className="shareContent me-3">
            <a href="https://www.pinterest.com/zennioptical/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-pinterest"></i>
              <span className="sr-only">Pinterest</span>
            </a>
          </li>
          <li className="shareContent me-3">
            <a href="https://twitter.com/zennioptical/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li className="shareContent me-3">
            <a href="https://instagram.com/zennioptical/" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li className="shareContent">
            <a href="https://www.youtube.com/user/ZenniOptical" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube-play"></i>
              <span className="sr-only">YouTube</span>
            </a>
          </li>
        </ul>
      </div> */}

      {/* Get the App Section */}
      <div className="container-fluid py-4 my-4 d-flex flex-column flex-md-row align-items-center justify-content-center" style={{ background: "linear-gradient(90.92deg, rgba(255, 255, 255, .8) 0%, rgba(236, 233, 230, .8) 100%)" }}>
        <img src="https://static.zennioptical.com/dev/image/site/marketing/logo/zlogo/ZEN_Sym_teal.png" className='img-fluid mb-2 mb-md-0' style={{ width: "25px", height: "20px" }} alt="" />
        <h4 className='mx-2'>Get the app</h4>
        <img src="https://static.zennioptical.com/marketing/logo/download-on-the-app-store.svg" alt="" className='img-fluid me-2' />
        <img src="https://static.zennioptical.com/marketing/logo/get_it_on_google_play.png" alt="" className='img-fluid' style={{ height: "60px" }} />
      </div>

      {/* FAQ Section */}
      <div className="container-fluid py-4 d-flex flex-column flex-md-row border align-items-center justify-content-between">
        <div className="col-md-4 d-flex flex-column text-center text-md-start">
          <h6 style={{paddingLeft:"4rem"}}>Frequently Asked Questions</h6>
          <div className='d-flex justify-content-around'>
            <div className='me-md-4'>
              <p>Virtual Try-On</p>
              <p>Lenses</p>
              <p>Shipping</p>
            </div>
            <div>
              <p>Prescriptions</p>
              <p>Sunglasses</p>
              <p>More</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column text-center text-md-start mt-4 mt-md-0">
          <h6 style={{paddingLeft:"2rem"}}>Customer Service</h6>
          <div className='d-flex justify-content-around'>
            <div className='me-md-4'>
              <p><i className="fas fa-truck"></i> Track My Order</p>
              <p><i className="fas fa-exchange-alt"></i> Return Information</p>
              <p>All Glasses</p>
            </div>
            <div>
              <p><i className="fas fa-barcode"></i> Gift Card Balance</p>
              <p><i className="fas fa-phone fa-rotate-90"></i> Contact Us</p>
              <p>Shop All</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column text-center text-md-start mt-4 mt-md-0">
          <h6 style={{paddingLeft:"1rem"}}>Have a Question?</h6>
          <div className='d-flex justify-content-around'>
            <div className='me-md-4'>
              <p>Visit Our Help Center</p>
              <p><i className="fa fa-comments"></i> Chat Support 24/7</p>
              <p><i className="fa fa-envelope"></i> <span>Email</span></p>
            </div>
            <div>
              <span>(800) 211-2105 <br/> English 5AM – 9PM PT <br/> Español & Français 5AM–9PM PT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
