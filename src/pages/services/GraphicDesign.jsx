import React from "react";
import img1 from '../../assets/Services-images/graphic-desing-img2.jpg'

const GraphicDesign = () => {
  return (
    <>
      <div className="container-fluid graphicDesing-main-sec">
        <h1>Graphic Design</h1>
        <a href="/">Go To Back</a>
      </div>
      <div className="container gd-content ">
        <h1 id="main-heading">
        What Does a Graphic Designer Do? And <br /> How Do I Become One?
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6 paraGraph">
            <p>
              <span style={{ fontSize: "40px" }}>A</span> graphic designer creates visuals for various projects, from websites to print ads and more. In this article, you will learn about skills, salary, requirements, and why you should consider a career in this field in India. <br />Combining art and technology, graphic designers use various design elements to create distinctive visuals for clients and companies. A graphic designer can work with print or digital media, and they can create their designs by hand or using computer software. Staying on top of cutting-edge technology and design trends makes working in this evolving industry an exciting and challenging career choice.
              <br />
            </p>
            <br />
            <h4>What does a graphic designer do?</h4>
            <hr />
            <p>
            Using various technologies, a graphic designer creates useful, meaningful, and functional visuals. The work depends mainly on a client or company's needs, but general designer responsibilities may include.
            </p>
            <p>
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> Developing visual assets to support a marketing campaign. <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> Designing a graphic overlay for social media posts. <br />
              <span style={{ fontSize: "25px", color: "#3b3663" }}>*</span> Formalising a print ad layout and retouching photos for digital signage <br />
            </p>
            <br />
            <hr />
            <button>
              <a href="/contact">Let's Connect With Us </a>
            </button>
          </div>
          <div className="col-auto d-none d-lg-block col-lg-6">
            <img src={img1} width={"100%"} height={"70%"} alt="" />
          </div>
        </div>
        <h1>Where do graphic designers work?</h1>
        <p>Graphic designers can work in many settings. You may work in-house at a company or agency or home as a freelancer. Graphic designers often work inIf you’re naturally creative and have a good eye for visually compelling design, a career in graphic design may suit you well. Nurture your talent as a graphic designer by spending time building a few key skills.</p>
        <p>
        <span style={{ fontSize: "25px", color: "#3b3663", fontWeight:"500" }}>* Color Theory</span>  is a series of rules and guidelines you’ll apply to your work to create aesthetically pleasing visuals. This involves choosing an appropriate colour palette for a project and understanding how people perceive colour in various situations. <br /> <br />
        <span style={{ fontSize: "25px", color: "#3b3663", fontWeight:"500" }}>* Communication skills</span>  help you communicate, actively listen, problem-solve, and understand what clients and stakeholders need when collaborating on a project. <br /> <br />
        <span style={{ fontSize: "25px", color: "#3b3663", fontWeight:"500" }}>* Computer-aided design (CAD) software </span>  helps you create complex two- and three-dimensional designs. Some computer software programs used in graphic design include Adobe Photoshop, Illustrator, InDesign, Dreamweaver, Paintshop Pro, and Corel Graphics Suite. <br /><br />
        <span style={{ fontSize: "25px", color: "#3b3663", fontWeight:"500" }}>* Layout </span>  helps you to effectively manipulate the visual space of a print page or screen to attract readers or visitors.


        </p>
      </div>
    </>
  );
};

export default GraphicDesign;
