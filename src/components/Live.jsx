import React from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import logo from "../Img/logo.png";
import binance from "../Img/binance.png";
import { Link } from "react-router-dom";
import Web3 from "web3"
import { useWeb3React } from "@web3-react/core";
import { logoArray } from "../config";


function Live({live}) {
  const {chainId} = useWeb3React();
  const web3 = new Web3(Web3.givenProvider)


  return (
    <>
      {live && live.map((v,e)=>{
      
      console.log("live",web3.utils.hexToNumberString(v._noOfTokens._hex))

      return (
        <Card
        bg="dark"
        key="dark"
        text="light"
        className="border border-4 border-success mb-4"
      >
        <Card.Header className="bg-dark py-3">
          <Nav fill variant="pills">
            <Nav.Item className="bg-dark">
              <img src={v._hash} alt="" width="160px" className="bg-dark " />
            </Nav.Item>
            <Nav.Item className="bg-dark ">
              <div className="d-flex align-items-center justify-content-center bg-dark">
                <img
                  src={logoArray[`${chainId}`]}
                  width="50px"
                  className="m-0 bg-dark"
                  alt=""
                />
                <span className="px-3 fs-1 bg-dark fw-bolder text-warning">
                  BSC
                </span>
              </div>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="bg-dark">
          <h1 className="bg-dark">{v._title}</h1>
          <h1 className="bg-dark">TOTAL POOL</h1>
          <h1 className="text-success bg-dark fw-bolder">{web3.utils.hexToNumberString(v._noOfTokens._hex)/1000000000000000000} GEMZ</h1>
          <h1 className="bg-dark">
            <span className="bg-dark">Price - </span>{" "}
            <span className="text-success bg-dark fs-1 fw-bolder">${web3.utils.hexToNumberString(v._price._hex)/1000000000000000000} </span>
          </h1>
  
          {/* <div>
            <div className="d-flex bg-dark m-0 justify-content-between">
              <h4 className="bg-dark">Progress</h4>
              <h3 className="text-success bg-dark fw-bold">9/10</h3>
            </div>
            <ProgressBar variant="success" now={90} />
          </div> */}
  
          <div className="text-center pt-3 bg-dark">
            <Link to={`/igo/details/${v._address}`}>
              <Button variant="warning" className="btn-lg w-50">
                Details
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
      )
      }
     
      
      )}

      
    </>
  );
}

export default Live;
