import React from "react";
import "./Blog.css";

const ViralBlog = ({ blog }) => {
  return (
    <>
      <div className="container">
        {blog.map((value, index) => {
          return (
            <div className="row">
              <div className="col blog-sec">
                <img src={value.CoverImage} key={index} style={{ width: "100%" }} alt="" />
                <h5>{value.Category}</h5>
                <h2>{value.Title}</h2>
                <p>{value.Description}</p>
                <img src={value.AutorImage} style={{width:'60px', borderRadius:'50%', paddingLeft:'10px'}} alt="Auth_img" />
                <h2>{value.AuthorName}</h2>
                <h6>{value.CreateDate}</h6>
                <button style={{marginBottom:15}}> <a href={`/blog/${value.id}`}>Learn More</a></button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ViralBlog;
