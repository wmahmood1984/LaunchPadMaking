import React, { useState,useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import logo from "../../../../Img/logo.png";
import binance from "../../../../Img/binance.png";
import { Form } from "react-bootstrap";
import Details from "./Details";
const ipfsClient = require('ipfs-http-client');
const projectId = '2HdKrtd8GBGyqmO0u1BW2Re1hSK';
const projectSecret = '624bcf5bf92747f385771188371089f4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');


function Live({ edit, setEdit , live,poolId,
  setHash,
  _title,
  setTitle,
  noOfToken,
  setNoOFTokens,
  _symbol,
  _price,
  setPrice,
  twitter,
  setTwitter,
  medium,
  setMedium,
  telegram,
  setTelegram,
  telegramGroup,
  setTeleGramGroup,
  Max,
  setMax,
  Min,
  setMin,
  vesting,
  setVesting,
  IDOstart,
  setIDOStart,
  IDOEnd,
  setIDOEnd,

}) {
  const [showDetails, setShowDetails] = useState(false);


  const [formData, setFormData] = useState({
    title: "MOVGAME IGO POOL",
    gemz: "200000",
    price: "0.2",
  });

  const { title, gemz, price } = formData;

  const handleAddDetails = () => {
    setShowDetails((prevState) => !prevState);
  };

  var imageBugger;


  const client = ipfsClient.create({
   host: 'ipfs.infura.io',
   port: 5001,
   protocol: 'https',
   headers: {
       authorization: auth,
   },
  });
  
  const captureFile = async(e)=>{
     e.preventDefault()
   const file = e.target.files[0]
   const reader = new window.FileReader()
   reader.readAsArrayBuffer(file)
   reader.onloadend = async ()=>{
    imageBugger = Buffer(reader.result)
     console.log("buffer",imageBugger)
  client.add(imageBugger).then((res) => {
   setHash(`https://gateway.pinata.cloud/ipfs/${res.path}`)
  
  });}
  }





  
  return (
    <>
      <Card
        bg="dark"
        key="dark"
        text="light"
        className="border border-4 border-success mb-4"
      >
        <Card.Header className="bg-dark py-3">
          <Nav fill variant="pills">
            <Nav.Item className="bg-dark">
              {edit ? <Form.Group className="mb-3 text-light w-50 mx-auto">
                  <Form.Label>Change Logo</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Pool Title"
                    className="text-light"
                  />
                </Form.Group> : 
              <img src={logo} alt="" width="160px" className="bg-dark " />
                }
            </Nav.Item>
            <Nav.Item className="bg-dark ">
                { edit ? <Form.Group className="mb-3 text-light w-50 mx-auto">
                  <Form.Label>Change Logo</Form.Label>
                  <Form.Control
                    onChange={captureFile}
                    type="file"
                    placeholder="Pool Title"
                    className="text-light"
                  />
                </Form.Group> : 
              <div className="d-flex align-items-center justify-content-center bg-dark">
                <img
                  src={binance}
                  width="50px"
                  className="m-0 bg-dark"
                  alt=""
                  />
                <span className="px-3 fs-1 bg-dark fw-bolder text-warning">
                  BSC
                </span>
              </div> }
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="bg-dark">
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                className={
                  edit
                    ? "mb-3 text-light border border-1 fs-1 bg-transparent"
                    : "text-light border border-0 fs-1 bg-transparent "
                }
                id="title"
                value={_title}
                disabled={!edit}
                onChange={(e)=>{setTitle(e.target.value)}}
              />
            </Form.Group>

            <Form.Group className="d-flex align-items-center">
              <Form.Control
                type="number"
                className={
                  edit
                    ? "mb-3 border border-1 fs-3 bg-transparent text-success fw-bolder w-50"
                    : "border border-0 fs-3 bg-transparent text-success fw-bolder w-25"
                }
                value={noOfToken}
                id={_symbol}
                onChange={(e)=>{setNoOFTokens(e.target.value)}}
                disabled={!edit}
              />
              <Form.Label className="fs-1 mx-3 fw-bold text-success">
                - {_symbol}
              </Form.Label>
            </Form.Group>

            <Form.Group className="d-flex align-items-center justify-content-between">
              <Form.Label className="fs-1 mx-3">Price</Form.Label>
              <Form.Control
                type="number"
                className={
                  edit
                    ? "mb-3 border border-1 fs-1 bg-transparent text-success fw-bolder w-25"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value={_price}
                id="price"
                onChange={(e)=>{setPrice(e.target.value)}}
                disabled={!edit}
              />
            </Form.Group>
          </Form>

          {/* <div>
            <div className="d-flex bg-dark m-0 justify-content-between">
              <h4 className="bg-dark">Progress</h4>
              <h3 className="text-success bg-dark fw-bold">9/10</h3>
            </div>
            <ProgressBar variant="success" now={90} />
          </div> */}

          <div className="text-center pt-3 bg-dark">
            <Button variant="warning" className="btn-lg w-50" onClick={() => handleAddDetails()}>
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      {showDetails ? <Details 
      twitter={twitter}
      setTwitter={setTwitter}
      medium={medium}
      setMedium={setMedium}
      telegram={telegram}
      setTelegram={setTelegram}
      telegramGroup={telegramGroup}
      setTeleGramGroup={setTeleGramGroup}
      Max={Max}
      setMax={setMax}
      Min={Min}
      setMin={setMin}
      vesting={vesting}
      setVesting={setVesting}
      IDOstart={IDOstart}
      setIDOStart={setIDOStart}
      IDOEnd={IDOEnd}
      setIDOEnd={setIDOEnd}

      edit={edit} live={live} /> : ""} 
    </>
  );
}

export default Live;
