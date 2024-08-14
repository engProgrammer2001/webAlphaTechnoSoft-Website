import React from "react";
import "./Testomonial.css";
import TestomonialData from "../Data/TestomonialData";
import {Col,Card} from 'react-bootstrap';

const Testomonial = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center heading mt-5 mb-5">
          <p className="common-p">What's Our Client Say</p>
          <h2 className="common-h2 ">Testomonial</h2>
        </div>
        <div className="row">
            {TestomonialData.map((value,index)=>{
                return(
                    <TestoMonialItems key={index} DataItems={value} />
                )
            })}
        </div>
      </div>
    </>
  );
};

export default Testomonial;


function TestoMonialItems({DataItems}){
    return(
        <Col lg="6" md="12" className="py-3">
        <Card style={{padding:'20px 20px'}} className="TestoName">
            <p style={{fontSize:'18px'}}>{DataItems.Message}</p>
          <Card.Img style={{width:"50px", height: "60px", borderRadius:"50%", textAlign:"Center", padding:"10px 0px"}} variant="top" src={DataItems.Images} />
            <h3 style={{color:"#3b3663", fontWeight:'bold'}}>{DataItems.Name}</h3>
        </Card>
      </Col>
    )
}
