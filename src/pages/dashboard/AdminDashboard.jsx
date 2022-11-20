import { Container } from "react-bootstrap";
import PoolItem from "./components/PoolItem";
import AddPool from "./components/AddPool";
import { useState,useEffect } from "react";
import { Contract } from '@ethersproject/contracts';
import { useWeb3React } from "@web3-react/core";

import Web3 from "web3"
import { LaunchPadABI, LaunchPadAdd } from "../../config";



export const getContract = (library, account,chainId) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(LaunchPadAdd[`${chainId}`],LaunchPadABI, signer);
	return contract;
};



function AdminDashboard() {

  const { account,library,chainId } = useWeb3React();
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


  var filteredData = Data && Data.filter(item=>{

    return(item._token_owner[1]==account)})

    console.log("item",filteredData)

  return (
    <>
      <div className="dashboard">
        <Container>
          <h1 className="pt-4 fs-1">Welcome Back!</h1>
          <hr className="text-success" />
          <h2 className="py-3">Your Pools</h2>
          {Data && filteredData.map((v,e)=>
          <PoolItem 
          title={v._title_symbol}
          price={web3.utils.hexToNumberString(v._price)/1000000000000000000}
          poolId={v._address}
          />
          )}
          
          <AddPool />
        </Container>
      </div>
    </>
  );
}

export default AdminDashboard;
