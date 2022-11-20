import React from "react";
import { Card } from "react-bootstrap";
import Binance from "./../../Img/binance.png";
import EthereumLog from "./../../Img/ethereum.png";
import Solana from "./../../Img/solana.png";
import Polygon from "./../../Img/polygon.png";
import A from "./../../Img/a.png";

function PoweredBy() {
  return (
    <>
      <h1 className="text-center text-success fw-bolder my-5 py-5">
        Powered By
      </h1>
      <Card
        bg="transparent"
        className=" p-3 my-5 d-sm-flex flex-row flex-wrap align-items-center  justify-content-around gap-3 d-none"
      >
        <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
          <img src={Binance} alt="" width="100px" className=" bg-transparent" />
        </div>
        <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
          <img
            src={EthereumLog}
            alt=""
            width="100px"
            className="bg-transparent"
          />
        </div>
        <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
          <img src={Solana} alt="" width="100px" className=" bg-transparent" />
        </div>
        <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
          <img src={A} alt="" width="100px" className=" bg-transparent" />
        </div>
        <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
          <img src={Polygon} alt="" width="100px" className=" bg-transparent" />
        </div>
      </Card>

      <Card
        bg="transparent"
        className="d-sm-none d-flex align-items-center  justify-content-around gap-4"
      >
        <div className="d-flex flex-col gap-5">
          <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
            <img
              src={Binance}
              alt=""
              width="100px"
              className=" bg-transparent"
            />
          </div>
          <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
            <img
              src={EthereumLog}
              alt=""
              width="100px"
              className="bg-transparent"
            />
          </div>
        </div>
        <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
          <img src={A} alt="" width="100px" className=" bg-transparent" />
        </div>

        <div className="d-flex flex-col gap-5">
          <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
            <img
              src={Solana}
              alt=""
              width="100px"
              className=" bg-transparent"
            />
          </div>
          <div className="p-3 bg-dark border border-4 border-success rounded-3 poweredByLogo">
            <img
              src={Polygon}
              alt=""
              width="100px"
              className=" bg-transparent"
            />
          </div>
        </div>
      </Card>
    </>
  );
}

export default PoweredBy;
