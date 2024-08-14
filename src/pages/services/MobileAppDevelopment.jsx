import React from "react";
import img1 from "../../assets/Services-images/app-development-img2.jpg";

const MobileAppDevelopment = () => {
  return (
    <>
      <div className="container-fluid appdevelopment-main-sec">
        <h1>Mobile App Development</h1>
        <a href="/">Go To Back</a>
      </div>
      <div className="container content">
        <h1>
          Secure, Scalable Mobile Apps for the <br /> Businesses of the Future
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6 paraGraph">
            <p>
              <span style={{ fontSize: "40px" }}>Y</span>our success critically
              depends on the quality of mobile application development services.
              An app providing less-than-perfect performance loses its value
              immediately. 62% of users will uninstall an app that crashes or
              freezes. 25% abandon an app when it loads for over 4 seconds. You
              have one shot to convince prospects of app value. You must meet
              their expectations every day once they turn into users.  This is
              where IT Craft steps in. We provide you with every tech service
              you need to launch, redevelop, or expand an app of decent quality.
              <br />
              <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> We offer a full cycle of application design, integration and management services. Whether it is a consumer oriented app or a transformative enterprise-class solution, the company leads the entire mobile app development process from ideation and concept to delivery, and to ongoing ongoing support.
              <br /> <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> Get top-notch mobile applications that run on multiple platforms costs while providing your users with an app that fits their OS. Use this alternative to reduce costs and time-to-market and to reach more users without loss of quality, including:
              <br /> <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> Build Progressive Web Apps that combine the best technical solutions applied in mobile and web applications beneficial in terms of the ease of development and distribution, as well as a number of other advantages for your business. Talk to our experts to discuss:
              <br />
            </p>
            <br />
            <h4>
              IT CRAFT CUSTOM MOBILE APP DEVELOPMENT SERVICES
            </h4>
            <hr />
            <p>
              Streamlined, business-value-focused mobile development has always
              been one of our key competencies. As a top-rated custom mobile app
              development company, IT Craft offers you a wide selection of
              services needed to ensure the best implementations for your
              project needs, goals, and specific limitations. Your peace of mind
              is a part of the service package.
            </p>
            <br />
            <hr />
            <button>
              <a href="/contact">Let's Connect With Us </a>
            </button>
          </div>
          <div className="col-auto d-none d-lg-block col-lg-6">
            <img src={img1} width={"100%"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileAppDevelopment;
