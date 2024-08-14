import React from 'react'
import img1 from '../../assets/Services-images/web-design-img2.jpg'

const WebDevelopment = () => {
  return (
<>
      <div className="container-fluid webDevelopment-main-sec">
        <h1>Web Development</h1>
        <a href="/">Go To Back</a>
      </div>
      <div className="container content">
        <h1>
        Our Agile experts can create bespoke Websites, platforms and products to meet the requirements of your business or new venture.
        </h1>
        <div className="row">
          <div className="col-12 col-lg-6 paraGraph">
            <p>
              <span style={{fontSize:'40px'}}>P</span>eople’s working hours are no longer 9 – 5, Monday to Friday. They expect to be able to work and access information from a company when they need it from wherever they are; a web application offers companies a flexible, cost-effective way to meet this need. From a streamlined version of an internal system to increasing the efficiency of remote or travelling employees, to an interactive tool to help build brand loyalty with customers; a web application can deliver. Other web application examples include:<br />
              <br />
              <span style={{fontSize:'25px', color:'#3b3663'}}>*</span> An internal web application to help manage projects & finances; <br />
              <span style={{fontSize:'25px', color:'#3b3663'}}>*</span> A web application that you can re-sell to a customer – Software-as-a-Service;<br />
              <span style={{fontSize:'25px', color:'#3b3663'}}>*</span> An application to revolutionise customer service by providing a portal for your customers to access<br />
            </p> <br />
            <h4>How to Grow with Modern Technology with Degital Word?</h4>
            <hr />
            <p>
            We discover everything there is to learn about your business, what a new app needs to deliver and to whom. If you’d like us to, we’ll also suggest a few of our own ideas – we love coming up with fresh solutions that really make the technology work hard.
            </p>
            <br />
            <h4>
            Responsive web applications
            </h4>
            <hr />
            <p>
            All the web applications we build are responsive. This means they look great and work perfectly on any screen of any size; desktop, table or smartphone. We do this by adapting menus, controls and other visuals to fit the device based on the current screen width and height, ensuring the user always gets the best possible experience regardless of what device they’re using.
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
  )
}

export default WebDevelopment;