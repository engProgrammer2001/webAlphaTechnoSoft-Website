import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config/apiConfig";

const AddProject = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    image: null,
    title: "",
    highlights: "",
    shortDescription: "",
    longDescription: "",
  });

  // State to store the success message
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const data = new FormData();
    data.append("image", formData.image);
    data.append("title", formData.title);
    data.append("highlights", formData.highlights);
    data.append("shortDescription", formData.shortDescription);
    data.append("longDescription", formData.longDescription);

    try {
      // Make a POST request to the backend API
      const response = await axios.post(`${API_BASE_URL}project/create`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Display success message from backend
      setSuccessMessage(response.data.message);

      // Reset the form after successful submission
      setFormData({
        image: null,
        title: "",
        highlights: "",
        shortDescription: "",
        longDescription: "",
      });

    } catch (error) {
      // Handle errors
      console.error("Error adding project:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-6">
      <div className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-md">
        {/* Display Success Message */}
        {successMessage && (
          <div className="mb-4 p-4 text-green-800 bg-green-100 border border-green-300 rounded">
            {successMessage}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="image" className="block text-xl text-semibold font-medium text-gray-700">
                Project Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="title" className="block text-xl font-medium text-gray-700">
                Project Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="highlights" className="block text-xl font-medium text-gray-700">
                Project Highlights
              </label>
              <textarea
                id="highlights"
                name="highlights"
                value={formData.highlights}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label htmlFor="shortDescription" className="block text-xl font-medium text-gray-700">
                Short Description of Project 
              </label>
              <textarea
                id="shortDescription"
                name="shortDescription"
                value={formData.shortDescription}
                onChange={handleChange}
                rows="3"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
              ></textarea>
            </div>
            <div>
              <label htmlFor="longDescription" className="block text-xl font-medium text-gray-700">
                Long Description of Project
              </label>
              <textarea
                id="longDescription"
                name="longDescription"
                value={formData.longDescription}
                onChange={handleChange}
                rows="6"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-orange-400 focus:border-orange-400 sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-400 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProject;
