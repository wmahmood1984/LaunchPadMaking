import { Button, Card } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

function Winner() {
  return (
    <>
      <Card bg="dark" className="border border-3 border-success my-3 swapDiv">
        <Card.Header className="fs-1 fw-bolder text-center text-success title">
          WINNER
        </Card.Header>
        <Card.Title className="fs-1 fw-bolder text-center text-white bg-dark title">
          THERE ARE TOTAL 800 WINNERS CHECK BELOW
        </Card.Title>

        <InputGroup size="md" className="fs-1 w-75 mx-auto title">
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="ENTER WALLET ADDRESS"
          />
        </InputGroup>

        <Button
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
