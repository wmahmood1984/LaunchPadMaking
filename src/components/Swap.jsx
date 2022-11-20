import { Button, Card } from "react-bootstrap";

function Swap({phrase}) {
  return (
    <>
      <Card bg="dark" className="border border-3 border-success my-3 swapDiv">
        <Card.Header className="fs-1 fw-bolder text-center text-success title">
          SWAPPED
        </Card.Header>
        <Card.Title className="fs-1 fw-bolder text-center text-white bg-dark title">
          {`${phrase}`}
        </Card.Title>
        {/* <Button
          variant="outline-success"
          className="btn-lg w-50 mx-auto my-3 fs-3 title"
        >
          CLick Here
        </Button> */}
      </Card>
    </>
  );
}

export default Swap;
