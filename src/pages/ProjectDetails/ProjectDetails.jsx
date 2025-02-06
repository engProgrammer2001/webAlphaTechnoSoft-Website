import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get route parameters
import axios from "axios"; // Import axios
import { API_BASE_URL } from "../../config/apiConfig";

const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from the route
  const [project, setProject] = useState(null); // State to store project details

  // Fetch project details by ID using axios
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}project/${id}`)
      .then((response) => setProject(response.data)) // Set project data from API response
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  }, [id]);

  if (!project) {
    return <div className="text-center p-4">Loading...</div>; // Show loading state with centered text
  }
  return (
    <div className="container mx-auto p-4 lg:px-8">
      <h1 className="text-[#3b3663] text-2xl text-center  md:text-3xl lg:text-5xl font-semibold my-8">
        {project.title}
      </h1>

      <h2 className="text-[#3b3663] text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
        Overviw About Project
      </h2>
      <p className="text-gray-700 mb-6 ">{project.shortDescription}</p>
      <div className="flex justify-center mb-6">
        <img
          src={`${API_BASE_URL}${project.image}`}
          alt={project.title}
          className="w-full max-w-4xl h-auto"
        />
      </div>

      <h2 className="text-[#3b3663] text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
        Highlights of Porjects
      </h2>
      <p className="text-gray-700 mb-6">{project.highlights}</p>
      <h2 className="text-[#3b3663] text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
      Description About Project
      </h2>
      <p className="text-gray-700">{project.longDescription}</p>
    </div>
  );
};

export default ProjectDetails;
