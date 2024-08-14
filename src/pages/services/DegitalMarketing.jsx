import React from "react";
import "./Service.css";
import img1 from "../../assets/Services-images/desitalMarketing2.jpg";

const DegitalMarketing = () => {
  return (
    <>
      <div className="container-fluid main-sec">
        <h1>Digital Marketing</h1>
        <a href="/">Go To Back</a>
      </div>
      <div className="container content">
        <h1>
          Digital Experiences, Online Marketing and Technology Solutions. Fully
          loaded & focused on real results
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6 paraGraph">
            <p>
              <span>W</span>e offer digital marketing services to ensure we “put
              you in the shop window” so that potential customers searching for
              your products and services online find you quickly and at the top
              of listings and through other digital channels. <br />
              <br /> We take a considered and structured approach to designing
              our websites and brands. We engage with you to understand your
              organisation and your users and then use this to create UX led,
              high converting and performing experiences. The in-house software
              expertise we have internally is unique in our industry. <br />{" "}
              <br />
              This allows us to take on even the most diverse project
              specifications and technical requirements. We believe you're never
              limited by technology.
            </p>
            <h4>How Digital Marketing Services Drive Business Growth?</h4>
            <hr />
            <p>
              Digital marketing services provide businesses of all sizes with an
              opportunity to market their brand 24/7 at a low cost. From
              startups to medium-sized enterprises to multiple-location
              companies, a digital marketing company helps you expand your niche
              market reach to offer goods and services to your target customers,
              irrespective of time differences or location.
            </p>{" "}
            <br />
            <h4>
              Engage Your Target Customers at the Right Time on the Right
              Platform?
            </h4>
            <hr />
            <p>
              Hiring an internet marketing agency is one of the best ways to
              reach your prospects while maintaining a robust relationship with
              your existing clients. As long as your business has a strong
              digital presence, your customers will always find you.
            </p>
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

export default DegitalMarketing;
