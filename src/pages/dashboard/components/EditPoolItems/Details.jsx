import { Button, Card, ProgressBar, Tabs, Tab, Form } from "react-bootstrap";
import binance from "../../../../Img/binance.png";
import logo from "../../../../Img/logo.png";
import {
  FaTwitter,
  FaMedium,
  FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa";
import InformAction from "./InformAction";
import Swap from "./Swap";
import Claim from "./Claim";
import Winner from "./Winner";
import Timer from "../../../../components/Timer";



function Details({ edit, upcoming, end, live, 
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
}) 

{
  return (
    <>
      <Card
        bg="dark"
        text="light"
        className="mt-4 border border-3 border-success"
      >
        <div className="bg-dark text-light d-flex align-items-center justify-content-around p-3">
          <div>
            {edit ? (
              <Form.Group className="mb-3 text-light">
                <Form.Label>Change Logo</Form.Label>
                <Form.Control
                  type="file"
                  placeholder="Pool Title"
                  className="text-light"
                />
              </Form.Group>
            ) : (
              <img
                src={binance}
                width="60px"
                className="m-0 bg-dark bnbLogo"
                alt=""
              />
            )}
          </div>
          <div>
            <div className="d-flex align-items-center m-0 bg-dark">
              {edit ? (
                <Form.Group className="mb-3 text-light">
                  <Form.Label>Change Logo</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Pool Title"
                    className="text-light"
                  />
                </Form.Group>
              ) : (
                <>
                  {" "}
                  <img
                    src={logo}
                    alt=""
                    width="100px"
                    className="bg-dark logoInDetails"
                  />{" "}
                  <span className="bg-dark fs-1 fw-bolder px-3">IGO</span>
                </>
              )}
              {/* Logo */}
            </div>
            <div className="bg-dark">
              {edit ? (
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={twitter}
                    onChange={(e)=>{setTwitter(e.target.value)}}
                    placeholder="Twitter Link"
                    className="text-light"
                  />
                </Form.Group>
              ) : (
                <>
                  <a href="/s" className="text-white text-hover-gray">
                    <FaTwitter className="fs-1 mx-3" />
                  </a>
                </>
              )}
              {edit ? (
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={medium}
                    onChange={(e)=>{setMedium(e.target.value)}}
                    className="text-light"
                    placeholder="Medium"
                  />
                </Form.Group>
              ) : (
                <>
                  <a href="/d" className="text-white text-hover-dark">
                    <FaMedium className="fs-1 mx-3" />
                  </a>
                </>
              )}
              {edit ? (
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={telegram}
                    onChange={(e)=>{setTelegram(e.target.value)}}
                    placeholder="Telegram"
                    className="text-light"
                  />
                </Form.Group>
              ) : (
                <>
                  <a href="/s" className="text-white text-hover-gray">
                    <FaTelegram className="fs-1 mx-3 " />
                  </a>
                </>
              )}
              {edit ? (
                <Form.Group>
                  <Form.Control
                    type="text"
                    value={telegramGroup}
                    onChange={(e)=>{setTeleGramGroup(e.target.value)}}
                    placeholder="Telegram Group"
                    className="text-light"
                  />
                </Form.Group>
              ) : (
                <>
                  <a href="/a" className="text-white text-hover-gray">
                    <FaTelegramPlane className="fs-1 mx-3 " />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </Card>
      <Card
        bg="dark"
        key="dark"
        text="white"
        className="my-3 py-3 border border-3 border-success swapDiv"
      >
        <Card.Header className="fs-1 text-success fw-bolder text-center">
          SWAP INFO
        </Card.Header>
        <Card.Body className="bg-dark">
          <div className="d-flex align-items-center justify-content-between   bg-dark">
            {/* Total Amount */}
            {/* <Card.Title className="fs-1 bg-dark fw-bolder title">
              TOTAL AMOUNT
            </Card.Title> */}
            <Card.Title className="fs-1 bg-dark fw-bolder title">
              {/* {false ? (
                <Form.Group>
                  <Form.Control
                    type="text"
                    className={
                      edit
                        ? "text-light"
                        : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                    }
                    value="$0.1"
                    disabled={!edit}
                  />
                </Form.Group>
              ) : (
                <>
                  1 GMEZ = <span className="bg-dark text-success">$0.1</span>
                </>
              )} */}
            </Card.Title>
          </div>
          <Card.Text className="text-success bg-dark">
            {/* <Form.Group>
              <Form.Control
                type="text"
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value="20000 GEMZ"
                disabled={!edit}
              />
            </Form.Group> */}
            <div className="border border-2 border-success rounded mb-3 p-2 fs-1 d-flex align-items-center justify-content-between bg-dark">
              <Form.Group>
                <Form.Control
                  type="text"
 
                  onChange={(e)=>{setMax(e.target.value)}}
                  className={
                    edit
                      ? "text-light"
                      : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                  }
                  value={Max}
                  disabled={!edit}
                />
              </Form.Group>
              <span className="bg-warning px-5 text-dark fw-bold max rounded">
                MAX
              </span>
            </div>
            <div className="border border-2 border-success rounded p-2 fs-1 d-flex align-items-center justify-content-between bg-dark">
              <Form.Group>
                <Form.Control
                  type="text"
                  onChange={(e)=>{setMin(e.target.value)}}
                  className={
                    edit
                      ? "text-light"
                      : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                  }
                  value={Min}
                  disabled={!edit}
                />
              </Form.Group>
              <span className="bg-warning px-5 text-dark fw-bold max rounded">
                MAX
              </span>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex flex-wrap align-items-center justify-content-around">
          {upcoming ? <Timer /> : ""}
          {end ? <h1>This is Ended</h1> : ""}
          {/* {live ? (
            <>
              <Button
                variant="outline-success"
                className="btn-lg fs-2 px-4 fw-bold  title swapBtn"
              >
                APPROVE
              </Button>
              <Button
                variant="outline-success"
                className="btn-lg fs-2 px-4 title fw-bold swapBtn"
              >
                SWAP
              </Button>{" "}
            </>
          ) : (
            ""
          )} */}
        </Card.Footer>
      </Card>
      {/* <Card
        bg="dark"
        text="light"
        className="px-5 my-5 border border-3 border-success swapDiv"
      >
        <Card.Header className="fs-1 fw-bolder text-center text-success title">
          SWAP PROGRESS
        </Card.Header>
        <Card.Footer>
          <ProgressBar variant="success" now={100} />
          <div className="d-flex align-items-center pt-3 justify-content-between bg-dark">
            <h1 className="bg-dark fw-bolder title">100%</h1>
            <h1 className="bg-dark fw-bolder title">10/10</h1>
          </div>
        </Card.Footer>
      </Card> */}
      <Tabs
        defaultActiveKey="inform"
        id="justify-tab-example"
        className="my-4"
        justify
      >
        <Tab eventKey="inform" title="INFORM" className="">
          <InformAction
               vesting={vesting}
               setVesting={setVesting}
               IDOstart={IDOstart}
               setIDOStart={setIDOStart}
               IDOEnd={IDOEnd}
               setIDOEnd={setIDOEnd} 
          
          edit={edit} />
        </Tab>
        <Tab eventKey="swap" title="SWAP">
          <Swap />
        </Tab>
        <Tab eventKey="claim" title="CLAIM">
          <Claim />
        </Tab>
        <Tab eventKey="winner" title="WINNER">
          <Winner />
        </Tab>
      </Tabs>
    </>
  );
}

export default Details;
