import { Button, Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Web3 from "web3"
import { LaunchPadABI, LaunchPadAdd } from "../config";
import { useState } from "react";

function Winner() {

  const [whiteList,setList] = useState()
  const [address,setAddress] = useState()

  const web3 = new Web3(Web3.givenProvider)

  const contract = new web3.eth.Contract(LaunchPadABI,LaunchPadAdd)

  const _search = async (wallet)=>{

    const result = await contract.methods.WhitelistMapping(wallet).call()
    setList(result)
  }

  console.log("result",whiteList)


  return (
    <>
      <Card bg="dark" className="border border-3 border-success my-3 swapDiv">
        <Card.Header className="fs-1 fw-bolder text-center text-success title">
          WINNER
        </Card.Header>
        <Card.Title className="fs-1 fw-bolder text-center text-white bg-dark title">
          THERE ARE TOTAL 800 WINNERS CHECK BELOW
        </Card.Title>

        <InputGroup size="md" className="fs-1 fw-bolder text-center text-white bg-dark title">
          <Form.Control
             value={address}
             onChange={(e)=>{setAddress(e.target.value)}}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="ENTER WALLET ADDRESS"
          />
        </InputGroup>
        <Card.Footer className="fs-1 fw-bolder text-center text-white bg-dark title">
          {whiteList ? "The Address is Whitelisted" : "The Address is not whitelisted"}
        </Card.Footer>

        <Button
          onClick={()=>{_search(address)}}
          variant="outline-success"
          className="btn-lg m-3 w-50 mx-auto fs-3 title"
        >
          SEARCH
        </Button>
      </Card>
    </>
  );
}

export default Winner;
