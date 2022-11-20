import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../Img/logo.png";

function navbar({account}) {
  return (
    <>
      <Navbar className="my-3">
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} width="150px" className="logo" alt="logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          <Button variant="outline-warning" >{
            account? `${account.slice(0,7)}...${account.slice(-4)}` : "CONNECT"
            }</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default navbar;
