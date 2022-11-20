import React from "react";
import { Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div id="home" className="py-5 mb-">
        <Card
          bg="dark"
          className="border border-4 border-success mb-5 animation"
        >
          <Card.Body className="fs-1 text-white text-center bg-dark">
            <Card.Title className="fs-2 text-white bg-dark">
              MOST SECURE AND TRUSTED{" "}
            </Card.Title>
            <Card.Title className="fs-5 text-white bg-dark">
              IDO LAUNCHPAD. LET’S GROW TOGETHER{" "}
            </Card.Title>
          </Card.Body>
        </Card>
        <Card className="d-flex flex-row align-items-center justify-content-around bg-black my-4">
          <Button variant="warning" className=" btnFont fw-bold px-5">
            <a
              href="http://forms.gle/Z3iY8oUxe6Um65De6"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              APPLY
            </a>
          </Button>
          <Link to="/igo">
            <Button
              variant="warning"
              className=" fw-bold w-0 w-lg-25 btnFont position-relative"
            >
              LAUNCHPAD
              {/* <Badge bg="danger" className="mx-2 badgeLaunch">SOON</Badge> */}
            </Button>

          </Link>
        </Card>
        <Card className="bg-black text-white fs-2 text-center mt-5">
          <Card.Title className="text-center text-success fw-bolder my-3 fs-1 py-4">
            About Movpad
          </Card.Title>
          Movpad is most secured ido platform supporting Multichain based
          projects. This platform supporting web3 & metaverse Project
        </Card>
      </div>
    </>
  );
}

export default Header;
