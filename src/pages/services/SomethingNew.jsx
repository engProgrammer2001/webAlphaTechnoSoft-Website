import React from "react";
import "./somthingNew.css";
import SomethingNewData from "../Data/SomethingNewData";
import { FcLeft } from "react-icons/fc";

const SomethingNew = () => {
  return (
    <>
      <div className="ontainer-fluid somethingNew-sec"></div>
      <div className="container Heading">
        <h1>Our More Services</h1>
        <a href="/"><FcLeft /> Go back</a>
      </div>
        <div className="container m-auto">
          <div className="row one text-center ">
            {SomethingNewData.map((value, index) => {
              return (
                <div className="col colum col-lg-3">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.image} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 clclassNameass="card-title">{value.Title}</h5>
                      <p className="card-text">{value.Description}</p>
                      {/* <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
    </>
  );
};

export default SomethingNew;
