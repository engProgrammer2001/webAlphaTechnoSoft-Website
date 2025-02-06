import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from '../../assets/brands/WebAlphaLogo.jpg';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary menubar" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "400px", backgroundColor: '#FAF9F6', borderRadius: '4px' }}
              navbarScroll
            >
              <Nav.Link className="mx-3 navItems" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-3 navItems" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="mx-3 navItems" href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="mx-3 navItems" href="/project">
                Project
              </Nav.Link>
              <NavDropdown
                className="navItems mx-3"
                title="Services"
                id="navbarScrollingDropdown"
                onMouseEnter={(e) => {
                  const element = e.currentTarget;
                  element.click();
                }}
                onMouseLeave={(e) => {
                  const element = e.currentTarget;
                  const dropdownMenu = element.querySelector('.dropdown-menu');
                  if (!dropdownMenu?.matches(':hover')) {
                    element.click();
                  }
                }}
              >
                <NavDropdown.Item className="navDropdownItem" href="/services">
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/webdevelopment">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/graphicdesign">
                  Graphic Design
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/webdesign">
                  Web Design
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/mobileappdevelopment">
                  Mobile App Development
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/socialmediamanagment">
                  Social Media Management
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/ecommercewebsitedesign">
                  E-commerce Web Design
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navDropdownItem" href="/somethingnew">
                  Something New
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="navItems mx-3"
                title="Packages"
                id="navbarScrollingDropdownPackages"
                onMouseEnter={(e) => {
                  const element = e.currentTarget;
                  element.click();
                }}
                onMouseLeave={(e) => {
                  const element = e.currentTarget;
                  const dropdownMenu = element.querySelector('.dropdown-menu');
                  if (!dropdownMenu?.matches(':hover')) {
                    element.click();
                  }
                }}
              >
                <NavDropdown.Item className="navDropdownItem" href="/website-design-packages">
                  Website Design Packages
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/social-media-packages">
                  Social Media Packages
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/seo-packages">
                  SEO Packages
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/seo-local-pages">
                  SEO Local Pages
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/smo-packages">
                  SMO Packages
                </NavDropdown.Item>
                <NavDropdown.Item className="navDropdownItem" href="/software-development">
                  Software Development
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="mx-3 navItems" href="/contact">
                Contact Us
              </Nav.Link>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
