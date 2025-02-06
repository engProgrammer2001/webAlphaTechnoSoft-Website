import React from 'react';
import img1 from "../../assets/Services-images/SEO.gif"; // Import the same image


const SeoServices = () => {
  return (
    <>
      <div className="container-fluid bg-gray-800 text-white py-8 seo-services-main-sec">
        <a href="/" className="text-orange-400 font-semibold underline mt-4 inline-block">Go To Back</a>
      </div>
      <div className="container content mt-8">
        <h1 className="text-3xl font-semibold mb-6 text-center">
          Optimize and enhance your online visibility with <br /> Web Alpha Techno Soft's SEO Services.
        </h1>
        <div className="flex flex-col lg:flex-row paraGraph items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 px-4">
            <p className="text-base md:text-lg lg:text-xl">
              <span className="text-4xl">E</span>levate your website's ranking with our comprehensive SEO strategies. Whether through on-page optimization, off-page tactics, or technical SEO – we ensure your business ranks higher in search engine results.
              <br /> <br />
              Have you explored the benefits of SEO (Search Engine Optimization) for your business? SEO is crucial for improving your online presence, and our expert team will help you achieve higher search engine rankings. SEO is a long-term investment that can significantly boost your website traffic and visibility. We tailor our strategies to fit your marketing goals and budget, ensuring maximum results.
              <br />
              <br />
              Effective SEO will give your business a competitive edge by enhancing your organic search visibility. This enables you to attract a broader audience actively searching for your products or services.
              <br />
              <br />
              <span className="text-2xl text-blue-900">*</span>{" "}
              Implement advanced SEO techniques that blend the best practices for both mobile and web applications, ensuring a seamless user experience. Consult with our experts to learn more about:
              <br />
            </p>
            <br />
            <h4 className="text-xl font-bold mb-4 text-center lg:text-left">BENEFIT FROM A STRATEGIC SEO APPROACH.</h4>
            <hr className="my-4" />
            <p className="text-base md:text-lg lg:text-xl">
              <span className="text-2xl text-blue-900">*</span>
              Our team utilizes cutting-edge SEO tools to help your business achieve higher search engine rankings throughout the year. <br />
              <span className="text-2xl text-blue-900">*</span>
              We optimize your website more efficiently and effectively. <br />
              <span className="text-2xl text-blue-900">*</span>
              We create a tailored SEO strategy to meet your business needs. <br />
              <span className="text-2xl text-blue-900">*</span>
              Our experts monitor analytics and stay updated with the latest SEO trends to maximize your online visibility. <br />
              <span className="text-2xl text-blue-900">*</span>
              We help you achieve your SEO goals through comprehensive keyword research and analysis.
              <br />
            </p>
            <br />
            <hr className="my-4" />
            <button>
              <a href="/contact">Let's Connect With Us </a>
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <img src={img1} className="w-full lg:w-auto max-w-xs lg:max-w-full" alt="SEO Services" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoServices;
