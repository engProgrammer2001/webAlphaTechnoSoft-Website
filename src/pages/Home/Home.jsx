import { Link } from "react-router-dom";
import img1 from "../../assets/images/corner-img.png";
import img2 from "../../assets/HomeFeture_Images/service_img1.png";
import img3 from "../../assets/HomeFeture_Images/service_img2.png";
import img4 from "../../assets/HomeFeture_Images/service_img3.png";
import img5 from "../../assets/HomeFeture_Images/service_img4.png";
import img6 from "../../assets/images/Expend_Home_Image.png";
import img7 from "../../assets/images/home-faq.png";
// import img7 from "../../assets/images/faq-img1.png";
import img8 from "../../assets/images/side-image.png";
import img9 from "../../assets/images/left-side-image.png";
import "./Home.css";
import { FcRight } from "react-icons/fc";
import questionData from "../Data/questionData";
import { useEffect, useState } from "react";
import BrandImageData from "../Data/BrandImageData";
import { FcCellPhone } from "react-icons/fc";
import { Circle } from "rc-progress";
import { Typewriter } from "react-simple-typewriter";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  let [showAns, setShowAns] = useState(questionData[0].id);
  const [Conunter, setCounter] = useState(false);


  return (
    <>
      {/* Main Header section  */}
      <section className="header-bg-parent">
        <div className="header-col1" data-aos="fade-in" data-aos-easing="ease-in-out">
          <h5>WELCOME</h5>
          <h2>Digital Products</h2>
          <h2 className="typewriterheading">
            <Typewriter
              words={[
                "Degital Marketing",
                "Web Developmet",
                "Graphic Design",
                "Web Design",
              ]}
              typeSpeed={100}
              deleteSpeed={150}
              delaySpeed={1000}
              loop
            />
          </h2>
          {/* <h2 className="typewrite" data-period="1000" data-type='[ "for Business", "to sell online", "for your ideas"]'></h2> */}
          <div className="div">
            <p>
              Webalphatech is a dynamic software development company focused on
              empowering businesses with innovative technology solutions. With a
              collaborative approach, we work closely with our clients to
              understand their goals.
            </p>
          </div>
          <button className="common-btn" type="button">
            <Link
              to={"/contact"}
              style={{ color: "white", textDecoration: "none" }}
            >
              CONTACT TODAY
            </Link>
          </button>
        </div>
        {/* <!--header-col1--> */}
        <div className="header-col2"></div>
        {/* <!--header-col2--> */}
        <div className="clear"></div>
        {/* <!--clear--> */}
        <img
          className="hedaer-bg-par-img img-responsive"
          src={img1}
          alt="corner"
        />
      </section>

      {/* Feture section here  */}
      <section id="feature-sec">
        <div className="text-center">
          <h5 className="common-h5">CARE FEATURES</h5>
          <h2 className="common-h2">Provide Awesome Service With Our Tools</h2>
        </div>
      </section>

      <section className="faeture-col-par">
        <div className="container">
          <div
            className="feature-col" data-aos="flip-left" data-aos-delay="400" data-aos-easing="ease-in-out" >
            <h3>Discover, Explore the Product</h3>
            <img src={img2} className="img-responsive" alt="service" />
            <h4>
              It includes developing a profound understanding of customers, then
              using that knowledge to build vital products for customers.
            </h4>
            <button className="commonBtn">
              <Link to={"/services"}>
                Explore More <FcRight />
              </Link>
            </button>
            {/* <!--</div>feature-col--> */}
          </div>
          {/* <!--feature-col--> */}
          <div
            className="feature-col" data-aos="flip-right" data-aos-delay="400" data-aos-easing="ease-in-out"
          >
            <h3>Discover, Product Under Standing</h3>
            <img src={img3} className="img-responsive" alt="service" />
            <h4>
              Product knowledge is a deep understanding of products or services
              offered by a company and special offers.
            </h4>
            <button className="commonBtn">
              <Link to={"/"}>
                Explore More <FcRight />
              </Link>
            </button>
            {/* <!--</div>feature-col--> */}
          </div>
          {/* <!--feature-col--> */}
          <div
            className="feature-col" data-aos="flip-left" data-aos-delay="400" data-aos-easing="ease-in-out"
          >
            <h3>Discover, Marketing About Products</h3>
            <img src={img4} className="img-responsive" alt="service" />
            <h4>
              Discover groundbreaking features and let our marketing unveil the
              value, transforming interest into action
            </h4>
            <button className="commonBtn">
              <Link to={"/services"}>
                Explore More <FcRight />
              </Link>
            </button>
            {/* <!--</div>feature-col--> */}
          </div>
          {/* // <!--feature-col--> */}
          <div
            className="feature-col" data-aos="flip-right" data-aos-delay="400" data-aos-easing="ease-in-out"
          >
            <h3>Discover, Explore About SEO Optimization</h3>
            <img src={img5} className="img-responsive" alt="service" />
            <h4>
              SEO boosts online visibility by optimizing website content &amp;
              structure, enhancing organic search engine rankings.
            </h4>
            <button className="commonBtn">
              <Link to={"/socialmediamanagment"}>
                Explore More <FcRight />
              </Link>
            </button>
            {/* <!--</div>feature-col--> */}
          </div>
          {/* // <!--feature-col--> */}
          <div className="clear"></div>
        </div>
      </section>

      {/* why choose us  */}
      <section id="why-choose-us">
        <div className="container">
          <div className="why-choose-col"data-aos="fade-in" data-aos-delay="400" data-aos-easing="ease-in-out" >
            <h5 className="common-h5">WHY CHOOSE US</h5>
            <h2 className="common-h2">Boosts Your Website Traffic!</h2>
            <p>
              We are passionate about our work. Our designers stay ahead of the
              curve to provide engaging and user-friendly website designs to
              make your business stand out. Our developers are committed to
              maintaining the highest web standards so that your site will
              withstand the test of time. We care about your business, which is
              why we work with you.
            </p>
            <button className="common-btn" type="button">
              <Link
                to={"/about"}
                style={{ color: "white", textDecoration: "none" }}
              >
                DISCOVER MORE
              </Link>
            </button>
          </div>
          <div className="count-col">
            <div className="stat">
              <div className="count-sub-col">
                <div className="milestone-counter">
                  <span className="stat-count highlight">
                    <ScrollTrigger
                      onEnter={() => setCounter(true)}
                      onExit={() => setCounter(false)}
                    >
                      {Conunter && (
                        <CountUp start={0} end={153} duration={2} delay={0} />
                      )}
                    </ScrollTrigger>
                  </span>
                  <div className="milestone-details">Happy Customers</div>
                </div>
                {/* <!--milestone-counter--> */}
              </div>
              {/* <!--count-sub-col--> */}
              <div className="count-sub-col">
                <div className="milestone-counter">
                  <span className="stat-count highlight">
                    <ScrollTrigger
                      onEnter={() => setCounter(true)}
                      onExit={() => setCounter(false)}
                    >
                      {Conunter && (
                        <CountUp start={0} end={193} duration={2} delay={0} />
                      )}
                    </ScrollTrigger>
                  </span>
                  <div className="milestone-details">Completed Projects</div>
                </div>
                {/* <!--milestone-counter--> */}
              </div>
              {/* <!--count-sub-col--> */}
              <div className="count-sub-col">
                <div className="milestone-counter">
                  <span className="stat-count highlight">
                    <ScrollTrigger
                      onEnter={() => setCounter(true)}
                      onExit={() => setCounter(false)}
                    >
                      {Conunter && (
                        <CountUp start={0} end={153} duration={2} delay={0} />
                      )}
                    </ScrollTrigger>
                  </span>
                  <div className="milestone-details">Awards Win</div>
                </div>
                {/* <!--milestone-counter--> */}
              </div>
              {/* <!--count-sub-col--> */}
            </div>
            {/* <!--stat--> */}
            <div className="stat-info-par">
              <div className="stat-info-sub-par">
                <div className="stat-info-div">
                  <p>
                    Men and women, committed to better protect you around the
                    world.
                  </p>
                </div>
                {/* <!--stat-info-div--> */}
              </div>
              {/* <!--stat-info-sub-par--> */}
              <div className="stat-info-sub-par">
                <div className="stat-info-div">
                  <p>
                    Innovative project achieved goals, exceeding expectations
                    within deadline.
                  </p>
                </div>
                {/* <!--stat-info-div--> */}
              </div>
              {/* <!--stat-info-sub-par--> */}
              <div className="stat-info-sub-par">
                <div className="stat-info-div">
                  <p>
                    Decade of excellence celebrated with ten prestigious
                    industry awards triumphs.
                  </p>
                </div>
                {/* <!--stat-info-div--> */}
              </div>
              {/* <!--stat-info-sub-par--> */}
            </div>
            {/* <!--stat-info-par--> */}
          </div>
          {/* <!--count-col--> */}
          <div className="clear"></div>
        </div>
        {/* <!--container--> */}
      </section>

      {/* expand section  */}
      <section id="expand">
        <div className="text-center" data-aos="fade-down">
          <h5 className="common-h5">EXPERINCE</h5>
          <h2 className="common-h2">Pay for Qualified Traffic</h2>
        </div>
        {/* <!--text-center--> */}
        <div className="expand-img-col" data-aos="flip-right" data-aos-delay="400" data-aos-easing="ease-in-out">
          <div className="expand-img">
            <img src={img6} alt="expand" className="img-responsive" />
            <div className="expand-img-info">
              {/* <i className="fa fa-mobile-phone"></i> */}
              <FcCellPhone className="cellphone" />
              <h2>
                Expand Our <br />
                Digital Presence
              </h2>
              <p>
                Your app is your tool for better communicatio with your
                followers.
              </p>
              <button className="commonBtn">
                <Link to={"/"}>Explore More</Link>
                <FcRight className="getintouchArrow" />
              </button>
            </div>
          </div>
        </div>
        {/* <!--expand-img-col--> */}

        <div className="expand-img-info-col">
          <div className="progress-bar-col">
            <div className="col-sm-4">
              <div className="progressbar">
                <Circle
                  percent={92}
                  strokeWidth={10}
                  style={{ width: "90px" }}
                  strokeColor="#f47a14"
                  trailWidth={8}
                  className="circle-progress-bar"
                />
                <span className="value-percentage">92%</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="progressbar">
                <Circle
                  percent={82}
                  strokeWidth={10}
                  style={{ width: "90px" }}
                  strokeColor="#f47a14"
                  trailWidth={8}
                  className="circle-progress-bar"
                />
                <span className="value-percentage">82%</span>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="progressbar">
                <Circle
                  percent={100}
                  strokeWidth={10}
                  style={{ width: "90px" }}
                  className="circle-progress-bar"
                  strokeColor="#f47a14"
                  trailWidth={8}
                />
                <span className="value-percentage">99%</span>
              </div>
            </div>
          </div>
          {/* <!--progress-bar-col--> */}
          <div className="progress-info-col">
            <div className="progress-info">
              <h3>Creative Approach</h3>
              <p>
                Ea pro tibique comprehensam, sed ea verear numquam molestie. Nam
                te omittam comprehensam.
              </p>
            </div>
            {/* <!--progress-info--> */}
            <div className="progress-info">
              <h3>Guaranted Success</h3>
              <p>
                Inspirational quotes about success can be helpful for those
                looking for motivation in the workplace.
              </p>
            </div>
            {/* <!--progress-info--> */}
            <div className="progress-info">
              <h3>SEO Optimization</h3>
              <p>
                Our global SEO services are designed to help businesses rank
                higher worldwide, generating more traffic and leads from around
                the globe.
              </p>
            </div>
            {/* <!--progress-info--> */}
          </div>
          {/* <!--progress-info-col--> */}
        </div>
        {/* <!--expand-img-info-col--> */}
        <div className="clear"></div>
        {/* <!--clear--> */}
      </section>

      {/* faq section  */}
      <section id="faq-par">
        <div class="container">
          <div class="faq-que-col" data-aos="fade-down" data-aos-easing="ease-in-out">
            <div className="text-center">
              <h5 class="common-h5">DOUBT'S</h5>
              <h2 class="common-h2 ExtraMargin">Asked Your Doubt With Us</h2>
            </div>
            {questionData.map((value, index) => {
              return (
                <div id="faq-accordion">
                  <h3 onClick={() => setShowAns(value.id)}>{value.Question}</h3>
                  <p className={showAns === value.id ? "activeAns" : ""}>
                    {value.Ans}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <!--faq-que-col--> */}

          <div className="expand-img-col" data-aos="flip-left">
            <div className="expand-img">
              <img src={img7} alt="expand" className="img-responsive" />
              <div className="expand-img-info">
                {/* <i className="fa fa-mobile-phone"></i> */}
                <FcCellPhone className="cellphone" />
                <h2>
                  Expand Your <br />
                  Questions With Us.
                </h2>
                <p>
                  Your app is your tool for better communicatio with your
                  followers.
                </p>
                <button className="commonBtn">
                  <Link to={"/"}>Get In Touch</Link>
                  <FcRight className="getintouchArrow" />
                </button>
              </div>
            </div>
          </div>
          {/* <!--faq-bg-col--> */}
          <div class="clear"></div>
        </div>
        {/* <!--container--> */}
      </section>

      {/* brands section start */}
      <section id="brand-sec">
        <div className="text-center brand-para">
          <h5 className="common-h5">How IT Works</h5>
          <h2 className="common-h2">Our Technologies</h2>
          <p>
            At Velocious Solutions, we harness the power of cutting-edge
            technologies to deliver exceptional results for our clients. From
            artificial intelligence and machine learning to blockchain and the
            Internet of Things (IoT), we stay at the forefront of emerging
            technologies to help businesses stay competitive and achieve their
            goals.
          </p>
          <img src={img8} alt="ashok" />
        </div>
        <div className="container brand-sec brand-para2">
          <div className="row text-center">
            {BrandImageData.map((value, index) => {
              return (
                <div className="col col-md-2 brand-img" data-aos="flip-left" data-aos-easing="ease-in-out">
                  <img src={value.image} alt="brand1" />
                </div>
              );
            })}
          </div>
          <img
            src={img9}
            style={{
              position: "absolute",
              top: "690px",
              left: "0",
              zIndex: "-1",
            }}
            alt="leftSideImage"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
