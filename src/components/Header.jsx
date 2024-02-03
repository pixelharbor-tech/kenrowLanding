import { Link } from "react-router-dom";
import "../style/header.scss";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useMediaQuery, } from "@mui/material";

import Logo from "../assets/kenrow png 1_1.png"
const Header = () => {
  const [openServices, setOpenServices] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 991px)");
  const menuControls = useAnimation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    menuControls.start(isOpen ? "closed" : "open");
  };

  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };
  return (
    <nav>
      <div className="lower-nav">
        <div>
          <Link to="/">
          <img style={{
            width:  !isSmallScreen ? "7em" : "5em"
          }}  src={Logo} alt="Kenrow Logo" />
          </Link>
        </div>
        {isSmallScreen && (
          <img
            onClick={() => toggleMenu()}
            style={{
              display: isOpen ? "none" : "block",
            }}
            className="menu"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAARklEQVR4nO3YsRGAMAwEQfVflh3qe4LQAQGpDbszKuCzG1UBAEuSmeQ67OYnhnT3eAwBAIBXJ9ZvZDwAAP8WGR/feACoTdzBx6QOKyC8YgAAAABJRU5ErkJggg=="
          ></img>
        )}
        <div className="left-down">
          <div
            onMouseEnter={() => setOpenServices(true)}
            onMouseLeave={() => setOpenServices(false)}
            className={openServices ? "relative" : ""}
          >
            <span style={{ display: "flex", alignItems: "center" }}>
              Services
              <img
                className={`arrow-rotate ${openServices ? "rotate-up" : ""}`}
                style={{
                  margin: "5px",
                  width: "15px",
                }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0klEQVR4nO3Ruw7CMAyF4YgBwdsy9r06AFO3Lj5j3icoiIJAkXrLxRbnlzwlgz/ZOcYYY4wxVq0QwsFZ39F7fxSRHkDnlAbgIiK3cRzPc4jwmk4jAp/97klMAqIKg2/EEzIMwyn5WSsGaxBaMdiC0IbBHoQWDHIgWmOQE9EKgxKI2hiURNTCVEGUxlRFlMI0QeTGNEXkwqhA7MWoQmzFqESsxahGLMWYQMxhTCGm4oIicv1Z/D3xTT1i5jI2LrEAYw+RwNhFTEWAeQRjjDHG2J/3AJ6xJ5SFD/9+AAAAAElFTkSuQmCC"
              ></img>
            </span>

            {openServices && (
              <div className={`select ${openServices ? "open" : ""}`}>
                <div 
                  className="placeholder"
                  onClick={() => setOpenServices(false)}
                >
                  <Link to={"/seo"}>
                    SEO
                  </Link>
                </div>

                
                <div
                  className="placeholder"
                  onClick={() => setOpenServices(false)}
                >
                  <Link
                    to={"/google-ads"}
                    onClick={() => setOpenServices(false)}
                  >
                    Google Ads
                  </Link>
                </div>
                <div
                  className="placeholder"
                  onClick={() => setOpenServices(false)}
                >
                  <Link to={"/facebook-ads"}>Facebook Ads</Link>
                </div>
                <div
                  className="placeholder"
                  onClick={() => setOpenServices(false)}
                >
                  <Link to="/social-management">Social Posting</Link>
                </div>
                <div onClick={() => setOpenServices(false)}>
                  <Link to={"/content"}>Content</Link>
                </div>
                <div
                  className="placeholder"
                  onClick={() => setOpenServices(false)}
                >
                  <Link to="/website">Website</Link>
                </div>
                <div
                  className="placeholder"
                  onClick={() => setOpenServices(false)}
                >
                  <Link to="/listing">Listing</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/who-we-help">Who We Help</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to={"/contact"}>
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
      <motion.div
        style={{
          backgroundColor: "#798CFC",
          height: "100%",
          width: "100%",
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "100",
        }}
        initial="closed"
        animate={menuControls}
        variants={menuVariants}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "20px",
          }}
        >
          <img 

          style={{
            width: "30px"
          }}
            onClick={() => toggleMenu()}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAm0lEQVR4nO2UQQ6DIBBFuURJvf9J6qYptZuy8DivIWWjEf2D2HThX5E4/z9gBp079XcCemAAvMHjgRdwU4oDX0UFksNTbdJDAVyAdzaMQGeovW4CVAi14QqEveFrEFqFF5oYZ2t50iwnabNzAdC1CveHXdFSQy3vxBzuyt9sEGUUqYVY5pwaCPC0NJHpEAQFcK/8XQ/Jq3pO/U4fS5Xnx68CVG0AAAAASUVORK5CYII="
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            color: "white",
            marginTop: "50px",
          }}
        >
          <Link to={"/seo"} onClick={() => toggleMenu()}>
            SEO
          </Link>
          <Link to="/listing" onClick={() => toggleMenu()}>
            Listing
          </Link>
          <Link to={"/facebook-ads"} onClick={() => toggleMenu()}>
            Facebook Ads
          </Link>
          <Link to="/social-posting" onClick={() => toggleMenu()}>
            Social Posting
          </Link>
          <Link to={"/content"} onClick={() => toggleMenu()}>
            Content
          </Link>
          <Link to="/website" onClick={() => toggleMenu()}>
            Website
          </Link>
          <Link to="/who-we-help" onClick={() => toggleMenu()}>
            Who We Help
          </Link>
          <Link to="/about" onClick={() => toggleMenu()}>
            About
          </Link>
          <Link to="/blog" onClick={() => toggleMenu()}>
            Blog
          </Link>
          <Link to="/case-studies" onClick={() => toggleMenu()}>
            Case Studies
          </Link>
          <Link to={"/contact"} onClick={() => toggleMenu()}>
            Contact Us
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Header;


/*    */