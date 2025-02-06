import React, { useEffect, useState } from "react";
import axios from "axios";
import img1 from "../../image/ganeshji.jpg";
import { API_BASE_URL } from "../../../config/apiConfig";

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);
  const [completedProjects, setCompletedProjects] = useState(0);

  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch total users
        const usersResponse = await axios.get(`${API_BASE_URL}user/allusers`, {
          headers,
        });
        // console.log("user response is : ", usersResponse.data.users.length);
        setTotalUsers(usersResponse.data.users.length); 
        const projectsResponse = await axios.get(
          `${API_BASE_URL}project/allprojects`,
          { headers }
        );
        console.log("response is : ", projectsResponse.data);
        setCompletedProjects(projectsResponse.data.length); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className="h-[100%] bg-gray-900 text-white rounded-lg">
      <div className="container mx-auto p-6 mt-8 lg:mt-0">
        <h1 className="text-4xl font-bold text-center text-orange-400 mb-8">
          Welcome to the Admin Dashboard 🎉
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Grid Row */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-700 transition duration-300">
            <img
              src={img1}
              alt="Dashboard"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl font-semibold flex items-center justify-center mb-2">
                Total Users
                <span
                  role="img"
                  aria-label="user"
                  className="ml-2 text-blue-400"
                >
                  👥
                </span>
              </h2>
              <p className="text-6xl font-bold">{totalUsers}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Second Grid Row */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-semibold flex items-center">
              New Feature
              <span
                role="img"
                aria-label="star"
                className="ml-2 text-yellow-400"
              >
                ⭐
              </span>
            </h2>
            <p className="text-lg mt-2">
              Details about a new feature can be added here.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-semibold flex items-center">
              Completed Projects
              <span
                role="img"
                aria-label="project"
                className="ml-2 text-green-400"
              >
                ✅
              </span>
            </h2>
            <p className="text-4xl font-bold mt-2">{completedProjects}</p>
          </div>

          {/* Additional Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
            <h2 className="text-2xl font-semibold flex items-center">
              Additional Info
              <span role="img" aria-label="info" className="ml-2 text-gray-400">
                ℹ️
              </span>
            </h2>
            <p className="text-lg mt-2">
              You can add more content or features here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
