import avalanche from "./Img/a.png"
import binance from "./Img/binance.png"
import ethereum from "./Img/ethereum.png"
import polygon from "./Img/polygon.png"

export const LaunchPadABI = [
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_users",
				"type": "address[]"
			}
		],
		"name": "addWhiteListBulk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "addWhiteListSingle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title_symbol",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_token_owner",
				"type": "address[]"
			},
			{
				"internalType": "uint256",
				"name": "_noOfTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "SocialMedia",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_max",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_min",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "_vesting",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_IDOStart",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_IDOEnd",
				"type": "uint256"
			}
		],
		"name": "createICO",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "_users",
				"type": "address[]"
			}
		],
		"name": "removeWhiteListBulk",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "removeWhiteListSingle",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPoolDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "address[]",
						"name": "_token_owner",
						"type": "address[]"
					},
					{
						"internalType": "string",
						"name": "_title_symbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "_noOfTokens",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "_hash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "SocialMedia",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "_max",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_min",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "_vesting",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256",
						"name": "_IDOStart",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_IDOEnd",
						"type": "uint256"
					}
				],
				"internalType": "struct LaundhPadMaking.ICO[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ICOArray",
		"outputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_title_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_noOfTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "SocialMedia",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_max",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_min",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_IDOStart",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_IDOEnd",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ICOIndex",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "ICOMapping",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "WhitelistMapping",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const IGOAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title_symbol",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_token_owner",
				"type": "address[]"
			},
			{
				"internalType": "uint256",
				"name": "_noOfTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_socialMedia",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_max",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_min",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "_vesting",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_IDOStart",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_IDOEnd",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_busd",
				"type": "uint256"
			}
		],
		"name": "Buy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "checkWhiteList",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_title_symbol",
				"type": "string"
			},
			{
				"internalType": "address[]",
				"name": "_token_owner",
				"type": "address[]"
			},
			{
				"internalType": "uint256",
				"name": "_noOfTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_socialMedia",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_max",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_min",
				"type": "uint256"
			},
			{
				"internalType": "uint256[]",
				"name": "_vesting",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_IDOStart",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_IDOEnd",
				"type": "uint256"
			}
		],
		"name": "editPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "factory",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "_title_symbol",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "_token_owner",
						"type": "address[]"
					},
					{
						"internalType": "uint256",
						"name": "_noOfTokens",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_price",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "_hash",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "SocialMedia",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "_max",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_min",
						"type": "uint256"
					},
					{
						"internalType": "uint256[]",
						"name": "_vesting",
						"type": "uint256[]"
					},
					{
						"internalType": "uint256",
						"name": "_IDOStart",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "_IDOEnd",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "investedTokens",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "investedBUSD",
						"type": "uint256"
					}
				],
				"internalType": "struct ICOSale2.ICO",
				"name": "",
				"type": "tuple"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "noOfClaims",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "selfInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_title_symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_noOfTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_price",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hash",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "SocialMedia",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_max",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_min",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_IDOStart",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_IDOEnd",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "investedTokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "investedBUSD",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "totalClaimed",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userEntitlement",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

export const IERC20 = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "initialSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burnFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

export const tokenObj = {
	"43113" : "0xb70F71cdCAd4Db7da3d171c62Abf8382c01b8f32",
		"97" : "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
		"5" : "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502",
		"80001" : "0xf4e9Bb60792d5BdF356F142cD7dF37238A305502"
}


export var chainIdSelected = undefined

export const setChainId = (id)=>{chainIdSelected=id}

export const tempAdmin = "0x77547F859Ca0F1114c25Db094Bb0f682dD47512D"//"0xF85ee861F7360E5882FE1efE8DFc29C204d4BfaE"

export const LaunchPadAdd = {
	"43113" : "0x7478DdBA12f62eA60dB55Db9Ff2b1e1e4CB91702",
		"97" : "0xD6f592128f06c1c94eeAcD252093877b7274978b",
		"5" : "0x4e4cefab704e4579bf28d32230ddecf0117ae9c1",
		"80001" : "0x4e4cefab704e4579bf28d32230ddecf0117ae9c1"
}

	

export const BUSD = {
	"43113" : "0x5425890298aed601595a70AB815c96711a31Bc65",
		"97" : "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684",
		"5" : "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684",
		"80001" : "0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684"
}



export const logoArray = {
		"43113" : avalanche,
		"97" : binance,
		"5" : ethereum,
		"80001" : polygon
}


export const chainArray = {
	"43113" : "Avalanche",
	"97" : "Binance",
	"5" : "Ethereum",
	"80001" : "Polygon"
}

export const acceptableArray = ["0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684","0x7ef95a0FEE0Dd31b22626fA2e10Ee6A223F8a684"]

export const acceptableObj = {

}
