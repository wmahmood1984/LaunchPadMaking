import { Card, Form } from "react-bootstrap";

function InformAction({ edit,
  vesting,
  setVesting,
  IDOstart,
  setIDOStart,
  IDOEnd,
  setIDOEnd, }) {
  return (
    <>
      <Card bg="dark" className="border border-3 border-success my-3 infoDiv">
        <Card.Header className="fs-1 fw-bolder text-center text-success ">
          PROJECT INFO
        </Card.Header>

        <Card.Body className="bg-dark px-2">
          {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">Symbol</h1>
            {edit ? (
              <Form.Group>
                <Form.Control
                  type="text"
                  className={
                    edit
                      ? "text-light mb-3"
                      : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                  }
                  value="GMEZ"
                  disabled={!edit}
                />
              </Form.Group>
            ) : (
              <h1 className="bg-dark text-success fw-bolder">GMEZ</h1>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN PRICE</h1>
            {edit ? (
              <Form.Group>
                <Form.Control
                  type="number"
                  className={
                    edit
                      ? "text-light mb-3"
                      : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                  }
                  value="0.1"
                  disabled={!edit}
                />
              </Form.Group>
            ) : (
              <h1 className="bg-dark text-success fw-bolder">$0.1</h1>
            )}
          </div> */}
          {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN RAISE</h1>
            {edit ? <Form.Group>
              <Form.Control
                type="number"
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value="1000"
                disabled={!edit}
              />
            </Form.Group> :
              
            <h1 className="bg-dark text-success fw-bolder">$10,000</h1>
            }
          </div> */}
          {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">SWAPPED AMOUNT</h1>
            {edit ? <Form.Group>
              <Form.Control
                type="number"
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value="200000"
                disabled={!edit}
              />
            </Form.Group> : 
            <h1 className="bg-dark text-success fw-bolder">20, 000, 000</h1>
            }
          </div> */}
          {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN NETWORK</h1>
            {edit ? <Form.Group>
              <Form.Control
                type="text"
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value="Smart Chain"
                disabled={!edit}
              />
            </Form.Group> : 
            <h1 className="bg-dark text-success fw-bolder">SMART CHAIN</h1>
            }
          </div> */}
          {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">ACCEPTABLE CURRENCY</h1>
            {edit ? <Form.Group>
              <Form.Control
                type="text"
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value="BUSD - 20"
                disabled={!edit}
              />
            </Form.Group> :
            <h1 className="bg-dark text-success fw-bolder">BUSD - 20</h1>
            }
          </div> */}
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">VESTING PERIOD</h1>
            {edit ? <Form.Group>
              <Form.Control
                type="date"
                onChange={(e)=>{setVesting(e.target.value)}}
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                 value={vesting*1000}
                disabled={!edit}
              />
            </Form.Group> : 
            <h1 className="bg-dark text-success fw-bolder">25% FOR 4 MONTHS</h1>
            }
          </div>
        </Card.Body>
      </Card>

      {/* Pool Timeline */}
      <Card
        bg="dark"
        className="border border-3 px-3 border-success my-3 infoDiv"
      >
        <Card.Header className="fs-1 fw-bolder text-center text-success">
          POOL TIMELINE
        </Card.Header>
        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">IDO TIME</h1>
          {edit ? <Form.Group>
              <Form.Control
                type="date"
                onChange={(e)=>{setIDOStart(e.target.value)}}
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value={IDOstart}
                disabled={!edit}
              />
            </Form.Group> : 
          <h1 className="bg-dark text-success fw-bolder">
            1ST MONTH 20 AUG 2022
          </h1>
            }
        </div>
        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">IDO END</h1>
          {edit ? <Form.Group>
              <Form.Control
                type="date"
                onChange={(e)=>{setIDOEnd(e.target.value)}}
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value={IDOEnd}
                disabled={!edit}
              />
            </Form.Group> : 
          <h1 className="bg-dark text-success fw-bolder">
            1ST MONTH 20 AUG 2022
          </h1>
            }
        </div>

        {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">BUYING PHASE</h1>
          {edit ? <Form.Group>
              <Form.Control
                type="text"
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value="FCFS"
                disabled={!edit}
              />
            </Form.Group> : 
          <h1 className="bg-dark text-success fw-bolder">FCFS</h1>
            }
        </div> */}

        {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">CLAIM</h1>
          {edit ? <Form.Group>
              <Form.Control
                type="date"
                className={
                  edit
                    ? "text-light mb-3"
                    : "border border-0 fs-1 bg-transparent text-success fw-bolder"
                }
                value="1000 GMEZ"
                disabled={!edit}
              />
            </Form.Group> : 
          <h1 className="bg-dark text-success fw-bolder">25% FOR 4 MONTHS</h1>
            }
        </div> */}
      </Card>
    </>
  );
}

export default InformAction;
