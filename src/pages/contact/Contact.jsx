import React from "react";
import "./Contact.css";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FcLeft } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";




const Contact = () => {
  let number = "+91-8178978192";
  return (
    <>
      <div className="container-fluid Maincontact-sec">
        <h2>Contact Us</h2>
        <a href="/">
          <FcLeft /> Home
        </a>
      </div>
      <div className="container">
        <div className="row text-center heading mt-5 mb-5">
          <p className="common-p">Reach me</p>
          <h1 className="common-h2 ">All Address</h1>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-lg-4 col-md-6 hover" data-aos="flip-left" data-aos-easing="ease-in-out">
            <div class="card" >
              <div class="card-body connect-data address-col">
                <h5 class="card-title text-center">Current Address</h5>
                <p class="card-text mt-4 text-center">
                  B-74, Sector-2 Noida <br /> Uttra Pradesh
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 hover" data-aos="flip-left" data-aos-easing="ease-in-out">
            <div class="card" >
              <div class="card-body connect-data address-col">
                <h5 class="card-title text-center">Emails</h5>
                <p class="card-text text-center mt-4 ">
                  support@webalphatech.com <br />
                  support@webalphatech.com 
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 col-md-6 hover" data-aos="flip-left" data-aos-easing="ease-in-out">
            <div class="card" >
              <div class="card-body connect-data address-col">
                <h5 class="card-title text-center">Contact Number</h5>
                <p class="card-text text-center mt-4 ">
                  +91 8103334932 <br/>
                  +91 8103334932
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classNameName="container">
        <div className="container subhead ">
          <h2 className="mt-5">Put Your Details Here</h2>
          <div className="row mb-5 connect-data">
            <div className="col-sm-9 mb-5">
              <form action="">
                <div className="row">
                  <div className="form-group col-md-5 mb-5">
                    <label for="fname" className="form-label">
                      First Name<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fname"
                      aria-describedby="fname"
                      placeholder="Enter first name"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group col-md-5 mb-5 offset-sm-1">
                    <label for="lname" className="form-label">
                      Last Name<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lname"
                      aria-describedby="lname"
                      placeholder="Enter last Name"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group col-sm-5 mb-5">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address<span className="star">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Example@gmail.com"
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group col-md-5 mb-5 offset-sm-1">
                    <label for="number" className="form-label">
                      Phone Number<span className="star">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="lname"
                      aria-describedby="lname"
                      placeholder="9000000000"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-sm-11 mb-2 mb-5 form-group">
                  <div>
                    <label for="subject" className="form-label">
                      Subject<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Enter Your Subject"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="col-sm-11 mb-3 form-group">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Share Doubts
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Enter Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="subbtn mt-3 px-4 fw-bold common-btn2"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-sm-3 mt-5 text-center contactDetails">
              <div>
                <IoLocation />
                <p className="st-font">B-74 Sector-2 Noida Uttra Pradesh</p>
              </div>
              <div>
                <IoMdCall />
                <p className="st-font">{number}</p>
              </div>
              <div>
                <IoMdMail />
                <p className="st-font">support@webalphatech.com</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-12 col-md-12 col-sm-12 col-xs-12">
          <h1 className="common-h2 text-center pb-5">Way Come to Office <br /> <FcMinus /></h1>
          

          <section>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.4703030213664!2d77.31225387560768!3d28.585664686207195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51485ed7deb%3A0x6f4b79eb35e30b28!2sWebalpha%20Technosoft!5e0!3m2!1sen!2sin!4v1711013020531!5m2!1sen!2sin"
              width="100%"
              height="530"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
