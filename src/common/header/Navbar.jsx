import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Assuming you have similar styles in CSS file
import Logo from "../../assets/brands/WebAlphaLogo.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import digitalMarketingImg from "../../assets/HeaderImages/digital_marketing.png";
import webdevelopmentImg from "../../assets/HeaderImages/web_development.png";
import graphicdesignImg from "../../assets/HeaderImages/grafic_design.jpg";
import webdesignImg from "../../assets/HeaderImages/web_desing.jpg";
import seoImg from "../../assets/HeaderImages/SEO.jpg";
import mobileappdevelopmentImg from "../../assets/HeaderImages/app_development.jpg";
import socialmediaImg from "../../assets/HeaderImages/scial_media.jpg";
import ecommerceImg from "../../assets/HeaderImages/e-commerce_website.jpg";

// Packages images
import websitedesingpackage from "../../assets/HeaderImages/website_packages.png";
import socialmediapackage from "../../assets/HeaderImages/social_packages.png";
import seopackage from "../../assets/HeaderImages/seo_package.png";
import localseopackage from "../../assets/HeaderImages/seo_local_packages.png";
import smopackage from "../../assets/HeaderImages/smo-package.png";
import softwaredevelopmentpackage from "../../assets/HeaderImages/application-development-package.webp";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../store/auth";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [subMenu, setSubMenu] = useState(null);
  const [menuTitle, setMenuTitle] = useState("");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const fullName = localStorage.getItem("fullName");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  // Handle menu icon click
  const handleIconClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle toggle menu
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Show submenu when a parent menu item is clicked
  const showSubMenu = (hasChildren) => {
    setSubMenu(hasChildren.querySelector(".sub-menu"));
    setMenuTitle(
      hasChildren.querySelector("i").parentNode.childNodes[0].textContent
    );
  };

  // Hide submenu
  const hideSubMenu = () => {
    if (subMenu) {
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        setSubMenu(null);
        setMenuTitle("");
      }, 300);
    }
  };

  // handle logout function 
  const handleLogout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("id");
    localStorage.removeItem("fullName");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/"); 
  };


  // onclick redirect in login page
  const userLogin = () => {
    window.location.href = "/login";
  };

  // Handle window resize to close menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isMenuActive) {
        toggleMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuActive]);

  return (
    <header className="header">
      {/* Header Section */}
      <div className="flex v-center">
        {/* Logo Section */}
        <div className="header-item item-left">
          <Link to="/" className="logo">
            <img
              src={Logo}
              alt="Logo"
              className="w-28 sm:w-32 md:w-40 lg:w-48"
            />
          </Link>
        </div>

        {/* Menu Section */}
        <div className="header-item item-center">
          <div
            className={`menu-overlay ${isMenuActive ? "active" : ""}`}
            onClick={toggleMenu}
          ></div>
          <nav className={`menu ${isMenuActive ? "active" : ""}`}>
            <div className="mobile-menu-head">
              <div className="go-back" onClick={hideSubMenu}>
                <i className="fa fa-angle-left"></i>
              </div>
              <div className="current-menu-title">{menuTitle}</div>
              <div className="mobile-menu-close" onClick={toggleMenu}>
                &times;
              </div>
            </div>
            <ul
              className="menu-main"
              onClick={(e) => {
                if (e.target.closest(".menu-item-has-children")) {
                  const hasChildren = e.target.closest(
                    ".menu-item-has-children"
                  );
                  showSubMenu(hasChildren);
                }
              }}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/project">Project</Link>
              </li>

              <li className="menu-item-has-children">
                <a href="#">
                  Services <i className="fa fa-angle-down"></i>
                </a>
                <div className="sub-menu mega-menu mega-menu-column-4">
                  <div className="list-item text-center">
                    <Link to="/services">
                      <img src={digitalMarketingImg} alt="Digital Marketing" />
                      <h4 className="title">Digital Marketing</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/webdevelopment">
                      <img src={webdevelopmentImg} alt="Web Development" />
                      <h4 className="title">Web Development</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/graphicdesign">
                      <img src={graphicdesignImg} alt="Graphic Design" />
                      <h4 className="title">Graphic Design</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/webdesign">
                      <img src={webdesignImg} alt="Web Design" />
                      <h4 className="title">Web Design</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/mobileappdevelopment">
                      <img
                        src={mobileappdevelopmentImg}
                        alt="Mobile App Development"
                      />
                      <h4 className="title">Mobile App Development</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/socialmediamanagment">
                      <img src={socialmediaImg} alt="Social Media Management" />
                      <h4 className="title">Social Media Management</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/ecommercewebsitedesign">
                      <img src={ecommerceImg} alt="E-commerce Web Design" />
                      <h4 className="title">E-commerce Web Design</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/seo-services">
                      <img
                        src={seoImg}
                        alt="SEO (Search Engine Optimization)"
                      />
                      <h4 className="title">
                        SEO (Search Engine Optimization)
                      </h4>
                    </Link>
                  </div>
                </div>
              </li>
              <li className="menu-item-has-children">
                <a href="#">
                  Packages <i className="fa fa-angle-down"></i>
                </a>
                <div className="sub-menu mega-menu mega-menu-column-4">
                  <div className="list-item text-center">
                    <Link to="/websitepackage">
                      <img
                        src={websitedesingpackage}
                        alt="Website Design Packages"
                      />
                      <h4 className="title">Website Design Packages</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/socialmediapackage">
                      <img
                        src={socialmediapackage}
                        alt="Social Media Packages"
                      />
                      <h4 className="title">Social Media Packages</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/seopackage">
                      <img src={seopackage} alt="SEO Packages" />
                      <h4 className="title">SEO Packages</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/localsmopackage">
                      <img src={localseopackage} alt="Local SEO Packages" />
                      <h4 className="title">Local SEO Packages</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/smopackage">
                      <img src={smopackage} alt="SMO Packages" />
                      <h4 className="title">SMO Packages</h4>
                    </Link>
                  </div>
                  <div className="list-item text-center">
                    <Link to="/softwaredevelopment">
                      <img
                        src={softwaredevelopmentpackage}
                        alt="Software Development"
                      />
                      <h4 className="title">Software Development</h4>
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Right Icons Section */}
        <div className="social-icons hidden md:flex justify-center gap-3 p-2 rounded-full">
          <a
            href="https://www.facebook.com/"
            className="social-icon p-3 rounded-full  bg-gray-300 hover:bg-orange-400 transition duration-300"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            className="social-icon p-3 rounded-full bg-gray-300 hover:bg-orange-400 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            className="social-icon p-3 rounded-full bg-gray-300 hover:bg-orange-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/"
            className="social-icon p-3 rounded-full bg-gray-300 hover:bg-orange-400 transition duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
        {/* Login/Logout Button */}
        <div className="relative">

          {isLoggedIn ? (
            <div>
              <a
                onClick={handleIconClick}
                className="cursor-pointer text-bold bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition duration-300"
                aria-label="User Menu"
              >
                {fullName[0].toUpperCase()}
              </a>
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-4 bg-white shadow-lg rounded-lg">
                  <a
                    href="/profile"
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    aria-label="Profile"
                  >
                    Profile
                    <CgProfile className="ml-2" />
                  </a>
                  <a
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    aria-label="Logout"
                  >
                    Logout
                    <IoLogOut className="ml-2" />
                  </a>
                </div>
              )}
            </div>
          ) : (
            <a
              onClick={userLogin}
              className="cursor-pointer bg-gray-300 p-3 rounded-full hover:bg-gray-400 transition duration-300"
              aria-label="Login"
            >
              Login
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-toggle md:hidden p-2 text-3xl border border-gray-400 rounded-md text-gray-400 hover:border-white hover:text-white ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Navbar;
