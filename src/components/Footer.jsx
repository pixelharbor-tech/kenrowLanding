import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/kenrow png 1_1.png";
const Footer = () => {
  return (
    <footer>
      <div className="business-info">
        <div className="left">
          <Link>
            <img src={Logo} alt="Kenrow Logo" />
          </Link>
          <div>
            <p>
              We are the premier digital marketing solution in Miami. Contact us
              today to get your free, no-obligation consultation!
            </p>

            <span>
              &copy; Copyright Kenrow. All Rights
              Reserved
            </span>
          </div>
        </div>
        <div className="middle">
          <h1>Contact info</h1>

          <div>
            <span>(999) 999-1234</span>
            <span>my@email.com</span>
            123 Rich Street, Suite 221 Miami, Florida 33101 United States
          </div>
        </div>
        <div className="right">
          <h1>Menu</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/who-we-help">Who We Help</Link>
            <Link to="/about">About</Link>
            <Link to="/Blog"> Blog</Link>
            <Link to="/case-studies"> Case Studies</Link>
            <Link to="/about">About</Link>
            <Link to="/Blog"> Blog</Link>
          </div>
        </div>

        <div className="right">
          <h1>Services</h1>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%"
            }}
          >
            <Link to="/seo">SEO</Link>
            <Link to="/google-ads">Google Ads</Link>
            <Link to="/facebook-ads">Facebook Ads</Link>
            <Link to="/social-posting">Social Posting</Link>
            <Link to="/content">Content</Link>
            <Link to="/website">Website</Link>
            <Link to="/listing">Listing</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
