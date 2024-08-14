import React from "react";
import img1 from "../../assets/Services-images/social-media-manage-img2.jpg";

const SocialMediaManagement = () => {
  return (
    <>
      <div className="container-fluid social-media-main-sec">
        <h1>Scial Media Management</h1>
        <a href="/">Go To Back</a>
      </div>
      <div className="container content">
        <h1>
          Build and boost your social media presence using <br /> Web Alpha
          Techno Soft.
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6 paraGraph">
            <p>
              <span style={{ fontSize: "40px" }}>E</span>levate your online
              business with our comprehensive marketing solutions. Whether
              through paid advertising or organic strategies, and encompassing
              design to web development – the control is in your hands.
              <br /> <br />
              Have you heard of PPC (Pay-per-click) before? PPC is an effective
              paid advertising for your business, and our expert team will help
              you maximize your business goal through paid advertising. Paid
              advertising accounts for 65% of ‘clicks’, according to Google. We
              cater to your marketing budget and help you plan brands marketing
              and paid advertising in an effective way to reach your goals
              beyond expectations.
              <br />
              <br />
              Paid Marketing will give your business the golden opportunity to
              advertise within the sponsored listings of any search engine. This
              way you can reach a greater range of your target customers.
              <br />
              <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span>{" "}
              Build Progressive Web Apps that combine the best technical
              solutions applied in mobile and web applications beneficial in
              terms of the ease of development and distribution, as well as a
              number of other advantages for your business. Talk to our experts
              to discuss:
              <br />
            </p>
            <br />
            <h4>BENEFIT FROM A PROFITABLE PPC ADVERTISING MODEL.</h4>
            <hr />
            <p>
              <span style={{ fontSize: "25px", color: "#3b3663" }}>* </span>
              Our expert team uses an AI platform to help your business achieve
              the maximum return on the investment throughout the year. <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>* </span>
              We optimize your campaigns more efficiently and faster than you
              ever thought. <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>* </span>
              We create a Paid Search Strategy customized for your business
              needs. <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>* </span>
              Our experts keep track of analytics and stay up to date with the
              keyword research to create maximum customer engagement with your
              business. <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>* </span>
              We help you optimize your goal through search query analysis.
              <br />
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

export default SocialMediaManagement;
