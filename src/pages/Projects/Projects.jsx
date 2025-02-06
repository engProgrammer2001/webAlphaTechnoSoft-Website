import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import img1 from "../../assets/blog-image/blog-img.png";
import { API_BASE_URL } from "../../config/apiConfig";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  // Fetch project details from the API
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}project/allprojects`);
        setProjects(response.data); 
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, []);

  return (
    <>
      <div
        className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <img
          src={img1}
          alt="Project Banner"
          className="absolute right-0 opacity-40 w-1/2"
          style={{ height: '50vh' }} // Added height to 50vh
        />
        <h1 className="absolute top-[130px] left-[100px] text-[#3b3663] text-4xl">
          Our Projects
        </h1>
        <a
          href="/"
          className="absolute top-[200px] left-[190px] text-orange-400 font-medium"
        >
          Home
        </a>
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <div
              className="flex flex-col bg-white shadow-lg hover:scale-105 transition-transform duration-300 p-4"
              key={project._id}
            >
              <img
                src={`${API_BASE_URL}${project.image}`}
                alt={project.title}
                className="w-full"
                style={{ height: '50vh', objectFit: 'cover' }} // Set height to 50vh and maintain aspect ratio
              />
              <h2 className="mt-2 text-[#3b3663] font-semibold">{project.title}</h2>
              <p className="mt-1">{project.shortDescription}</p>
              <Link
                to={`/project/${project._id}`}
                className="mt-4 block w-full text-center bg-orange-400 text-white py-2 rounded"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
