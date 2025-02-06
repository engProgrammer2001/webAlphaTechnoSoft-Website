import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    id: localStorage.getItem("id"), // Custom header to send user id
  }

  
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}user/profile`, {
          headers,
          withCredentials: true, 
        });
  
        setUser(response.data.data); // Set the user data from the response
      } catch (error) {
        setError(error.message || "Failed to fetch user profile"); // Set error message if the fetch fails
      } finally {
        setLoading(false); // Set loading to false after fetch completes
      }
    };
  
    fetchUserProfile();
  }, []);

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render profile data
  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md mt-10">
      <div className="flex items-center mb-4">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl text-[#3b3663] font-semibold">
            {user.fullName}
          </h2>
          <p className="text-orange-400 text-2xl">{user.role}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg text-[#3b3663] underline font-medium">
          Contact Information
        </h3>
        <p className="text-gray-700">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700">
          <strong>Mobile Number:</strong> {user.mobileNumber}
        </p>
        <p className="text-gray-700">
          <strong>Address:</strong> {user.address}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-medium text-[#3b3663] underline">
          Business Information
        </h3>
        <p className="text-gray-700">
          <strong>Business Name:</strong> {user.businessName}
        </p>
      </div>
    </div>
  );
};

export default Profile;
