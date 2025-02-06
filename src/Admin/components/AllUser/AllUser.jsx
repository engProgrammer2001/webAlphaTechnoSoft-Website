import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../config/apiConfig";

const AllUser = () => {
  const [data, setData] = useState([]);

  const headers = {
    id: localStorage.getItem("id"),
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}user/allusers`, { headers });
        // console.log("response is : ", response.data);
        
        // Check if response contains 'users' array
        if (response.data && Array.isArray(response.data.users)) {
          setData(response.data.users);
        } else {
          console.error("Unexpected response format", response.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="">
      <h1 className="text-xl md:text-2xl text-center py-4 md:py-8 font-bold mx-2">All Users</h1>
      
      <div className="w-full p-2 md:p-4 mb-4 bg-gray-800 text-white font-semibold text-center rounded-lg">
        Total Users Till Now:
        <span className="text-orange-400 text-xl md:text-2xl"> {data.length}</span>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full table-auto divide-y divide-gray-200">
          <thead className="bg-gray-500">
            <tr>
              <th className="px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm font-bold text-gray-50 uppercase tracking-wider">Avatar</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm font-bold text-gray-50 uppercase tracking-wider">Full Name</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm font-bold text-gray-50 uppercase tracking-wider">Business Name</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm font-bold text-gray-50 uppercase tracking-wider">Mobile Number</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm font-bold text-gray-50 uppercase tracking-wider">Email</th>
              <th className="px-2 md:px-4 py-2 md:py-3 text-center text-xs md:text-sm font-bold text-gray-50 uppercase tracking-wider">Address</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-700 text-white divide-y divide-gray-500">
            {data.map((user) => (
              <tr key={user._id}>
                <td className="px-1 md:px-2 py-2 text-center text-sm font-bold">
                  <div className="flex justify-center">
                    <img
                      src={user.avatar}
                      alt={user.fullName}
                      className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-cover rounded-full"
                    />
                  </div>
                </td>
                <td className="px-1 md:px-2 py-2 text-center text-xs md:text-sm font-bold">{user.fullName}</td>
                <td className="px-1 md:px-2 py-2 text-center text-xs md:text-sm font-bold">{user.businessName}</td>
                <td className="px-1 md:px-2 py-2 text-center text-xs md:text-sm font-bold">{user.mobileNumber}</td>
                <td className="px-1 md:px-2 py-2 text-center text-xs md:text-sm font-bold">{user.email}</td>
                <td className="px-1 md:px-2 py-2 text-center text-xs md:text-sm font-bold break-words">{user.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUser;
