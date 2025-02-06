import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../../config/apiConfig";

const AllProject = () => {
  const [Data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = Data.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}project/allprojects`);
        console.log("response is : ", response.data);
        setData(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (indexOfLastProject < Data.length) setCurrentPage(currentPage + 1);
  };

  const handleDelete = async (projectId) => {
    try {
      // Send delete request
      await axios.delete(`${API_BASE_URL}project/delete/${projectId}`);

      // Update state to remove the deleted project
      setData(Data.filter(project => project._id !== projectId));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-2x text-center py-8 font-bold mx-4">All Projects</h1>
      
      <div className="w-full p-4 mb-4 bg-gray-800 text-white font-semibold text-center rounded-lg">
        Total Projects Added Till Now:{" "}
        <span className="text-orange-400 text-2xl">{Data.length}</span>
      </div>

      <div className="w-full flex flex-col lg:flex-row justify-center">
        <div className="w-full lg:w-[100%] rounded-lg flex flex-col mb-4 lg:mb-0">
          <div className="flex justify-center items-center">
            {error ? (
              <div className="text-red-500">Error: {error}</div>
            ) : (
              <div className="w-full bg-zinc-500 overflow-auto">
                <table className="w-full table-fixed divide-y divide-gray-200">
                  <thead className="bg-gray-500">
                    <tr>
                      <th className="px-4 py-3 text-center text-xs font-bold text-gray-50 uppercase tracking-wider">Image</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-gray-50 uppercase tracking-wider">Title</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-gray-50 uppercase tracking-wider">Short Description</th>
                      <th className="px-4 py-3 text-center text-xs font-bold text-gray-50 uppercase tracking-wider">Delete</th>
                    </tr>
                  </thead>
                  <tbody className="bg-zinc-700 text-white divide-y divide-gray-500">
                    {currentProjects.map((project) => (
                      <tr key={project._id}>
                        <td className="px-2 py-4 text-center text-sm font-bold">
                          <img
                            src={`${API_BASE_URL}${project.image}`}
                            alt={project.title}
                            className="w-[50px] h-[50px] object-cover rounded-full"
                          />
                        </td>
                        <td className="px-2 py-4 text-center text-sm font-bold">{project.title}</td>
                        <td className="px-2 py-4 text-center text-sm font-bold break-words">{project.shortDescription.slice(0, 40)}</td>
                        <td className="px-2 py-4 text-center text-sm font-bold">
                          <button
                            onClick={() => handleDelete(project._id)}
                            className="text-white bg-orange-400 hover:bg-orange-500 px-4 py-1 border rounded-full"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between px-4 py-2 bg-gray-700 text-white rounded">
            <Link to="#" onClick={handlePrevPage} className={`px-4 py-2 mx-1 bg-zinc-500 text-white rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>Previous</Link>
            <Link to="#" onClick={handleNextPage} className={`px-4 py-2 mx-1 bg-zinc-500 text-white rounded ${indexOfLastProject >= Data.length ? "opacity-50 cursor-not-allowed" : ""}`}>Next</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProject;
