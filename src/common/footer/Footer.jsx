import React from "react";
import "./Footer.css";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import Logo from "../../assets/brands/Web-Alpha-Dark-Logo.png";
import { IoLocation } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import whatsAppPng from "../../assets/whatsApp/whatsApp.gif";
import VisitorCounter from "../../pages/VisitorCounter/VisitorCounter";

const Footer = () => {
  const email = "support@webalphatechnnosoft.com";
  const number = "+91 8178978192";

  return (
    <>
      <div className="container-fluid FooterBody">
        <div className="row MobileCenter">
          <div className="col-12 col-lg-3 px-4 col-md-3 LogoColum">
            {/* <h5>logo and Addres</h5> */}
            <img src={Logo} alt="Logo" />
            <h6>ADDRESS</h6>
            <p>
              <IoLocation /> B-74 Secotr-2 Near Secotr-15 Metro &nbsp; Station
              Noida Uttra Pradesh.
            </p>
            <h6>E-Mail</h6>
            <p>
              <IoMdMail /> {email}
            </p>
            <h6>Call Now</h6>
            <p>
              <IoMdCall /> {number}
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-3 CompanyColum">
            <h5>Company</h5>
            <a href="/about">About</a>
            <br />
            <a href="/services">Services</a>
            <br />
            <a href="/project">Project</a>
            <br />
            <a href="/contact">Contact Us</a>
            <br />
          </div>
          <div className="col-12 col-lg-3 col-md-3 serviceColum">
            <h5>Services</h5>
            <a href="#">Digital Marketing</a>
            <br />
            <a href="#">Web Designing</a>
            <br />
            <a href="#">Web Development</a>
            <br />
            <a href="#">Graphics Designer</a>
            <br />
            <a href="#">Mobile App Dev</a>
            <br />
            <a href="#">Social Media Management</a>
            <br />
            <a href="#">E-commerce Web Desing</a>
            <br />
          </div>
          <div className="col-12 col-lg-3 col-md-3 BlogColum">
            <h5>Blog</h5>
            <a href="/blog">Blog</a>
            <br />
            <a href="/privacyandsecurity">Privacy & Security</a>
            <br />
            <a href="/testomonial">Testomonial</a> <br />
            <a href="/termcondition">Term & Condition</a><br />
            <a href="/review">Reviews</a>
          </div>
        </div>
        <div className="row MobileCenter">
          <div className="col-12 col-lg-4 px-4 col-md-3 FollowColum flex flex-col ">
            <h5 className="mb-4">Follow</h5>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/webalphatechnosoft/"
                target="_blank"
                id="Insta"
                className="text-2xl"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.facebook.com/webalphatechnosoft"
                target="_blank"
                id="Facebook"
                className="text-2xl"
              >
                <FaFacebook />
              </a>
              <a href="#" id="twitter" className="text-2xl">
                <FaTwitter />
              </a>
              <a href="#" id="Linkedin" className="text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-3 searchColum">
            <h5>Serach</h5>
            <input className="p-2 text-black" type="text" placeholder="Search" />
            <button className="bg-orange-400 rounded-lg p-2">
              <a href="#">Search</a>
            </button>
          </div>
          <div className="col-12 col-lg-4 col-md-3 searchColum">
            <h5>Visitor Counter</h5>
            <VisitorCounter/>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-9 col-lg-6 col-md-6 copyurightColum">
            <p>
              Copyright &copy; 2024-25 Developed By{" "}
              <a href="https://webalphatechnosoft.com">Webaplhatechnosoft.</a> |
              IT Solution
            </p>
          </div>
          <div className="col-3 col-lg-6 col-md-6">
            <a href="https://wa.link/thjxy7" target="_blank">
              <img
                href="/about"
                src={whatsAppPng}
                alt=""
                width={60}
                style={{ float: "right", marginRight: 30 }}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
