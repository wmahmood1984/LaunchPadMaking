import React, { useState,useEffect } from "react";
import { Button, Container, Form, Tab, Tabs } from "react-bootstrap";
import Live from "./EditPoolItems/Live";
import Upcoming from "./EditPoolItems/Upcoming";
import End from "./EditPoolItems/End";
import { Link } from "react-router-dom";
import { useParams } from 'react-router';

import Web3 from "web3"
import { useWeb3React } from "@web3-react/core";
import { Contract } from '@ethersproject/contracts';
import { IGOAbi } from "../../../config";




export const getContract = (library, account,poolId) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(poolId,IGOAbi, signer);
	return contract;
};




function EditPool() {
  const {poolId} = useParams()
  const [upcoming, setUpcoming] = useState(false)
  const [edit] = useState(true)
  const [end, setEnd] = useState(false)
  const [live, setLive] = useState(false)
  const [editPool,setEditPool] = useState()


  const { account,library, } = useWeb3React();
  const myContract = getContract(library, account,poolId);

  const [_title,setTitle] = useState("abc")
  const [_symbol,setSymbol] = useState("abc")
  const [token,setToken] = useState("0xf4e9Bb60792d5BdF356F142cD7dF37238A305502")
  const [owner,setOwner] = useState("0x77547F859Ca0F1114c25Db094Bb0f682dD47512D")
  const [noOfToken,setNoOFTokens] = useState(1000000)
  const [_price,setPrice] = useState(0.1)
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
  const web3 = new Web3(Web3.givenProvider)
  useEffect(() => {
    const abc = async ()=>{
      const data = await myContract.selfInfo()
 
      const array = data._title_symbol.split("/")

      setTitle(array[0])
       setSymbol(array[1])
       setToken(data._token_owner[0])
       setOwner(data._token_owner[1])
       setNoOFTokens(data._noOfTokens)
       setPrice(data._price)
       setHash(data._hash)
       
       const array2 = data.SocialMedia.split("/")

       setTwitter(array2[0])
       setMedium(array2[1])
       setTelegram(array2[2])
       setTeleGramGroup(array2[3])
       setMax(data._max)
       setMin(data._min)
       setVesting(data._vesting)
       setIDOStart(data._IDOStart)
       setIDOEnd(data._IDOEnd)

       setEditPool(EditPool)

    }
    abc()
}, [])

console.log("details")



const _EditPool = async ()=>{
try {
   myContract.editPool(
    _title,
    [token,owner],
    web3.utils.toWei(noOfToken.toString(),"ether") ,
    web3.utils.toWei(_price.toString(),"ether") ,
    hash,twitter+"/"+medium+"/"+telegram+"/"+telegramGroup,
    web3.utils.toWei(Max.toString(),"ether"), 
    web3.utils.toWei(Min.toString(),"ether"),
    [Date.parse(vesting)/1000,5],
    Date.parse(IDOstart)/1000,
    Date.parse(IDOEnd)/1000,
    
    {gasLimit: 3000000})
 } catch (error) {
   console.log("error in handle claim",error)
 }
}




  
  const handleUpcoming = () => {
    setUpcoming(true)
  }
  const handleEnd = () => {
    setEnd(true)
  }
  const handleLive = () => {
    setLive(true)
  }
  return (
    <div className="editPool">
      <Container>
        <div className="d-flex align-items-center justify-content-between mt-4">
            <Link to='/dashboard'>
        <Button variant='dark'>Back</Button>
            </Link>
        <h1 className="text-center fw-bold text-light">Edit Pool</h1>
        <Button 
        onClick={_EditPool}
        variant='outline-success'>Save Changes</Button>
        </div>
       <Form>
       <Tabs
          defaultActiveKey="live"
          id="justify-tab-example"
          className="my-3 mt-5"
          justify
        >
           <Tab eventKey="live" title="LIVE" onClick={() => handleLive()}>
            <Live
              setHash={setHash}
              _title={_title}
              setTitle={setTitle}
              noOfToken={noOfToken}
              setNoOFTokens={setNoOFTokens}
              _symbol={_symbol}
              _price={_price}
              setPrice={setPrice}
             poolId={poolId}
            twitter={twitter}
            setTwitter={setTwitter}
            medium={medium}
            setMedium={setMedium}
            telegram={telegram}
            setTelegram={setTelegram}
            telegramGroup={telegramGroup}
            setTeleGramGroup={setTeleGramGroup}
            Max={Max}
            setMax={setMax}
            Min={Min}
            setMin={setMin}
            vesting={vesting}
            setVesting={setVesting}
            IDOstart={IDOstart}
            setIDOStart={setIDOStart}
            IDOEnd={IDOEnd}
            setIDOEnd={setIDOEnd}
           
            edit={edit} live={live} />
          </Tab>
          <Tab eventKey="upcoming" title="UPCOMING" onClick={() => handleUpcoming()}>
            <Upcoming edit={edit}  upcoming={upcoming} />
          </Tab>
          <Tab eventKey="end" title="END" onClick={() => handleEnd()}>
            <End edit={edit}  end={end} />
          </Tab>
        </Tabs>
       </Form>
      </Container>
    </div>
  );
}

export default EditPool;
