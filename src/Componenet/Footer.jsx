import React from 'react';
import './Footer.css'; // Make sure your CSS file is properly linked

const Footer = () => {
  return (
    <div className="footer-container d-flex flex-column align-items-center py-5">

      <div className="newsletter-section text-center mb-4">
        <h3>Get 10% off your first order</h3>
        <p>Sign up now for exclusive news and savings</p>
        
        <form className="newsletter-form d-flex justify-content-center">
          <input
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            maxLength="60"
            name="email"
            className="form-control me-2"
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
      </div>

      <div className="social-icons mt-4">
        <ul className="socialize d-flex justify-content-center list-unstyled mb-0">
          <li className="z-logo me-3">
            <img width="32" height="27" src="//static.zennioptical.com/marketing/logo/zlogo/ZEN_Sym_teal.png" alt="Z Logo Teal" />
          </li>
          <li className="connect-heading me-3">
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
          <li className="shareContent me-3">
            <a href="https://www.youtube.com/user/ZenniOptical" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-youtube-play"></i>
              <span className="sr-only">YouTube</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
