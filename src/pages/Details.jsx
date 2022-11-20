import {
  Button,
  Card,
  Container,
  ProgressBar,
  Tabs,
  Tab,
  Form
} from "react-bootstrap";
import { Link } from "react-router-dom";
import binance from "../Img/binance.png";
import logo from "../Img/logo.png";
import logoOrg from "../Img/movpadOrg.png";
import { FaFacebook, FaTwitter, FaSnapchat, FaMedium, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import InformAction from "../components/InformAction";
import Swap from "../components/Swap";
import Claim from "../components/Claim";
import Winner from "../components/Winner";
import Navbar from "../components/Navbar";
import { useParams } from 'react-router';
import { useWeb3React } from "@web3-react/core";
import { Contract } from '@ethersproject/contracts';
import { BUSD, chainArray, IERC20, IGOAbi, logoArray } from "../config";
import { useState,useEffect } from "react";
import Web3 from "web3"
import ResponsiveDialog from "./Spinner";




export const getContract = (library, account,poolId) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(poolId,IGOAbi, signer);
	return contract;
};


export const getContract2 = (library, account,chainId) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(BUSD[`${chainId}`],IERC20, signer);
	return contract;
};


function Details() {
  const web3 = new Web3(Web3.givenProvider)
  const {poolId} = useParams()
  const { account,library,chainId } = useWeb3React();
  const [Data,setData] = useState()
  const [amount,setAmount] = useState()
  const [_sm,setSM] = useState()
  const [_to,setTokenOwner] = useState()
  const [_vesting,setVesting] = useState()
  const [_title_Symbol,setTitleSymbol] = useState()
  const [entitlement,setEntitlement] = useState()
  const [toggle,setToggle] = useState(false)
  const [open,setOpen] = useState(false)
  const [phrase,setPhrase] = useState("")
  const [noClaimed,setNoClaimed] = useState()
  const [whiteList,setWhiteList] = useState("")
  const [Allowance,setAllowance] = useState()
//  const myContract = getContract(library, account,poolId);
  const myContract = new web3.eth.Contract(IGOAbi,poolId)
//  const BUSDContract = getContract2(library, account,chainId);
  const BUSDContract = new web3.eth.Contract(IERC20,BUSD[`${chainId}`]);
 

  useEffect(() => {
    const abc = async ()=>{
      const data = await myContract.methods.getDetails().call()
      const ent = await myContract.methods.userEntitlement(account).call()
      const _noclaim = await myContract.methods.noOfClaims(account).call()
      const _wl = await myContract.methods.checkWhiteList(account).call()
      const _all = await BUSDContract.methods.allowance(account,poolId).call()
      setAllowance(web3.utils.hexToNumberString(_all)/1000000000000000000)
      setWhiteList(_wl)
      setNoClaimed(_noclaim)
      setEntitlement(ent)
      setData(data[0])
      setTokenOwner(data[1])
      setVesting(data[2])
      setSM(data[0].SocialMedia.split("/"))
      setTitleSymbol(data[0]._title_symbol.split("/"))
    }
    abc()
}, [toggle])

console.log("details",BUSDContract)


const Approve = async ()=>{
  var counter = 0
  setOpen(true)
  try {
     BUSDContract.methods.approve(
      poolId,web3.utils.toWei(amount.toString(),"ether"),      
      ).send({from:account,gasLimit: 3000000})
      .on("confirmation",(e,r)=>{
        if(counter===0){
          setToggle(!toggle)
          setOpen(false)
          counter++
        }
      })
   } catch (error) {
     console.log("error in Approve",error)
   }
}


const _Swap = async ()=>{
  var counter = 0
  setOpen(true)
  var tokens = amount / web3.utils.hexToNumberString(Data._price._hex)/1000000000000000000
  try {
     myContract.methods.Buy(
      web3.utils.toWei(amount.toString(),"ether"),)
      .send({from:account,gasLimit: 3000000})
      .on("confirmation",(e,r)=>{
        if(counter===0){
          setToggle(!toggle)
          setOpen(false)
          setPhrase(`YOU GOT ${tokens} GEMZ TOKEN $${amount}`)
          counter++
        }
      })
   } catch (error) {
     console.log("error in Swap",error)
   }
}






  return (
    <>
    {Data && 
    <div>

    <Navbar 
    account={account}
    />
      <Container>
        <Link to="/igo">
          <Button className="btn-dark btn-lg">BACK</Button>
        </Link>
        <Card
          bg="dark"
          text="light"
          className="mt-4 border border-3 border-success"
        >
          <div className="bg-dark text-light d-flex align-items-center justify-content-around p-3">
            <div>
              <img
                src={logoArray[`${chainId}`]}
                width="60px"
                className="m-0 bg-dark bnbLogo"
                alt=""
              />
            </div>
            <div>
              <div className="d-flex align-items-center m-0 bg-dark">
                <img
                  src={Data && Data._hash}
                  alt=""
                  width="100px"
                  className="bg-dark logoInDetails"
                />
                <span className="bg-dark fs-1 fw-bolder px-3">IGO</span>
              </div>
              <div className="bg-dark">
                <FaFacebook className="fs-1 mx-0 bg-dark" />
                <FaTwitter className="fs-1 mx-3 bg-dark" />
                <FaSnapchat className="fs-1 mx-0 bg-dark" />
              </div>
            </div>
          </div>

          

          
        </Card>
        <Card bg="dark" key="dark" text="white" className="my-3 py-3 border border-3 border-success swapDiv">
            <Card.Header className="fs-1 text-success fw-bolder text-center">
              SWAP INFO
            </Card.Header>
            <Card.Body className="bg-dark">
              <div className="d-flex align-items-center justify-content-between   bg-dark">
                <Card.Title className="fs-1 bg-dark fw-bolder title">
                  TOTAL AMOUNT
                </Card.Title>
                <Card.Title className="fs-1 bg-dark fw-bolder title">
                  1 {_title_Symbol[1]} = <span className="bg-dark text-success">${Data && web3.utils.hexToNumberString(Data._price._hex)/1000000000000000000}</span>
                </Card.Title>
                <Form.Group className="mb-3">
              <Form.Control
                type="text"
                className="text-light border border-0 fs-1 bg-transparent "
                id="amount"
                value={amount}
                onChange={(e)=>{setAmount(e.target.value)}}
                placeholder="Amount"
              />
            </Form.Group>
              </div>
              <Card.Text className="text-success bg-dark">
                <Card.Subtitle className="fs-1 fw-bolder bg-dark my-3 title">
                {Data && web3.utils.hexToNumberString(Data._noOfTokens._hex)/1000000000000000000} {_title_Symbol[1]}
                </Card.Subtitle>
                <div className="border border-2 border-success rounded mb-3 p-2 fs-1 d-flex align-items-center justify-content-between bg-dark">
                  <h1 className="bg-dark fw-bolder fs-1 title">{Data && web3.utils.hexToNumberString(Data._max._hex)/1000000000000000000} {_title_Symbol[1]}</h1>
                  <span className="bg-warning px-5 text-dark fw-bold max rounded">
                    MAX
                  </span>
                </div>
                <div className="border border-2 border-success rounded p-2 fs-1 d-flex align-items-center justify-content-between bg-dark">
                  <h1 className="bg-dark fw-bolder fs-1 title">{Data && web3.utils.hexToNumberString(Data._min._hex)/1000000000000000000} {_title_Symbol[1]}</h1>
                  <span className="bg-warning px-5 text-dark fw-bold max rounded">
                    MAX
                  </span>
                </div>
              </Card.Text>
            </Card.Body>
            {whiteList && whiteList? 
             <Card.Footer className="d-flex flex-wrap align-items-center justify-content-around">
             <Button
              onClick={Approve}
              variant="outline-success"
              className="btn-lg fs-2 px-4 fw-bold  title swapBtn"
            >
              APPROVE
            </Button> 

            <Button
              onClick={_Swap}
              variant="outline-success"
              className="btn-lg fs-2 px-4 title fw-bold swapBtn"
              disabled={Allowance<=amount}
            >
              SWAP
            </Button> 
          </Card.Footer>
            : 
            <Card.Footer className="d-flex flex-wrap align-items-center justify-content-around">
                  <span className="bg-warning px-5 text-dark fw-bold max rounded">
                    You are not in WhiteList. Please connect Admin.
                  </span>
            </Card.Footer>
            
            }
           
          </Card>
        <Card bg="dark" text="light" className="px-5 my-5 border border-3 border-success swapDiv">
            <Card.Header className="fs-1 fw-bolder text-center text-success title">
              SWAP PROGRESS
            </Card.Header>
            <Card.Footer>
              <ProgressBar variant="success" now={
                  Data && web3.utils.hexToNumberString(Data.investedBUSD)/1000000000000000000 / 
                  (web3.utils.hexToNumberString(Data._noOfTokens._hex)/100000000000000000 * web3.utils.hexToNumberString(Data._price._hex)/1000000000000000000)*100
                } />
              <div className="d-flex align-items-center pt-3 justify-content-between bg-dark">
                <h1 className="bg-dark fw-bolder title">{
                  (Data && web3.utils.hexToNumberString(Data.investedBUSD)/1000000000000000000 / 
                  (web3.utils.hexToNumberString(Data._noOfTokens._hex)/100000000000000000 * web3.utils.hexToNumberString(Data._price._hex)/1000000000000000000)*100).toFixed(2)
                }%</h1>
                <h1 className="bg-dark fw-bolder title">{
                  Data && web3.utils.hexToNumberString(Data.investedBUSD)/1000000000000000000
                }/{Data && web3.utils.hexToNumberString(Data._noOfTokens._hex)/100000000000000000 * web3.utils.hexToNumberString(Data._price._hex)/1000000000000000000}</h1>
              </div>
            </Card.Footer>
          </Card>
        <Tabs
          defaultActiveKey="inform"
          id="justify-tab-example"
          className="my-4"
          justify
        >
          <Tab eventKey="inform" title="INFORM" className="">
            <InformAction
              symbol={_title_Symbol[1]}
              price={Data && web3.utils.hexToNumberString(Data._price._hex)/1000000000000000000}
              tokenRaised={Data && web3.utils.hexToNumberString(Data.investedTokens._hex)/1000000000000000000}
              swappedAmount={Data && web3.utils.hexToNumberString(Data.investedBUSD._hex)/1000000000000000000}
              network={chainArray[`${chainId}`]}
              acceptableCurrency={"BUSD"}
              vesting={Data && web3.utils.hexToNumberString(_vesting[0]._hex)}
              vestingMonths={Data && web3.utils.hexToNumberString(_vesting[1]._hex)}

              start={Data && web3.utils.hexToNumberString(Data._IDOStart._hex)}
              end={Data && web3.utils.hexToNumberString(Data._IDOEnd._hex)}
            />
          </Tab>
          <Tab eventKey="swap" title="SWAP">
            <Swap 
            poolId={poolId}
            phrase={phrase}
            />
          </Tab>
          <Tab eventKey="claim" title="CLAIM">
            <Claim
            entitlement={entitlement && web3.utils.hexToNumberString(entitlement._hex)/1000000000000000000} 
            vesting={_vesting}
            setToggle={setToggle}
            toggle={toggle}
            poolId={poolId}
            noClaimed={noClaimed}
            />
          </Tab>
          <Tab eventKey="winner" title="WINNER">
            <Winner />
          </Tab>
        </Tabs>

        
        <div className="text-center my-4">
          <Link to='/'>
          <img src={logoOrg} width="300px" className="mt-3 mb-2" alt="logo" />
          </Link>   
          <div>
            <a href={Data && _sm[0]} target='_blank' rel="noreferrer" style={{textDecoration: 'none'}}>
                <FaTwitter className="fs-1 mx-3 text-secondary" />
            </a>
            <a href={Data && _sm[1]} rel="noreferrer"  target='_blank'>

            <FaMedium  className="fs-1 mx-3 text-secondary" />
            </a>
            <a href={Data && _sm[2]} rel="noreferrer"  target='_blank'>

            <FaTelegram  className="fs-1 mx-3 text-secondary" />
            </a>
            <a href={Data && _sm[3]} rel="noreferrer"  target='_blank'>

            <FaTelegramPlane  className="fs-1 mx-3 text-secondary" />
            </a>
              </div>
        </div>
      </Container>
      <ResponsiveDialog open={open}/>
    </div>
    }

    </>
  );
}

export default Details;
