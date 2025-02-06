import React from "react";
import { IoLogOut } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../store/auth";
import { useDispatch } from "react-redux";

const SideNavbar = ({
  onDashboard,
  onAddProject,
  onAllUsers,
  onAllProject,
}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logout());
    localStorage.removeItem("id");
    localStorage.removeItem("fullName");
    localStorage.removeItem("role");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  };
  return (
    <div className="w-full md:w-1/5 bg-gray-800 p-5 lg:h-screen flex flex-col rounded-lg">
      <nav className="flex flex-col justify-center items-center flex-grow">
        <ul className="space-y-4">
          <li>
            <button
              onClick={onDashboard}
              className="text-orange-400 hover:underline text-lg"
            >
              Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={onAddProject}
              className="text-orange-400 hover:underline text-lg"
            >
              Add Project
            </button>
          </li>
          <li>
            <button
              onClick={onAllUsers}
              className="text-orange-400 hover:underline text-lg"
            >
              Get All Users
            </button>
          </li>
          <li>
            <button
              onClick={onAllProject}
              className="text-orange-400 hover:underline text-lg"
            >
              Get All Projects
            </button>
          </li>
        </ul>
      </nav>
      <div className="mt-auto text-center py-2">
        <a
        onClick={handleLogout}
          href="#logout"
          className="flex items-center justify-center bg-orange-400 text-white py-2 px-4 rounded-lg hover:bg-orange-500"
        >
          <IoLogOut className="mr-2" />
          Log Out
        </a>
      </div>
    </div>
  );
};

export default SideNavbar;
