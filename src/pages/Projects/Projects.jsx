import React from "react";
import './Project.css'
import img1 from '../../assets/blog-image/blog-img.png';
import projectsData from "../Data/ProjectsData";

const Projects = () => {
  return (
    <>
    <div className="container-fluid MainProject-sec">
      <h1>Our Projects</h1>
      <a href="/">Home</a>
      <img src={img1} alt="" />
    </div>
      <div className="container projectData">
        <div className="row">
        {projectsData.map((value,index)=>{
          return(
            <div className="col-12 col-lg-4 mt-3 ProjectDataColum" data-aos="flip-left" data-aos-easing="ease-in-out">
              <img src={value.Image} key={index} width={'100%'} alt="" />
              <h2>{value.Name}</h2>
              <p>{value.Description}</p>
            </div>
          )
        })}
        </div>
      </div>
    </>
  );
};

export default Projects;
