import { Button, Nav, Navbar, Container , Badge} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "./../../Img/logo.png";
import React,{useState,useEffect} from 'react'
import { useWeb3React } from "@web3-react/core";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Contract } from '@ethersproject/contracts';
import { LaunchPadABI, LaunchPadAdd, logoArray } from '../../config';
import { toast,ToastContainer } from "react-toastify";
import { Injected,WalletConnect } from "../../connector.js"
import metamask from "../../Img/201-2010951_metamask-ethereum.png"
import walletC from "../../Img/WalletConnect-Logo.png"
import 'react-toastify/dist/ReactToastify.css';
import Web3 from "web3"

export const getContract = (library, account,chainId) => {
	const signer = library?.getSigner(account).connectUnchecked();
	var contract = new Contract(LaunchPadAdd[`${chainId}`],LaunchPadABI, signer);
	return contract;
};


function NavbarH() {
  const [open, setOpen] = useState(false);
  const { account,library,chainId } = useWeb3React();
  const [Admin,setAdmin] = useState();
  const [network, setNetwork] = useState(chainId)
  const myContract = network && account? getContract(library, account,chainId): null;
  const web3 = new Web3(Web3.givenProvider)



useEffect(() => {

  if(account && network){

    const abc = async ()=>{
      const response = await myContract.WhitelistMapping(account)
      const _admin = await myContract.admin()
      setAdmin(_admin)
      if (response) {


        toast(`YOU ARE ALLOCATED`, {
          type: "success",
          position: toast.POSITION.BOTTOM_CENTER,
          closeOnClick: true,
          });
      }else{
          console.log("condition met")
//        window.alert("YOU ARE NOT ALLOCATED. CONNECT TO THE ADMIN.")
                toast(`YOU ARE NOT ALLOCATED`, {
                type: "failure",
                position: toast.POSITION.BOTTOM_CENTER,
                closeOnClick: true,
                });
      }
  
    }
    abc()
  }
}, [account])

useEffect(() => {
  const abc = async ()=>{
    const _admin = await myContract.admin()
    setAdmin(_admin)


  }
  abc()
}, [account,network])

console.log("network",network)


window.ethereum.on("accountsChanged",(e,r)=>{window.location.reload()})

if (window.ethereum.networkVersion !== network) {
  try {
     window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: web3.utils.toHex(network) }]
    });
  } catch (err) {
      // This error code indicates that the chain has not been added to MetaMask
    if (err.code === 4902) {
      // await window.ethereum.request({
      //   method: 'wallet_addEthereumChain',
      //   params: [
      //     {
      //       chainName: 'Polygon Mainnet',
      //       chainId: web3.utils.toHex(chainId),
      //       nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
      //       rpcUrls: ['https://polygon-rpc.com/']
      //     }
      //   ]
      // });
      toast("This chain is not configured in your metamask",{
        type: "failure",
        position: toast.POSITION.BOTTOM_CENTER,
        closeOnClick: true,
        })
    }
  }
}



  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        bg="black"
        fixed="top"
        className="py-3"
      >
        <Container>
          <Navbar.Brand fluid href="#home" className="">
            <img src={Logo} alt="" width="230px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto gap-2">

            <ToastContainer />
              <Link to='/igo'>

              <Nav.Link
                className="text-white fs-5 fw-bold text-hover-white disabled"
                >
                IGO
                {/* <Badge pill bg="danger" className="mx-2">SOON</Badge> */}
              </Nav.Link>
                </Link>
              <Nav.Link className="text-white fs-5 text-hover-white disabled">
                INO
                <Badge pill bg="danger" className="mx-2">SOON</Badge>
              </Nav.Link>
              <Nav.Link className="text-white fs-5 text-hover-white disabled">
                STAKE
                <Badge pill bg="danger" className="mx-2">SOON</Badge>
              </Nav.Link>
              <Nav.Link className="text-white fs-5 text-hover-white disabled">
                MARKETPLACE
                <Badge pill bg="danger" className="mx-2">SOON</Badge>
              </Nav.Link>
              {Admin && account===Admin?
              <Link to='/panel'>
              <Nav.Link className="text-white fs-5 text-hover-white disabled">
                ADMIN PANEL

              </Nav.Link>
              </Link>             
              :null}

              {Admin && account===Admin?
              <Link to='/dashboard'>
              <Nav.Link className="text-white fs-5 text-hover-white disabled">
                CREATE POOL

              </Nav.Link>
              </Link>
              :null}
 
              

              
            </Nav>
            <Nav>
              {/* <Nav.Link className=""> */}
                <Button variant="outline-warning" onClick={()=>{setOpen(true)}}>{
            account? `${account.slice(0,7)}...${account.slice(-4)}` : "CONNECT"
            }</Button>
              {/* </Nav.Link> */}
            </Nav>
            <ResponsiveDialog open={open} setOpen={setOpen} network={network} setNetwork={setNetwork}/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarH;



function ResponsiveDialog({open,setOpen,network,setNetwork}) {



  const { activate,deactivate } = useWeb3React();
  const handleClose = () => {
      setOpen(false);
      activate(WalletConnect)
    };
  
  const handleClose2 = () => {
      setOpen(false);
      activate(Injected)
    };

  const handleDeactivate = () => {
      setOpen(false);
      deactivate()
    };

  return (
      <div>
        <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
       Please Choose Network
      </DialogTitle>
      <DialogContent>

          

        <DialogContentText id="alert-dialog-description">
          <div>
            <div 
            style={{ cursor: "pointer" }}
            onClick={()=>{setNetwork("97")}}>
            <span><img width="40px" src={logoArray["97"]}></img></span>
            <span>Binance</span>
            </div>
            
            <br/>
            <div         style={{ cursor: "pointer" }} onClick={()=>{setNetwork("4")}}>
            <span><img width="40px" src={logoArray["4"]}></img></span>
            <span>Ethereum</span>
            </div>
             
            <br/>
            <div         style={{ cursor: "pointer" }} onClick={()=>{setNetwork("80001")}}>
            <span><img width="40px" src={logoArray["80001"]}></img></span>
            <span>Polygon</span>
            </div>
             
            <br/>
            <div         style={{ cursor: "pointer" }} onClick={()=>{setNetwork("43113")}}>
            <span><img width="40px" src={logoArray["43113"]}></img></span>
            <span>Avalanche</span>
            </div>
            
          </div>
    
        </DialogContentText>
        
      </DialogContent>
      <DialogTitle id="alert-dialog-title">
       Please Choose Wallet
      </DialogTitle>
      <DialogContent>

          

        <DialogContentText id="alert-dialog-description">
                  <button
                    style={{ cursor: `${network? "pointer": null}`, border:"none", width:"200px" }}
                    onClick={handleClose2}
                    disabled={network==undefined}
                  >
                    <span>
                      <img
                        width="40px"
                        src={metamask}
                        alt="img"
                      />
                    </span>
                    MetaMask
                  </button>
                  <br/>
                  <button
                    style={{ cursor: `${network? "pointer": null}`, border:"none", width:"200px" }}
                    onClick={handleClose}
                    disabled={network==undefined}
                  >
                    <span>
                      <img
                        width="40px"
                        src={walletC}
                        alt="img"
                      />
                    </span>
                    Wallet Connect
                  </button>
                  <br/>
                  <span 
                   style={{ cursor: "pointer" }}
                  onClick={handleDeactivate}
                  >
                    De-Activate
                  </span>

    
        </DialogContentText>
        
      </DialogContent>
      <DialogActions>


      </DialogActions>
    </Dialog>
        
      </div>
   
  );
}