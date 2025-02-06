import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { IoLocation } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FcLeft } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";

const Contact = () => {
  let number = "+91-8178978192";
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rsaj72l",
        "template_8q9my2m",
        formData,
        "a0JNKXRIsJG96xLP2"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage(
            "Thank you! Your message has been sent successfully."
          );
          setFormData({
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setErrorMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setSuccessMessage("");
          setErrorMessage(
            "Failed to send the message. Please try again later."
          );
        }
      );
  };

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
          <div
            className="col-12 col-lg-4 col-md-6 hover"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
          >
            <div className="card">
              <div className="card-body connect-data address-col">
                <h5 className="card-title text-center">Current Address</h5>
                <p className="card-text mt-4 text-center">
                  B-74, Sector-2 Noida <br /> Uttra Pradesh
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-4 col-md-6 hover"
            data-aos="flip-left"s
            data-aos-easing="ease-in-out"
          >
            <div className="card">
              <div className="card-body connect-data address-col">
                <h5 className="card-title text-center">Emails</h5>
                <p className="card-text text-center mt-4 ">
                  support@webalphatechnnosoft.com <br />
                  support@webalphatechnnosoft.com
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-12 col-lg-4 col-md-6 hover"
            data-aos="flip-left"
            data-aos-easing="ease-in-out"
          >
            <div className="card">
              <div className="card-body connect-data address-col">
                <h5 className="card-title text-center">Contact Number</h5>
                <p className="card-text text-center mt-4 ">
                  +91 9990769343 <br />
                  +91 8178978192
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-4">
        <div className="container subhead">
          <h2 className="mt-5">Put Your Details Here</h2>
          <div className="row mb-5 connect-data">
            <div className="col-sm-9 mb-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-group col-md-5 mb-5">
                    <label htmlFor="fname" className="form-label">
                      First Name<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.first_name}
                      onChange={handleChange}
                      id="fname"
                      name="first_name"
                      placeholder="Enter first name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group col-md-5 mb-5 offset-sm-1">
                    <label htmlFor="lname" className="form-label">
                      Last Name<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.last_name}
                      onChange={handleChange}
                      id="lname"
                      name="last_name"
                      placeholder="Enter last name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group col-sm-5 mb-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address<span className="star">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      id="exampleInputEmail1"
                      name="email"
                      placeholder="Example@gmail.com"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-group col-md-5 mb-5 offset-sm-1">
                    <label htmlFor="phone" className="form-label">
                      Phone Number<span className="star">*</span>
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      id="phone"
                      name="phone"
                      placeholder="9000000000"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-11 mb-5 form-group">
                  <div>
                    <label htmlFor="subject" className="form-label">
                      Subject<span className="star">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      name="subject"
                      id="subject"
                      placeholder="Enter Your Subject"
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className="col-sm-11 mb-3 form-group">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Share Doubts
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    value={formData.message}
                    onChange={handleChange}
                    name="message"
                    rows="5"
                    placeholder="Enter Your Message"
                    required
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
            <div className="col-sm-3 mt-5 text-center contactDetails p-2">
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
                <p className="st-font">support@webalphatechnnosoft.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-12 col-md-12 col-sm-12 col-xs-12">
          <h1 className="common-h2 text-center pb-5">
            Way Come to Office <br /> <FcMinus />
          </h1>
          <section>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14023.870112902633!2d77.32058771909874!3d28.5782419020726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4db94c52b91%3A0x1de101b2207e5df9!2sSector%202%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1688916704025!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
