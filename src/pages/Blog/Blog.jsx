import React from "react";
// import "./Blog.css";
import img1 from "../../assets/blog-image/blog-img6.jpg";
import img2 from "../../assets/blog-image/blog-img7.jpg";
import img3 from "../../assets/blog-image/blog-img5.jpg";
import img4 from "../../assets/blog-image/blog-image.jpg";
import Sidepost from "../Sidepost/Sidepost";
import ViralBlog from "./ViralBlog";
import Sideblogdata from "../Data/Sideblogdata";

const Blog = () => {
  return (
    <>
      <div className="container-fluid mx-0 px-0">
        <div
          className="p-4 p-md-5 mb-4 text-white rounded"
          style={{ backgroundColor: "#ccc" }}
        >
          <div className="col-md-6 px-0">
            <h1
              className="display-4 fst-italic"
              style={{ fontWeight: 600, color: "#3b3663" }}
            >
              Our Creative Blog's for the Explore your Day
            </h1>
            <p
              className="lead my-3"
              style={{ fontWeight: 400, color: "#3b3663" }}
            >
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what’s most interesting in this
              post’s contents.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="row mb-2">
          <div class="col-md-6" data-aos="flip-left" data-aos-easing="ease-in-out">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static long-card">
                <strong class="d-inline-block mb-2 text-primary">Marketing</strong>
                <h3 class="mb-0">Degital Marketing</h3>
                <div class="mb-1 text-muted">12 Jan 2024</div>
                <p class="card-text mb-auto">
                  We offer digital marketing services to ensure we “put you in
                  the shop window” so that potential customers.
                </p>
                <a href="/services" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src={img1} width={250} height={250} alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6" data-aos="flip-left" data-aos-easing="ease-in-out">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static long-card">
                <strong class="d-inline-block mb-2 text-success">Dev</strong>
                <h3 class="mb-0">Web Development</h3>
                <div class="mb-1 text-muted">19 Dec 2023</div>
                <p class="mb-auto">
                  They expect to be able to work and access information from a
                  company when they need it from wherever.
                </p>
                <a href="/webdevelopment" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src={img2} width={250} height={250} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* second row start Here  */}
        <div class="row mb-2">
          <div class="col-md-6" data-aos="flip-left" data-aos-easing="ease-in-out">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static long-card">
                <strong class="d-inline-block mb-2 text-primary">Desing</strong>
                <h3 class="mb-0">Graphic Desing</h3>
                <div class="mb-1 text-muted">12 Nov 2023</div>
                <p class="card-text mb-auto">
                  A graphic designer creates visuals for various projects, from
                  websites to print ads and more. In this article,
                </p>
                <a href="/graphicdesign" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src={img4} width={250} height={250} alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6" data-aos="flip-left" data-aos-easing="ease-in-out">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static long-card">
                <strong class="d-inline-block mb-2 text-success">dev</strong>
                <h3 class="mb-0">App Development</h3>
                <div class="mb-1 text-muted">03 March 2024</div>
                <p class="mb-auto">
                  They expect to be able to work and access information from a
                  company when they need it from wherever.
                </p>
                <a href="/mobileappdevelopment" class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src={img3} width={250} height={250} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container MainBlog">
          <div className="row text-center heading mt-5 mb-5">
            <p className="common-p">Our Blog.</p>
            <h1 className="common-h2 ">Some Viral Blogs </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-8 col-md-12" data-aos="fade-in" data-aos-easing="ease-in-out">
            <ViralBlog blog={Sideblogdata} />
          </div>
          <div className="col-12 col-lg-4 col-md-12">
            <Sidepost />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
