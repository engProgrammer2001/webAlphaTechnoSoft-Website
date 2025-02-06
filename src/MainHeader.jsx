import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "./common/header/Header";
import Footer from "./common/footer/Footer";
import Navbar from "./common/header/Navbar.jsx";

const Home = () => {
  return (
    <div>
      {/* < Header/> */}
      <Navbar />
    
      <Outlet />

      <Footer/>
    </div>
  );
};

export default Home;
