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
            10 Digital Skills That Can Make Students Instantly Employable in
            2024
          </a>
        </div>
        <div className="post">
          <img src={img1} alt="" />
          <a href="#">How to Use Short-Form Video in Digital Marketing</a>
        </div>
        <div className="post">
          <img src={img3} alt="" />
          <a href="#">
            Technologent Recognized on the 2024 CRN Tech Elite 250 List
          </a>
        </div>
        <div className="post">
          <img src={img4} alt="" />
          <a href="#">How Hybrid IT Enables AI</a>
        </div>
        <div className="post">
          <img src={img5} alt="" />
          <a href="#">
            Why Immutable Storage Is Indispensable in Today’s IT Environment
          </a>
        </div>

        <div className="Follow-us flex flex-col items-center mt-16 text-center pb-8">
          <hr className="w-full mb-4" />
          <h4 className="font-semibold text-[#3b3663] mb-4">Follow us</h4>
          <div className="flex space-x-4 text-3xl">
            <a href="#" id="Insta" className="hover:text-gray-700">
              <FaInstagramSquare />
            </a>
            <a href="#" id="Facebook" className="hover:text-gray-700">
              <FaFacebook />
            </a>
            <a href="#" id="twitter" className="hover:text-gray-700">
              <FaTwitter />
            </a>
            <a href="#" id="Linkedin" className="hover:text-gray-700">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidepost;
