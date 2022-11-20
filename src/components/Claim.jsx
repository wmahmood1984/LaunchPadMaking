import { useWeb3React } from "@web3-react/core";
import { Button, Card } from "react-bootstrap";
import Web3 from "web3"
import { IGOAbi } from "../config";

function Claim({vesting,entitlement,poolId,setToggle,toggle,noClaimed}) {
  const days = ["Sun","Mon","Tues","Wed","Thu","Fri","Sat"]
  const web3 = new Web3(Web3.givenProvider)
  const contract = new web3.eth.Contract(IGOAbi,poolId)
  const {account} = useWeb3React()





  const _claim = async ()=>{
  var counter = 0
  try {
    contract.methods.claim().send({from:account})
    .on("confirmation",(e,r)=>{
      if(counter===0){
        setToggle(!toggle)
        counter++
      }
    })
  } catch (error) {
    
  }
}
console.log("con",contract)

    function dateFormat(string){
      var day = new Date(string).getDay()
      var date = new Date(string).getUTCDate()
      var month = new Date(string).getUTCMonth()+1
      var _year1 = new Date(string).getUTCFullYear()
      
      return `${days[day]} ${date}:${month}:${_year1}`
    }

  const array = [];


  for(var i = 0; i < vesting[1]; i++){
    array.push(i+1)
  }

  function formatting(num){
    if(num%10==1){
      return "st"
    }else if(num%10==2){
      return "nd"
    }else if(num%10==3){
      return "rd"
    }else{
      return "th"
    }
  }
  

  const now = new Date().getTime()

  return (
    <>{
      entitlement>0? 
      <Card
      bg="dark"
      className="border border-3 px-3 border-success my-3 swapDiv"
    >
      <Card.Header className="fs-1 fw-bolder text-center text-success">
        CLAIM - Vesting Start {dateFormat(vesting[0]*1000)}
      </Card.Header>

      
      { array.map((v,e)=>
      <div className="d-flex align-items-center justify-content-between bg-dark text-white">
      <h1 className="bg-dark fw-bold title">{`${v}${formatting(v)}`} MONTH {dateFormat((vesting[0]*1000+(v*30*24*60*60*1000)))}</h1>
      <Button 
      onClick={_claim}
      variant="success" className="title my-1 text-dark btn-lg" 
      disabled={now<((vesting[0]*1000)+(v*24*30*60*60*1000))}
      >
        CLAIM
      </Button>
    </div>
      )}
      
      
      


    </Card>
      : null
    }
   
    </>
  );
}

export default Claim;
