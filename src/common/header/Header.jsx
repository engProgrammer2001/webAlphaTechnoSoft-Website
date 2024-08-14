import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Logo from '../../assets/brands/Web-Alpha-Dark-Logo.png'
import Logo from '../../assets/brands/WebAlphaLogo.jpg'

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary menubar" sticky="top" >
        <Container fluid>
          <Navbar.Brand href="/">
            <img src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="m-auto my-2 my-lg-0"
              style={{ maxHeight: "400px", backgroundColor:'#FAF9F6', borderRadius:'4px'}}
              navbarScroll
            >
              <Nav.Link className="mx-4 navItems" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="mx-4 navItems" href="/about">
                About
              </Nav.Link>
              <Nav.Link className="mx-4 navItems" href="/blog">
                Blog
              </Nav.Link>
              <Nav.Link className="mx-4 navItems" href="/project">
                Project
              </Nav.Link>
              <NavDropdown className="navItems mx-4" title="Services" id="navbarScrollingDropdown">
                <NavDropdown.Item href="services">
                  Digital Marketing
                </NavDropdown.Item>
                <NavDropdown.Item href="/webdevelopment">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item href="/graphicdesign">
                  Graphic Design
                </NavDropdown.Item>
                <NavDropdown.Item href="/webdesign">
                  Web Design
                </NavDropdown.Item>
                <NavDropdown.Item href="/mobileappdevelopment">
                  Mobile App Develoment
                </NavDropdown.Item>
                <NavDropdown.Item href="/socialmediamanagment">
                Social Media Management
                </NavDropdown.Item>
                <NavDropdown.Item href="/ecommercewebsitedesign">
                E-commerce Web Desing
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/somethingnew">
                  Something New
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="mx-4 navItems" href="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
