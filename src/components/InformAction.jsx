import { Card } from "react-bootstrap";

function InformAction({
  symbol,price,tokenRaised,swappedAmount,network,acceptableCurrency,vesting,start,end,vestingMonths
        })
        
  {

const days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]

    function dateFormat(string){
      var day = new Date(string).getDay()
      var date = new Date(string).getUTCDate()
      var month = new Date(string).getUTCMonth()+1
      var _year1 = new Date(string).getUTCFullYear()
      
      return `${days[day]} ${date}:${month}:${_year1}`
    }
    
  return (
    <>
      <Card bg="dark" className="border border-3 border-success my-3 infoDiv">
        <Card.Header className="fs-1 fw-bolder text-center text-success ">
          PROJECT INFO
        </Card.Header>

        <Card.Body className="bg-dark px-2">
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">Symbol</h1>
            <h1 className="bg-dark text-success fw-bolder">{symbol}</h1>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN PRICE</h1>
            <h1 className="bg-dark text-success fw-bolder">${price}</h1>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN RAISE</h1>
            <h1 className="bg-dark text-success fw-bolder">{tokenRaised}</h1>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">SWAPPED AMOUNT</h1>
            <h1 className="bg-dark text-success fw-bolder">${swappedAmount}</h1>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">TOKEN NETWORK</h1>
            <h1 className="bg-dark text-success fw-bolder">{network}</h1>
          </div>
          <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">ACCEPTABLE CURRENCY</h1>
            <h1 className="bg-dark text-success fw-bolder">{acceptableCurrency}</h1>
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
          <h1 className="bg-dark text-success fw-bolder">
            {dateFormat(start*1000)}
          </h1>
        </div>
        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">IDO TIME</h1>
          <h1 className="bg-dark text-success fw-bolder">
            {dateFormat(end*1000)}
          </h1>
        </div>
        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
            <h1 className="bg-dark fw-bold">VESTING Start</h1>
            <h1 className="bg-dark text-success fw-bolder">{dateFormat(vesting[0]*1000)}</h1>
          </div>
        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">BUYING PHASE</h1>
          <h1 className="bg-dark text-success fw-bolder">FCFS</h1>
        </div>

        <div className="d-flex align-items-center justify-content-between bg-dark text-white">
          <h1 className="bg-dark fw-bold">CLAIM</h1>
          <h1 className="bg-dark text-success fw-bolder">{Math.floor(100/vestingMonths)}% FOR {`${vestingMonths}`} MONTH(S)</h1>
        </div>
      </Card>
    </>
  );
}

export default InformAction;
