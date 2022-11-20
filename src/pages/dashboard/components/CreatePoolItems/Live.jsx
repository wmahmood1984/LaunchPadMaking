import { Contract } from '@ethersproject/contracts';
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import Details from "./Details";
import { BUSD, LaunchPadABI, LaunchPadAdd, tempAdmin, tokenObj } from '../../../../config.js';
import React,{useState,useEffect} from 'react'
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";

import { useNavigate } from 'react-router-dom';
import ResponsiveDialog from '../../../Spinner';

const ipfsClient = require('ipfs-http-client');
const projectId = '2HdKrtd8GBGyqmO0u1BW2Re1hSK';
const projectSecret = '624bcf5bf92747f385771188371089f4';
const auth =
    'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');



export const getContract = (library, account,poolId) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(LaunchPadAdd[`${poolId}`],LaunchPadABI, signer);
	return contract;
};


function Live({ live, poolItemLive, createpoolLive }) {
  const { account,library, chainId} = useWeb3React();
  const [open, setOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [title,setTitle] = useState("abc")
  const [token,setToken] = useState(tokenObj[`${chainId}`])
  const [owner,setOwner] = useState(tempAdmin)
  const [noOfToken,setNoOFTokens] = useState(1000000)
  const [price,setPrice] = useState(0.1)
  const [hash,setHash] = useState("abc")
  const [twitter,setTwitter] = useState("abc@twitter.com")
  const [medium,setMedium] = useState("abc@medium.com")
  const [telegram,setTelegram] = useState("abc@telegram.com")
  const [telegramGroup,setTeleGramGroup] = useState("abcTelegramGroup")
  const [Max,setMax] = useState(1000)
  const [Min,setMin] = useState(1)
  const [vesting,setVesting] = useState(1668767119)
  const [IDOstart,setIDOStart] = useState(1668567119)
  const [IDOEnd,setIDOEnd] = useState(1668667119)
  const [currency,setCurrency] = useState(BUSD[`${chainId}`])
  const [vestingMonths,setVestingMonths] = useState()
  const web3 = new Web3(Web3.givenProvider)
  const navigate = useNavigate()
  




  //const myContract = getContract(library, account);
  const myContract = new web3.eth.Contract(LaunchPadABI,LaunchPadAdd[`${chainId}`])

  console.log("title", Date.parse(vesting))

  const createPool = async ()=>{
    var counter = 0 
    setOpen(true)
    try {
       const tx = await myContract.methods.createICO(
        title,
        [token,owner,account,currency],
        web3.utils.toWei(noOfToken.toString(),"ether") ,
        web3.utils.toWei(price.toString(),"ether") ,
        hash,twitter+"/"+medium+"/"+telegram+"/"+telegramGroup,
        web3.utils.toWei(Max.toString(),"ether"), 
        web3.utils.toWei(Min.toString(),"ether"),
        [Date.parse(vesting)/1000,vestingMonths],
        Date.parse(IDOstart)/1000,
        Date.parse(IDOEnd)/1000).send({from:account, gasLimit: 3000000})
        .on("confirmation",(e,r)=>{
          if(counter===0){
            setOpen(false)
            navigate("/")
            counter++
          }

        }
        
          )
       
        // await tx.wait(()=>{console.log("awaiting...")})

      } catch (error) {
       console.log("error in handle claim",error)
     }
  }

   var imageBugger;


   const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

const captureFile = async(e)=>{
      e.preventDefault()
    const file = e.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = async ()=>{
     imageBugger = Buffer(reader.result)
      console.log("buffer",imageBugger)
  client.add(imageBugger).then((res) => {
    setHash(`https://gateway.pinata.cloud/ipfs/${res.path}`)

});}
}



  const handleAddDetails = () => {
    setShowDetails((prevState) => !prevState);
  };


  return (
    <>
      <div className="text-center">
        <Button
          onClick={() => poolItemLive()}
          variant="dark fs-1 text-center fw-bold mx-auto w-50 my-3 border-success border-3"
          className={createpoolLive ? 'd-none' : ''}
        >
          Create pool
        </Button>
      </div>
      {createpoolLive ? (
        <Card
          bg="dark"
          key="dark"
          text="light"
          className="border border-4 border-success mb-4"
        >
          <Card.Header className="bg-dark py-3">
            <Nav fill variant="pills">
              <Nav.Item className="bg-dark">
                <Form.Group className="mb-3 text-light w-50 mx-auto">
                  <Form.Label>Add Logo</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={captureFile}
                    placeholder="Pool Title"
                    className="text-light"
                  />
                </Form.Group>
              </Nav.Item>
              <Nav.Item className="bg-dark ">
                <div className="">
                  <Form.Group className="mb-3 text-light w-50 mx-auto">
                    <Form.Label>Btc Logo</Form.Label>
                    <Form.Control
                      type="file"
                      placeholder="Pool Title"
                      className="text-light"
                    />
                  </Form.Group>
                </div>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body className="bg-dark">
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                className="text-light border border-0 fs-1 bg-transparent "
                id="title"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
                placeholder="Title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                className="text-light border border-0 fs-1 bg-transparent "
                id="token"
                value={token}
                onChange={(e)=>{setToken(e.target.value)}}
                placeholder="Token Address"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                className="text-light border border-0 fs-1 bg-transparent "
                id="owner"
                value={owner}
                onChange={(e)=>{setOwner(e.target.value)}}
                placeholder="Owner Address"
              />
            </Form.Group>
            

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                className="text-light border border-0 fs-1 bg-transparent "
                id="gemx"
                value={noOfToken}
                onChange={(e)=>{setNoOFTokens(e.target.value)}}
                placeholder="GEMZ"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                className="text-light border border-0 fs-1 bg-transparent "
                id="gemx"
                value={price}
                onChange={(e)=>{setPrice(e.target.value)}}
                placeholder="Price - ($)"
              />
            </Form.Group>

            {/* <div>
              <div className="d-flex bg-dark m-0 justify-content-between">
                <h4 className="bg-dark">Progress</h4>
                <h3 className="text-success bg-dark fw-bold">9/10</h3>
              </div>
              <ProgressBar variant="success" now={90} />
            </div> */}

            <div className="text-center pt-3 bg-dark">
              <Button
                variant="warning"
                className="btn-lg w-50"
                onClick={() => handleAddDetails()}
              >
                Add Details
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}

      {showDetails ? <Details
         
        noOfToken={noOfToken}
        price={price}
        twitter = {twitter}
        setTwitter = {setTwitter}
        medium = {medium}
        setMedium = {setMedium}
        telegram = {telegram}
        setTelegram = {setTelegram}
        telegramGroup = {telegramGroup}
        setTeleGramGroup = {setTeleGramGroup}
        Max = {Max}
        setMax = {setMax}
        Min = {Min}
        setMin = {setMin}
        vesting = {vesting}
        setVesting = {setVesting}
        IDOstart = {IDOstart}
        setIDOStart = {setIDOStart}
        IDOEnd = {IDOEnd}
        setIDOEnd = {setIDOEnd}
        createPool={createPool}
        setCurrency={setCurrency}
        setVestingMonths={setVestingMonths}

      live={live} /> : ""}
            <ResponsiveDialog open={open}/>
    </>
  );
}

export default Live;









  // const captureFile = async (e)=>{
  //   e.preventDefault()
  //   const file = e.target.files[0]
  //   const reader = new window.FileReader()
  //   reader.readAsArrayBuffer(file)
  //   reader.onloadend = async ()=>{
  //    imageBugger = Buffer(reader.result)
  //     console.log("buffer",imageBugger)
      
  //     ipfs.files.add(Buffer(reader.result), (error,result)=>{
  //       if(error){
  //         console.error("error",error)
  //         return
  //       }
  //       setHash(result[0].hash);
  //       console.log(`https://gateway.pinata.cloud/ipfs/${result[0].hash}`);
  //       //window.open(`https://gateway.pinata.cloud/ipfs/${result[0].hash}`)
  //     })
    
  //   }


  // }


  
  
  // const handleSubmit = async (e)=>{
  //   e.preventDefault()

  //   await ipfs.files.add(imageBugger, (error,result)=>{
  //     if(error){
  //       console.error("error",error)
  //       return
  //     }
  //     setFileHash(result[0].hash);
  //     console.log(`https://gateway.pinata.cloud/ipfs/${result[0].hash}`);
  //     //window.open(`https://gateway.pinata.cloud/ipfs/${result[0].hash}`)
  //   })

  // }
