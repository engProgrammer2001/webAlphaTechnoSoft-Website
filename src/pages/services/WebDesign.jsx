import React from "react";
import img1 from "../../assets/Services-images/Web-design-img1.avif";

const WebDesign = () => {
  return (
    <>
      <div className="container-fluid webDesign-main-sec">
        <h1>Web Design</h1>
        <a href="/">Go To Back</a>
      </div>
      <div className="container content">
        <h1>
          What is Web Designing and What Element <br /> Makes It Work?
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6 paraGraph">
            <p>
              <span style={{ fontSize: "40px" }}>W</span>ith the increasing
              number of users of the internet, IT the sector is flourishing with
              rapid growth in site development. Many small-scale and large-scale
              businesses depend on the website to bring potential customers at a
              low cost. Hence, there is a growing demand for website developers
              in all sectors of business. Web designing is a prominent skill and
              hence, the IT sector provides a great salary for efficient
              developers. Web designing has several facets and a skilled
              developer can work full-time in an IT firm or freelance. If you
              are an enthusiastic learner, then you can easily skill Website
              Development in front of the sources available on the Internet. In
              this article, we have collected and put together some vital
              information on “How to learn Web Designing”.
              <br />
              <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> Know the basics of HTML: HTML tags are the instructions that a browser follows to create a webpage. These tags are used to place headings, paragraphs, links, and pictures in the appropriate structure. It is critical to understand how header tags such as H1, H2, and H3 are utilized for content hierarchy. Additionally, header tags influence how web crawlers classify a design and how it appears in organic search rankings.
              <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> Understand CSS: CSS (or cascading style sheets) adds styling and other instructions to how an HTML element will appear. Skills like applying typefaces, and adding padding,  orientation, colors, and grids can be enhanced through CSS. 
              <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> An
              application to revolutionise customer service by providing a
              portal for your customers to access
              <br />
            </p>{" "}
            <br />
            <h4>What Skills Do Web Designers Need to Have?</h4>
            <hr />
            <p>
            Web designers will encounter new difficulties as businesses focus more on the digital marketplace. As the IT sector grows, web Designers have to learn many new skills to stay updated. Enhancing coding skills like HTML and CSS are essential for creating websites for the future. Designers should have skills like digital marketing, time management and coding for proficiency.
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

export default WebDesign;
