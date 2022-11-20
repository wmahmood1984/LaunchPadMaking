import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import logo from "../../../../Img/logo.png";
import binance from "../../../../Img/binance.png";
import { Form } from "react-bootstrap";
import Details from "./Details";
import Timer from "../../../../components/Timer";

function Upcoming({ edit, upcoming }) {
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

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    // e.target.id = e.target.value
  };
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
                value={title}
                disabled={!edit}
                onChange={handleChange}
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
                value={gemz}
                id="gemz"
                onChange={handleChange}
                disabled={!edit}
              />
              <Form.Label className="fs-1 mx-3 fw-bold text-success">
                - GEMZ
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
                value={price}
                id="price"
                onChange={handleChange}
                disabled={!edit}
              />
            </Form.Group>
          </Form>

          <div>
            <div className="d-flex bg-dark m-0 justify-content-between">
              <h4 className="bg-dark">Progress</h4>
              <h3 className="text-success bg-dark fw-bold">9/10</h3>
            </div>
            <ProgressBar variant="success" now={90} />
          </div>

          <div className="text-center pt-3 bg-dark">
            <Timer />
            <Button variant="warning" className="btn-lg w-50" onClick={() => handleAddDetails()}>
              Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      {showDetails ? <Details edit={edit} upcoming={upcoming} /> : ""} 
    </>
  );
}

export default Upcoming;


