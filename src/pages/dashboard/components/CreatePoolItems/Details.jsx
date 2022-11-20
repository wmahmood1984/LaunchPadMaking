import {
  Button,
  Card,
  Container,
  ProgressBar,
  Tabs,
  Tab,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import binance from "../../../../Img/binance.png";
import logo from "../../../../Img/logo.png";
import logoOrg from "../../../../Img/movpadOrg.png";
import {
  FaFacebook,
  FaTwitter,
  FaSnapchat,
  FaMedium,
  FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa";
import InformAction from "./InformAction";
import Swap from "./Swap";
import Claim from "./Claim";
import Winner from "./Winner";
import Timer from "../../../../components/Timer";

function Details({ edit, upcoming , live, end,
  noOfToken,
  price,
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
  createPool,
  setCurrency,
  setVestingMonths


}) {


  return (
    <>
      <Card
        bg="dark"
        text="light"
        className="mt-4 border border-3 border-success"
      >
        <div className="bg-dark text-light d-flex align-items-center justify-content-around p-3">
          <div>
          <Form.Group className="mb-3 text-light">
                  <Form.Label>BTX Logo</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Pool Title"
                    className="text-light"
                  />
                </Form.Group>
          </div>
          <div>
            <div className="d-flex align-items-center m-0 bg-dark">
                <Form.Group className="mb-3 text-light">
                  <Form.Label>Logo</Form.Label>
                  <Form.Control
                    type="file"
                    placeholder="Pool Title"
                    className="text-light"
                  />
                </Form.Group>
              {/* Logo */}
            </div>
            <div className="bg-dark"><Form.Group>
                  <Form.Control
                    type="text"
                    className="text-light"
                    value={twitter}
                    onChange={(e)=>{setTwitter(e.target.value)}}
                    placeholder="Twitter"
                    
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="text-light"
                    value={medium}
                    onChange={(e)=>{setMedium(e.target.value)}}
                    placeholder="Medium"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="text-light"
                    value={telegram}
                    onChange={(e)=>{setTelegram(e.target.value)}}
                    placeholder="Telegram"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="text"
                    className="text-light"
                    value={telegramGroup}
                    onChange={(e)=>{setTeleGramGroup(e.target.value)}}
                    placeholder="Telegram Group"
                  />
                </Form.Group>
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
          <div className="d-flex align-items-center justify-content-between">
            {/* Total Amount */}
                <Form.Group className="d-flex align-items-center justify-content-between fs-2">
                  <Form.Label>Total Amount</Form.Label>
                  <Form.Control
                    type="number"
                    value={noOfToken*price}
                    placeholder="1 GMEZ = $0.1"
                    className="border border-0 bg-transparent text-light w-50 fw-bolder fs-2"
                  />
                </Form.Group>
          </div>
          <Card.Text className="text-success bg-dark">
            {/* <Form.Group>
              <Form.Control
                type="text"
                placeholder="GEMZ"
                className="mb-3 border border-0 fs-1 bg-transparent text-success fw-bolder"
              />
            </Form.Group> */}
            <div className="border border-2 border-success rounded mb-3 p-2 fs-1 d-flex align-items-center justify-content-between bg-dark">
              <Form.Group>
                <Form.Control
                  type="text"
                  className="text-light border border-0 fs-3 bg-transparent text-success fw-bolder"
                  value={Max}
                  onChange={(e)=>{setMax(e.target.value)}}
                  placeholder="Max Gemz"
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
                  className="text-light border border-0 fs-3 bg-transparent text-success fw-bolder"
                  value={Min}
                  onChange={(e)=>{setMin(e.target.value)}}
                  placeholder="Min Gemz"
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
          {live ? (
            <>
              {/* <Button
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
              </Button>{" "} */}
            </>
          ) : (
            ""
          )}
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
          price={price}
          vesting = {vesting}
          setVesting = {setVesting}
          IDOstart = {IDOstart}
          setIDOStart = {setIDOStart}
          IDOEnd = {IDOEnd}
          setIDOEnd = {setIDOEnd}
          createPool={createPool}
          setCurrency={setCurrency}
          setVestingMonths={setVestingMonths}
          edit={edit} />
        </Tab>
        {/* <Tab eventKey="swap" title="SWAP">
          <Swap />
        </Tab> */}
        {/* <Tab eventKey="claim" title="CLAIM">
          <Claim />
        </Tab> */}
        <Tab eventKey="winner" title="WINNER">
          <Winner />
        </Tab>
      </Tabs>
    </>
  );
}

export default Details;
