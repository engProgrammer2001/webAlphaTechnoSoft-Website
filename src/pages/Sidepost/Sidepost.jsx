import React from "react";
import "./Sidepost.css";
import img1 from "../../assets/side-blog-img/side-post-image.jpg";
import img2 from "../../assets/side-blog-img/side-blog-img3.jpg";
import img3 from "../../assets/side-blog-img/side-blog-img2.jpg";
import img4 from "../../assets/side-blog-img/side-blog-img4.jpeg";
import img5 from "../../assets/side-blog-img/side-blog-img5.jpeg";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Sidepost = () => {
  return (
    <>
      <div className="container SideBlog">
        <div className="row text-center heading mb-5">
          <p className="common-p">Our Blog.</p>
          <h1 className="common-h2">Latest Post</h1>
        </div>
        <div className="post">
          <img src={img2} alt="" />
          <a href="#">
          10 Digital Skills That Can Make Students Instantly Employable in 2024
          </a>
        </div>
        <div className="post">
          <img src={img1} alt="" />
          <a href="#">
          How to Use Short-Form Video in Digital Marketing
          </a>
        </div>
        <div className="post">
          <img src={img3} alt="" />
          <a href="#">
          Technologent Recognized on the 2024 CRN Tech Elite 250 List
          </a>
        </div>
        <div className="post">
          <img src={img4} alt="" />
          <a href="#">
          How Hybrid IT Enables AI
          </a>
        </div>
        <div className="post">
          <img src={img5} alt="" />
          <a href="#">
          Why Immutable Storage Is Indispensable in Today’s IT Environment
          </a>
        </div>
        
        <div className="Follow-us">
        <hr/>
          <h4>Follow us</h4>
          <a href="#" id="Insta">
            <FaInstagramSquare />
          </a>
          <a href="#" id="Facebook">
            <FaFacebook />
          </a>
          <a href="#" id="twitter">
            <FaTwitter />
          </a>
          <a href="#" id="Linkedin">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidepost;
