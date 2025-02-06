// components/RoleBasedRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../store/auth";

const RoleBasedRedirect = () => {
  const navigate = useNavigate(); // useNavigate must be inside a Router component

  useEffect(() => {
    const role = getUserRole(); // Check the role of the user
    if (role === "admin") {
      navigate("/admin"); // Redirect to the admin panel if the role is "admin"
    }
  }, [navigate]);

  return null; // This component does not render anything
};

export default RoleBasedRedirect;
