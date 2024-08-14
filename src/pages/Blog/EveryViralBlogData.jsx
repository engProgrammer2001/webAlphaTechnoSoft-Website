import React from "react";
import { useLocation } from "react-router-dom";
import Sideblogdata from "../Data/Sideblogdata";
import "./EveryViralBlogData.css";
import { FcLeft } from "react-icons/fc";

const EveryViralBlogData = () => {
  let uselocation = useLocation();
  let currenrtid = uselocation.pathname.split("/")[2];
  // console.log(currenrtid)
  let currentData = Sideblogdata.filter((v) => v.id == currenrtid)[0];
  // console.log(currentData)
  return (
    <>
      <div className="container Data-sec">
        <div className="Coverimges">
          <img src={currentData.CoverImage} width={"100%"} alt="CoverImage" />
          <a href="/blog">
            <FcLeft /> Go To Blog Page
          </a>
          <br />
        </div>
        <img src={currentData.AutorImage} width={"50px"} alt="" />
        <h5>{currentData.AuthorName}</h5>
        <h6>{currentData.CreateDate}</h6>
        <h1>{currentData.Title}</h1>
        <p>{currentData.Description}</p>
      </div>
      <div className="container comment-sec">
        <h1>Leave Your Comments</h1>
        <div class="mb-3 box">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Your Name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            Comment
          </label>
          <textarea
            class="form-control"
            id="message"
            placeholder="Leave your Comment"
            rows="3"
          ></textarea>
        </div>
        <button>Comment</button>
      </div>
    </>
  );
};

export default EveryViralBlogData;
