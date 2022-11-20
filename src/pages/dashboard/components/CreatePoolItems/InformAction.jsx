import { useWeb3React } from "@web3-react/core";
import { Button, Card, Form } from "react-bootstrap";
import { chainArray } from "../../../../config";

function InformAction({ 
  price,
  vesting,
  setVesting,
  IDOstart,
  setIDOStart,
  IDOEnd,
  setIDOEnd,
  createPool,
  setCurrency,
  setVestingMonths,
  edit }) {

    const {chainId} = useWeb3React()
  return (
    <>
      <Card bg="dark" className="border border-3 border-success my-3 infoDiv">
        <Card.Header className="fs-1 fw-bolder text-center text-success ">
          PROJECT INFO
        </Card.Header>

        <Card.Body className="bg-dark px-2">
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">Symbol</h1>
              <Form.Group>
                <Form.Control
                  type="text"
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  placeholder="GMEZ"
                />
              </Form.Group>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN PRICE</h1>
            <Form.Group>
                <Form.Control
                  type="number"
                  value={price}
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  placeholder="$$$"
                />
              </Form.Group>
          </div>
          {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN RAISE</h1>
            <Form.Group>
                <Form.Control
                  type="number"
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  placeholder="$$$"
                />
              </Form.Group>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">SWAPPED AMOUNT</h1>
            <Form.Group>
                <Form.Control
                  type="number"
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  placeholder="$$$"
                />
              </Form.Group>
          </div> */}
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN NETWORK</h1>
            <Form.Group>
                <Form.Control
                  type="text"
                  value={chainArray[`${chainId}`]}
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  placeholder="Smart"
                />
              </Form.Group>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">ACCEPTABLE CURRENCY</h1>
            <Form.Group>
                <Form.Select
                  type="text"
                  onChange={(e)=>{setCurrency(e.target.value)}}
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  placeholder="BSC"
                >
                <option>Open this select menu</option>
                <option value="0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684">BUSD</option>
                <option value="0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684">USDT</option>
              

                </Form.Select>
              </Form.Group>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">VESTING PERIOD</h1>
            <Form.Group>
                <Form.Control
                  type="date"
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  value={vesting}
                  onChange={(e)=>{
                    setVesting(e.target.value)

                  }}
                  placeholder="GMEZ"
                />
              </Form.Group>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">No. of vesting months</h1>
          <Form.Group>
                <Form.Control
                  type="number"
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  placeholder="months"
                  onChange={(e)=>{setVestingMonths(e.target.value)}}
                />
              </Form.Group>
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
          <Form.Group>
                <Form.Control
                  type="date"
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  value={IDOstart}
                  onChange={(e)=>{setIDOStart(e.target.value)}}
                  placeholder="GMEZ"
                />
              </Form.Group>
        </div>
        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">IDO END</h1>
          <Form.Group>
                <Form.Control
                  type="date"
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  value={IDOEnd}
                  onChange={(e)=>{setIDOEnd(e.target.value)}}
                  placeholder="GMEZ"
                />
              </Form.Group>
        </div>


        {/* <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">CLAIM</h1>
          <Form.Group>
                <Form.Control
                  type="date"
                  className="text-light mb-3 border border-1 bg-transparent text-success fw-bolder"
                  placeholder="GMEZ"
                />
              </Form.Group>
        </div> */}

      </Card>
        <Button 
        onClick={createPool}
        variant='outline-success' className="btn-lg w-100 my-5">Create</Button>
    </>
  );
}

export default InformAction;
