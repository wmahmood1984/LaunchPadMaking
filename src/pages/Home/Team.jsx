import React from "react";
import { Card } from "react-bootstrap";
import Ceo from "../../Img/Ceo.png";
import Cmo from "../../Img/Cmo.png";
import Cm from "../../Img/CM.png";
import Artist from "../../Img/Developer.png";
import Developer from "../../Img/Artist.png";

function Team() {
  return (
    <>
    <h1 className="text-center text-success fw-bolder my-3 py-5">
        Our Team
      </h1>
      <div className="d-block d-lg-flex align-items-center justify-content-between mb-5 ">
        <Card
          bg="dark"
          className=" text-center border border-3 border-success p-3 mb-3 mb-lg-0  "
        >
          <img alt="teamArt" width="150rem" src={Ceo} className=" mx-auto teamImg" />
          <h1 className="text-white fs-5 mt-3">
            Wang Chen <br />{" "}
            <span className="text-success teamname">( CEO )</span>
          </h1>
        </Card>

        <Card
          bg="dark"
          className=" text-center border border-3 border-success p-3 mb-3 mb-lg-0 "
        >
          <img alt="teamArt" width="150rem" src={Cmo} className=" mx-auto teamImg" />
          <h1 className="text-white fs-5 mt-3">
            BRILE JUYE <br />{" "}
            <span className="text-success teamname">( CMO )</span>
          </h1>
        </Card>

        <Card
          bg="dark"
          className=" text-center border border-3 border-success p-3 mb-3 mb-lg-0 "
        >
          <img
            alt="teamArt"
            width="150rem"
            variant="top"
            src={Cm}
            className=" mx-auto teamImg"
          />
          <h1 className="text-white fs-5 mt-3">
            ALVIE FORK <br />{" "}
            <span className="text-success teamname">( CM )</span>
          </h1>
        </Card>

        <Card
          bg="dark"
          className=" text-center border border-3 border-success p-3 mb-3 mb-lg-0 "
        >
          <img
            alt="teamArt"
            width="150rem"
            variant="top"
            src={Artist}
            className=" mx-auto teamImg"
          />
          <h1 className="text-white fs-5 mt-3">
            LAMAO JOUN <br />{" "}
            <span className="text-success teamname">( SENIOR ARTIST )</span>
          </h1>
        </Card>

        <Card
          bg="dark"
          className=" text-center border border-3 border-success p-3 mb-3 mb-lg-0 "
        >
          <img
            alt="teamArt"
            width="150rem"
            variant="top"
            src={Developer}
            className=" mx-auto teamImg"
          />
          <h1 className="text-white fs-5 mt-3">
            KELLEY GOUN <br />{" "}
            <span className="text-success teamname">( SENIOR DEVELOPER )</span>
          </h1>
        </Card>
      </div>
    </>
  );
}

export default Team;
