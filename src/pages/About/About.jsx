import React from "react";
import img1 from "../../assets/About-images/About-main.png";
import {
  FcCalendar,
  FcBullish,
  FcButtingIn,
  FcMindMap,
  FcWorkflow,
  FcCheckmark,
} from "react-icons/fc";
// import css here
import "./About.css";

const About = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="text-center mt-20 mb-20">
          <p
            className="text-lg font-medium text-gray-600"
            style={{ color: "#f47a14" }}
          >
            Know better about me.
          </p>
          <h1 className="text-4xl font-bold mt-2" style={{ color: "#3b3663" }}>
            ABOUT US
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 about-sec">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 md:w-full">
            <img src={img1} alt="" className="w-full h-auto" />
          </div>
          <div className="w-full lg:w-1/2 md:w-full pt-10">
            <h6
              className="text-lg font-medium text-gray-600"
              style={{ color: "#f47a14" }}
            >
              Know about Me.
            </h6>
            <h1
              className="text-4xl font-bold mt-2 leading-tight"
              style={{ color: "#3b3663" }}
            >
              Growth Through Technology: Empowering Your Business with
              Innovative IT Solutions
            </h1>
            <p className="mt-10 text-xl font-medium text-gray-500">
              We are a leading IT services provider that specializes in helping
              businesses leverage technology to achieve their goals. With a team
              of experienced professionals and a focus on innovation, we offer
              customized solutions that address the unique challenges and
              opportunities of our clients. Our mission is to empower
              organizations to thrive in a digital world by delivering
              exceptional service, quality, and value.
            </p>

            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-1/2 md:w-1/2 p-4">
                <div className="card bg-white shadow-md rounded-lg overflow-hidden text-center p-4 flex flex-col items-center justify-center h-full">
                  <span className="text-5xl flex items-center justify-center">
                    <FcCalendar />
                  </span>
                  <h2
                    className="text-2xl font-semibold mt-2"
                    style={{ color: "#3b3663" }}
                  >
                    3+
                  </h2>
                  <p className="text-lg font-semibold text-gray-800">
                    Experience
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 md:w-1/2 p-4">
                <div className="card bg-white shadow-md rounded-lg overflow-hidden text-center p-4 flex flex-col items-center justify-center h-full">
                  <span className="text-5xl flex items-center justify-center">
                    <FcBullish />
                  </span>
                  <h2
                    className="text-2xl font-semibold mt-2"
                    style={{ color: "#3b3663" }}
                  >
                    113+
                  </h2>
                  <p className="text-lg font-semibold text-gray-800">
                    Finished Projects
                  </p>
                </div>
              </div>
            </div>

            <div className=" w-full flex flex-wrap justify-center">
              <div className="w-full lg:w-1/2 md:w-1/2 p-4">
                <div className="card bg-white shadow-md rounded-lg overflow-hidden text-center p-4 flex flex-col items-center justify-center h-full">
                  <span className="text-5xl flex items-center justify-center">
                    <FcButtingIn />
                  </span>
                  <h2
                    className="text-2xl font-semibold mt-2"
                    style={{ color: "#3b3663" }}
                  >
                    512+
                  </h2>
                  <p className="text-lg font-semibold text-gray-800">
                    Customers
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 md:w-1/2 p-4">
                <div className="card bg-white shadow-md rounded-lg overflow-hidden text-center p-4 flex flex-col items-center justify-center h-full">
                  <span className="text-5xl flex items-center justify-center">
                    <FcMindMap />
                  </span>
                  <h2
                    className="text-2xl font-semibold mt-2"
                    style={{ color: "#3b3663" }}
                  >
                    113+
                  </h2>
                  <p className="text-lg font-semibold text-gray-800">
                    Technology
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-10 text-xl font-medium text-gray-500">
              From software development to cloud computing, our cutting-edge
              services help organizations stay ahead of the curve in a rapidly
              evolving digital landscape.
            </p>
          </div>
        </div>
      </div>

      <hr className="my-10" />

      {/* this is history code */}
      <div className="journey-container relative w-full mx-auto px-4">
        <div className="text-center mt-20 mb-20">
          <p
            className="text-lg font-medium flex items-center justify-center"
            style={{ color: "#f47a14" }}
          >
            <FcWorkflow className="mr-2" /> Our Journey
          </p>
          <h1 className="text-4xl font-bold mt-2" style={{ color: "#3b3663" }}>
            History Began in 2021
          </h1>
        </div>
        {/* Vertical Line */}
        <div className="hidden lg:block absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-600 ml-6 top-[8%]"></div>

        {/* Journey Content */}
        <div className="relative">
          <div className="journey-content w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6 m-2 lg:absolute lg:left-0 lg:top-0 relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2" style={{ color: "#3b3663" }}>
              Founded
            </h3>
            <h6 className="text-lg font-medium  mt-2" style={{ color: "#f47a14" }}>2021</h6>
            <p className="text-md font-medium text-gray-500 mt-2">
            At Web Alpha Technosoft, we specialize in delivering cutting-edge digital marketing solutions designed to elevate your brand's online presence. Established in 2021, our team has consistently focused on leveraging innovative strategies to help businesses grow and thrive in the digital landscape. From SEO and social media management to content marketing and analytics, we are dedicated to providing tailored solutions that drive results and maximize ROI. Trust us to transform your digital footprint and achieve your marketing goals with precision and excellence.
            </p>
          </div>

          <div className="journey-content w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6 m-2 lg:absolute lg:left-[53%] lg:top-[20%] relative transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <h3 className="text-xl font-bold mb-2" style={{ color: "#3b3663" }}>
              Goals with new Team
            </h3>
            <h6 className="text-lg font-medium  mt-2" style={{ color: "#f47a14" }}>2022</h6>
            <p className="text-md font-medium text-gray-500 mt-2">
            With our newly expanded team, we are setting ambitious goals to redefine success in digital marketing. Our focus is on harnessing diverse expertise and fresh perspectives to deliver groundbreaking strategies and exceptional results. By fostering a collaborative environment and leveraging cutting-edge tools, we aim to innovate, adapt, and excel in meeting the evolving needs of our clients. Our goal is to be at the forefront of digital marketing, providing unparalleled service and driving significant growth for every brand we partner with.
            </p>
            
          </div>

         
          <div className="journey-content w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6 m-2 lg:absolute lg:left-0 lg:top-[30%]">
            <h3 className="text-xl font-bold mb-2" style={{ color: "#3b3663" }}>
              A Long Leap to get Success
            </h3>
            <h6 className="text-lg font-medium mt-2" style={{ color: "#f47a14" }}>2023</h6>
            <p className="text-md font-medium text-gray-500 mt-2">
            Achieving success in digital marketing requires a bold vision and relentless effort. At Web Alpha Technosoft, we understand that it’s a journey of continuous learning and adaptation. Our long leap towards success involves embracing new technologies, exploring innovative strategies, and staying ahead of industry trends. By combining our expertise with a forward-thinking approach, we are committed to overcoming challenges and seizing opportunities. This dedication ensures that we not only meet but exceed the expectations of our clients, paving the way for sustained growth and remarkable achievements.
            </p>
          </div>

          <div className="journey-content w-full lg:w-1/2 bg-white shadow-md rounded-lg p-6 m-2 lg:absolute lg:left-[53%] lg:top-[40%]">
            <h3 className="text-xl font-bold mb-2" style={{ color: "#3b3663" }}>
              A New Milestone Achieved
            </h3>
            <h6 className="text-lg font-medium  mt-2" style={{ color: "#f47a14" }}>2024</h6>
            <p className="text-md font-medium text-gray-500 mt-2">
            Reaching a new milestone is a testament to our unwavering commitment and hard work. At Web Alpha Technosoft, we are proud to celebrate our recent achievements as significant markers of progress. This milestone reflects our dedication to excellence, the strength of our team, and the trust our clients have placed in us. It fuels our passion for innovation and motivates us to set new benchmarks. As we move forward, we remain focused on pushing boundaries, achieving greater heights, and continuing to deliver outstanding results for our clients.
            </p>
          </div>
        </div>
      </div>

      <hr className="my-10" />

      <div className="text-center mt-20 mb-20">
        <h1 className="text-4xl font-bold mt-2" style={{ color: "#3b3663" }}>
          Mission, Vision & Who We Are
        </h1>
      </div>
      <div className="w-full flex justify-center items-center mx-auto p-4">
        <div className="w-full flex flex-wrap justify-center">
          {/* Our Mission */}
          <div className="w-full lg:w-1/3 md:w-1/2 bg-white shadow-lg rounded-lg p-6 lg:p-8 mb-4 m-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-400">
            <div className="flex items-center mb-5">
              <FcCheckmark className="mr-2 text-2xl" />
              <h2 className="text-2xl font-bold" style={{ color: "#3b3663" }}>
                Our Mission
              </h2>
            </div>
            <p className="text-md font-medium text-gray-500">
              Our mission is to provide exceptional value to our clients by
              delivering innovative solutions that meet their needs and exceed
              their expectations. We strive to achieve this by leveraging the
              latest technologies, adopting best practices, and fostering a
              culture of continuous improvement and excellence.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 text-md">
              <li>🤝 Collaboration</li>
              <li>🚀 Innovation</li>
              <li>🏆 Excellence</li>
              <li>🤝 Partnership</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 bg-white shadow-lg rounded-lg p-6 lg:p-8 mb-4 m-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-400">
            <div className="flex items-center mb-5">
              <FcCheckmark className="mr-2 text-2xl" />
              <h2 className="text-2xl font-bold" style={{ color: "#3b3663" }}>
                Our Vision
              </h2>
            </div>

            <p className="text-md font-medium text-gray-500">
              To be globally recognized as the go-to provider of transformative
              software solutions, driving digital innovation and empowering
              businesses to thrive in the digital age. We envision a future
              where our expertise and innovative solutions contribute to the
              growth and success of organizations across industries, making a
              lasting impact on their operations and bottom line.
            </p>

            <ul className="list-disc list-inside mt-4 text-gray-600 text-md">
              <li>🌍 To be the most creative organization in the world</li>
              <li>😊 To make people happy.</li>
              <li>📸 Capture and share the world's moments</li>
              <li>🎯 Project your goals for the future.</li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 bg-white shadow-lg rounded-lg p-6 lg:p-8 mb-4 m-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-gray-400">
            <div className="flex items-center mb-5">
              <h2 className="text-2xl font-bold" style={{ color: "#3b3663" }}>
                Who We Are
              </h2>
              <FcCheckmark className="ml-2 text-2xl" />
            </div>
            <p className="text-md font-medium text-gray-500">
              We are Webalphatech Solutions, an innovative IT company based in
              Noida, India. Our team of skilled professionals is dedicated to
              providing cutting-edge technology solutions to businesses across
              various industries. With a focus on delivering exceptional quality
              and value, we strive to help our clients achieve their goals and
              stay ahead of the competition.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600 text-md">
              <li>💼 Passionate and dedicated team</li>
              <li>💻 Innovative technology solutions for businesses.</li>
              <li>📈 Staying ahead of the curve</li>
              <li>🌟 Delivering excellence.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
