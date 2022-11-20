import React from "react";
import Logo from "./../../Img/movpadOrg.png";
import {
  FaTwitter,
  FaMedium,
  FaTelegram,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="my-5 d-flex flex-column align-items-center justify-content-center">
        <img src={Logo} alt="Logo" width="300px" className="" />
        <div className="py-3">
          <a
            href="https://twitter.com/movpad"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <FaTwitter className="fs-1 mx-3 text-secondary" />
          </a>
          <a
            href="https://medium.com/@movpadofficial"
            rel="noreferrer"
            target="_blank"
          >
            <FaMedium className="fs-1 mx-3 text-secondary" />
          </a>
          <a href="https://t.me/Movpad" rel="noreferrer" target="_blank">
            <FaTelegram className="fs-1 mx-3 text-secondary" />
          </a>
          <a href="https://t.me/MovpadGroup" rel="noreferrer" target="_blank">
            <FaTelegramPlane className="fs-1 mx-3 text-secondary" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
