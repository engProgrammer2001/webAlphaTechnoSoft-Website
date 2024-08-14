import React from "react";
import "./About.css";
import img1 from "../../assets/About-images/About-main.png";
import { FcCalendar } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import { FcButtingIn } from "react-icons/fc";
import { FcMindMap } from "react-icons/fc";
import { FcWorkflow } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";

const About = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center heading mt-5 mb-5">
          <p className="common-p">Know batter about me.</p>
          <h1 className="common-h2 ">ABOUT US</h1>
        </div>
      </div>
      <div className="container about-sec">
        <div className="row">
          <div className="col-12 col-lg-6 col-md-12 ImgPart">
            <img src={img1} alt="" />
          </div>
          <div className="col-12 col-lg-6 col-md-12 pt-5">
            <h6 className="common-p">Know about Me.</h6>
            <h1 className="common-h2" style={{ lineHeight: "50px" }}>
              Growth Through Technology: Empowering Your Business with
              Innovative IT Solutions
            </h1>
            <p
              style={{
                marginTop: "40px",
                fontSize: "20px",
                fontWeight: "500",
                color: "#6b6b84",
              }}
            >
              We are a leading IT services provider that specializes in helping
              businesses leverage technology to achieve their goals. With a team
              of experienced professionals and a focus on innovation, we offer
              customized solutions that address the unique challenges and
              opportunities of our clients. Our mission is to empower
              organizations to thrive in a digital world by delivering
              exceptional service, quality, and value.
            </p>
            <div className="row mt-2 text-center">
              <div className="col-12 col-lg-6 col-md-3 mt-4">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body growth p-0">
                    <span>
                    <FcCalendar />
                    </span>
                    <h2>3+</h2>
                    <p>Experience</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-3 mt-4">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body growth p-0">
                    <span>
                      <FcBullish />
                    </span>
                    <h2>113+</h2>
                    <p>Finished Projects</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-2 text-center">
            <div className="col-12 col-lg-6 col-md-3 mt-4">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body growth p-0">
                    <span>
                    <FcButtingIn />
                    </span>
                    <h2>512+</h2>
                    <p>Customers</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-md-3 mt-4">
                <div class="card" style={{ width: "18rem" }}>
                  <div class="card-body growth p-0">
                    <span>
                    <FcMindMap />
                    </span>
                    <h2>113+</h2>
                    <p>Technology</p>
                  </div>
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#6b6b84",
              }}
            >
              From software development to cloud computing, our cutting-edge
              services help organizations stay ahead of the curve in a rapidly
              evolving digital landscape.
            </p>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="container mt-5 mb-5">
        <div className="row text-center heading mt-5 mb-5">
          <p className="common-p">
            <FcWorkflow /> Our Journey
          </p>
          <h1 className="common-h2 ">History Began in 2020</h1>
        </div>
        <div className="row item-center">
          <div className="col-12 col-lg-3 journey-sec">
            <h3>Founded</h3>
            <h6>2020</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              alias
            </p>
          </div>
          <div className="col-12 col-lg-3 journey-sec">
            <h3>Goals with new Team</h3>
            <h6>2022</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consequuntur s
            </p>
          </div>
          <div className="col-12 col-lg-3 journey-sec">
            <h3>A Long Leap to get Success</h3>
            <h6>2023</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam,
              quasi.
            </p>
          </div>
          <div className="col-12 col-lg-3 journey-sec">
            <h3>A New Milestone Achieved</h3>
            <h6>2024</h6>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perspiciatis, fugiat.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="row text-center heading mt-5 mb-5">
            {/* <p className="common-p">Know batter about me.</p> */}
            <h1 className="common-h2 ">Mission & Vission</h1>
          </div>
          <div className="col-12 col-lg-4 col-md-3 mvw-sec mt-4">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide exceptional value to our clients by
              delivering innovative solutions that meet their needs and exceed
              their expectations. We strive to achieve this by leveraging the
              latest technologies, adopting best practices, and fostering a
              culture of continuous improvement and excellence.{" "}
            </p>
            <p className="MVcategory">
              <span>
                <FcCheckmark /> Collaboration
              </span>
              <br />
              <span>
                <FcCheckmark /> Innovation
              </span>
              <br />
              <span>
                <FcCheckmark /> Excellence
              </span>
              <br />
              <span>
                <FcCheckmark /> Partnership
              </span>
              <br />
            </p>
          </div>
          <div className="col-12 col-lg-4 col-md-3 mvw-sec mt-4">
            <h2>Our Vision</h2>
            <p>
              To be globally recognized as the go-to provider of transformative
              software solutions, driving digital innovation and empowering
              businesses to thrive in the digital age. We envision a future
              where our expertise and innovative solutions contribute to the
              growth and success of organizations across industries, making a
              lasting impact on their operations and bottom line.
            </p>
            <p className="MVcategory">
              <span>
                <FcCheckmark /> To be the most creative organization in the
                world
              </span>
              <br />
              <span>
                <FcCheckmark /> To make people happy.
              </span>
              <br />
              <span>
                <FcCheckmark /> Capture and share the world's moments
              </span>
              <br />
              <span>
                <FcCheckmark /> Project your goals for the future.
              </span>
              <br />
            </p>
          </div>
          <div className="col-12 col-lg-4 col-md-3 mvw-sec mt-4">
            <h2>who we are?</h2>
            <p>
              We are Webalphatech Solutions, an innovative IT company based in
              Noida, India. Team of skilled professionals is dedicated to
              providing cutting-edge technology solutions to businesses across
              various industries. With a focus on delivering exceptional quality
              and value, we strive to help our clients achieve their goals and
              stay ahead of the competition.
            </p>
            <p className="MVcategory">
              <span>
                <FcCheckmark /> Passionate and dedicated team
              </span>
              <br />
              <span>
                <FcCheckmark /> Innovative technology solutions for businesses.
              </span>
              <br />
              <span>
                <FcCheckmark /> Staying ahead of the curve
              </span>
              <br />
              <span>
                <FcCheckmark /> Delivering excellence.
              </span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
