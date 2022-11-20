import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import logo from "../../../../Img/logo.png";
import binance from "../../../../Img/binance.png";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import Details from "./Details";
import Timer from "../../../../components/Timer";

function Upcoming({upcoming, poolItemUpcoming, createpoolUpcoming}) {
  const [showDetails, setShowDetails] = useState(false);

  const handleAddDetails = () => {
    setShowDetails((prevState) => !prevState);
  };
  return (
    <>
     <div className="text-center">
        <Button
          onClick={() => poolItemUpcoming()}
          variant="dark fs-1 text-center fw-bold mx-auto w-50 my-3 border-success border-3"
          className={createpoolUpcoming ? 'd-none' : ''}
        >
          Create pool
        </Button>
      </div>
      {createpoolUpcoming ? 
      <Card
        bg="dark"
        key="dark"
        text="light"
        className="border border-4 border-success mb-4"
      >
        <Card.Header className="bg-dark py-3">
          <Nav fill variant="pills">
            <Nav.Item className="bg-dark">
            <Form.Group className="mb-3 text-light w-50 mx-auto">
                  <Form.Label>Add Logo</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Pool Title"
                    className="text-light"
                  />
                </Form.Group>
            </Nav.Item>
            <Nav.Item className="bg-dark ">
              <div className="">
              <Form.Group className="mb-3 text-light w-50 mx-auto">
                  <Form.Label>Btc Logo</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Pool Title"
                    className="text-light"
                  />
                </Form.Group>
              </div>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="bg-dark">
            <Form.Group className='mb-3'>
              <Form.Control
                type="text"
                className="text-light border border-0 fs-1 bg-transparent "
                id="title"
                placeholder="Title"
              />
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Control
                type="number"
                className="text-light border border-0 fs-1 bg-transparent "
                id="gemx"
                placeholder="GEMZ"
              />
            </Form.Group>
            <Form.Group className='mb-3'>
              <Form.Control
                type="number"
                className="text-light border border-0 fs-1 bg-transparent "
                id="gemx"
                placeholder="Price - ($)"
              />
            </Form.Group>



          <div>
            <div className="d-flex bg-dark m-0 justify-content-between">
              <h4 className="bg-dark">Progress</h4>
              <h3 className="text-success bg-dark fw-bold">9/10</h3>
            </div>
            <ProgressBar variant="success" now={90} />
          </div>

          <div className="text-center pt-3 bg-dark">
          {/* <h1 className="text-success fw-bold">Starts In 3hrs 5s </h1> */}
          <Timer />
            <Button variant="warning" className="btn-lg w-50" onClick={() => handleAddDetails()}>
              Add Details
            </Button>
          </div>
        </Card.Body>
      </Card>
      : ''}


{showDetails ? <Details  upcoming={upcoming} /> : ""} 
    </>
  );
}

export default Upcoming;
