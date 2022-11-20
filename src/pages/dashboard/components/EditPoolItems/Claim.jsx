import { Button, Card } from "react-bootstrap";

function Claim() {
  return (
    <>
      <Card
        bg="dark"
        className="border border-3 px-3 border-success my-3 swapDiv"
      >
        <Card.Header className="fs-1 fw-bolder text-center text-success">
          CLAIM
        </Card.Header>
        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold title">1ST MONTH 20 AUG 2022</h1>
          <Button variant="success" className="title my-1 text-dark btn-lg">
            CLAIM
          </Button>
        </div>

        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold title">1ST MONTH 20 OCT 2022</h1>
          <Button variant="success" className="title my-1 text-dark btn-lg">
            CLAIM
          </Button>
        </div>

        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold title">1ST MONTH 20 NOV 2022</h1>
          <Button variant="success" className="title my-1 text-dark btn-lg">
            CLAIM
          </Button>
        </div>

        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold title">1ST MONTH 20 DEC 2022</h1>
          <Button variant="success" className="title my-1 text-dark btn-lg">
            CLAIM
          </Button>
        </div>
      </Card>
    </>
  );
}

export default Claim;
