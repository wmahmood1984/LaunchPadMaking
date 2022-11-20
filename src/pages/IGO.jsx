import { Tabs, Tab } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Live from "../components/Live";
import Upcoming from "../components/Upcoming";
import End from "../components/End";
import { useState,useEffect } from "react";
import { Contract } from '@ethersproject/contracts';
import { useWeb3React } from "@web3-react/core";
import { LaunchPadABI, LaunchPadAdd } from '../config.js';
import Web3 from "web3"



export const getContract = (library, account,chainId) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(LaunchPadAdd[`${chainId}`],LaunchPadABI, signer);
	return contract;
};


function IGO() {

  const { account,library, chainId} = useWeb3React();
  const [Data,setData] = useState()
  const myContract = getContract(library, account,chainId);
  const web3 = new Web3(Web3.givenProvider)

  useEffect(() => {
      const abc = async ()=>{
        const data = await myContract.getPoolDetails()
        setData(data)
      }
      abc()
  }, [])

  const now = new Date().getTime()/1000

  const live = Data && Data.filter((item)=>web3.utils.toDecimal(item._IDOStart)<now && web3.utils.toDecimal(item._IDOEnd)>now)
  const UpComing = Data && Data.filter((item)=>web3.utils.toDecimal(item._IDOStart)>now)
  const _end = Data && Data.filter((item)=>web3.utils.toDecimal(item._IDOEnd)<now)
  
  
  


  return (
    <>
      <Navbar />
      <Tabs
        defaultActiveKey="inform"
        id="justify-tab-example"
        className="my-3"
        justify
      >
        <Tab eventKey="inform" title="LIVE" className="">
          <Live
          live={live} />
        </Tab>
        <Tab eventKey="swap" title="UPCOMING">
          <Upcoming
          UpComing={UpComing}
          />
        </Tab>
        <Tab eventKey="claim" title="END">
          <End 
          _end={_end}
          />
        </Tab>
      </Tabs>
    </>
  );
}

export default IGO;
