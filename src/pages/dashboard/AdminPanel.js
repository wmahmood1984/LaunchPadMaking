import React from 'react'
import { useState,useEffect } from 'react'
import { Contract } from '@ethersproject/contracts';
import { useWeb3React } from "@web3-react/core";
import { LaunchPadABI, LaunchPadAdd } from '../../config';


export const getContract = (library, account,chainId) => {
	const signer = library.getSigner(account).connectUnchecked();
	var contract = new Contract(LaunchPadAdd[`${chainId}`],LaunchPadABI, signer);
	return contract;
};

export default function  AdminPanel() {
    const web3reactContext = useWeb3React()
    const [address,setAddress] = useState("")
    const [address1,setAddress1] = useState("")
    const myContract = getContract(web3reactContext.library, web3reactContext.account,web3reactContext.chainId);
    const [admin,setAdmin] = useState("")
  

    useEffect(()=>{
        const abc = async ()=>{
          const response = await myContract.admin()
          setAdmin(response)
    
        }
        abc()
    
      },[])



      const addWhiteList = async ()=>{
         try {
            myContract.addWhiteListSingle(address,{
              gasLimit: 230000
            })
          } catch (error) {
            console.log("error in handle claim",error)
          }
       
        
      }


      const removeWhiteList = async ()=>{
        try {
           myContract.removeWhiteListSingle(address1,{
             gasLimit: 230000
           })
         } catch (error) {
           console.log("error in handle claim",error)
         }
      
       
     }
  
  
    return (
    <div 
    style={{color:"white"}}
    >
    <h1>Admin Penel</h1>
    <div style={{border:"1px white solid", width:"400px", height:"150px"}}>Upload Single Whitelist 
    <br/>
    <input type="text" placeholder='Please enter wallet here' value={address} onChange={(e)=>{setAddress(e.target.value)}}/>
    <br/>
    <button onClick={addWhiteList}> 
    Add Whitelist
    </button>

    <div>{admin && admin}</div>

    </div>

    <div style={{border:"1px white solid", width:"400px", height:"150px"}}>Remove Single Whitelist 
    <br/>
    <input type="text" placeholder='Please enter wallet here' value={address1} onChange={(e)=>{setAddress1(e.target.value)}}/>
    <br/>
    <button onClick={removeWhiteList}> 
    Remove Whitelist
    </button>

    <div>{admin && admin}</div>

    </div>
    
        
    </div>
  )
}
