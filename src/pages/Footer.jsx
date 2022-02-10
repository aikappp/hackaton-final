import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading"> Wilderness Travel </p>
        <p className="footer-subscription-heading">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          blanditiis ullam exercitationem iste asperiores porro id esse saepe
          repudiandae, necessitatibus modi maxime magnam natus neque non
          expedita. Consequuntur, suscipit architecto.
        </p>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About us</h2>
            <Link to="/">Welcome</Link>
            <Link to="/">How we travel</Link>
            <Link to="/">Our leaders</Link>
            <Link to="/">Awards</Link>
            <Link to="/">WT in the News</Link>
          </div>
          <div class="footer-link-items">
            <h2>Keep in Touch</h2>
            <Link to="/">Contact us</Link>
            <Link to="/">Catalog Request</Link>
            <Link to="/">Digital Catalog</Link>
            <Link to="/">Enews Sign-up</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Discover</h2>
            <Link to="/">Our trips</Link>
            <Link to="/">New trips</Link>
            <Link to="/">Special Offers</Link>
            <Link to="/">Photo Blog</Link>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" className="social-logo">
              Wilderness Travel
              <i class="fab fa-typo3" />
            </Link>
          </div>
          <small class="website-rights"> Wilderness Travel © 2022</small>
          <div class="social-icons">
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
            <Link
              class="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-twitter" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
