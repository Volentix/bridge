const json = {
    "contractName": "VTX",
    "abi": [
      {
        "inputs": [],
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
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenHolder",
            "type": "address"
          }
        ],
        "name": "AuthorizedOperator",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "operatorData",
            "type": "bytes"
          }
        ],
        "name": "Burned",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
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
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "operatorData",
            "type": "bytes"
          }
        ],
        "name": "Minted",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "tokenHolder",
            "type": "address"
          }
        ],
        "name": "RevokedOperator",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
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
            "name": "amount",
            "type": "uint256"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "indexed": false,
            "internalType": "bytes",
            "name": "operatorData",
            "type": "bytes"
          }
        ],
        "name": "Sent",
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
            "name": "holder",
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
        "type": "function",
        "constant": true
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
            "name": "value",
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
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "authorizeOperator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "tokenHolder",
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
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "burn",
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
        "stateMutability": "pure",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "defaultOperators",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [],
        "name": "granularity",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenHolder",
            "type": "address"
          }
        ],
        "name": "isOperatorFor",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
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
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "operatorData",
            "type": "bytes"
          }
        ],
        "name": "operatorBurn",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          },
          {
            "internalType": "bytes",
            "name": "operatorData",
            "type": "bytes"
          }
        ],
        "name": "operatorSend",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "operator",
            "type": "address"
          }
        ],
        "name": "revokeOperator",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
          }
        ],
        "name": "send",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "type": "function",
        "constant": true
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
        "type": "function",
        "constant": true
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "recipient",
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
            "name": "holder",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "recipient",
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
    ],
    "metadata": "{\"compiler\":{\"version\":\"0.6.7+commit.b8d736ae\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"AuthorizedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Burned\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"RevokedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Sent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"authorizeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultOperators\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"granularity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"isOperatorFor\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorSend\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"revokeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"send\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"Very simple ERC777 Token example, where all tokens are pre-assigned to the creator. Note they can later distribute these tokens as they wish using `transfer` and other `ERC20` or `ERC777` functions. Based on https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/examples/SimpleToken.sol\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.     * Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}.     * Note that accounts cannot have allowance issued by their operators.\"},\"authorizeOperator(address)\":{\"details\":\"See {IERC777-authorizeOperator}.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by an account (`tokenHolder`).\"},\"burn(uint256,bytes)\":{\"details\":\"See {IERC777-burn}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"constructor\":{\"details\":\"Constructor that gives msg.sender all of existing tokens.\"},\"decimals()\":{\"details\":\"See {ERC20-decimals}.     * Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility).\"},\"defaultOperators()\":{\"details\":\"See {IERC777-defaultOperators}.\"},\"granularity()\":{\"details\":\"See {IERC777-granularity}.     * This implementation always returns `1`.\"},\"isOperatorFor(address,address)\":{\"details\":\"See {IERC777-isOperatorFor}.\"},\"name()\":{\"details\":\"See {IERC777-name}.\"},\"operatorBurn(address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorBurn}.     * Emits {Burned} and {IERC20-Transfer} events.\"},\"operatorSend(address,address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorSend}.     * Emits {Sent} and {IERC20-Transfer} events.\"},\"revokeOperator(address)\":{\"details\":\"See {IERC777-revokeOperator}.\"},\"send(address,uint256,bytes)\":{\"details\":\"See {IERC777-send}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"symbol()\":{\"details\":\"See {IERC777-symbol}.\"},\"totalSupply()\":{\"details\":\"See {IERC777-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}.     * Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract.     * Also emits a {Sent} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}.    * Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators).    * Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events.\"}},\"title\":\"VTX\"},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/sylvltx/bridge/volentix_eth_contracts/contracts/VTXToken.sol\":\"VTX\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/sylvltx/bridge/volentix_eth_contracts/contracts/VTXToken.sol\":{\"keccak256\":\"0x4972e354edeabfe2ad2993aa55939604255db5405eabd23248202a04472c5213\",\"urls\":[\"bzz-raw://488c25c657dbb2b70f4b412fb9cb23981ac68e17770e4ebaabefc7b1edab53b2\",\"dweb:/ipfs/QmcC7uDDXZFRWByvA1CfeZrGrN8JvBnomZz6awtZeywA4g\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/IERC1820Registry.sol\":{\"keccak256\":\"0xdf8d7d1a119fc0d9f73a5c7a5d21bb0a4e0acb2a61e393c26334d397db628768\",\"urls\":[\"bzz-raw://1e471d73d901c48a465167257403f331454f4c34a945fb5cec10a57690193686\",\"dweb:/ipfs/QmemL8Nxf6SdTkQPq2SZMyNpkMAts5sL2dB2iHktzgPKeR\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/token/ERC777/ERC777.sol\":{\"keccak256\":\"0xb05eb2b0516eabc19a112b20fe61940bf8100644f1c1fd8d090baabad3972e1a\",\"urls\":[\"bzz-raw://d139ba2135f975466dbdc519c6ac5561e408db09c69c806d9e59f16e0b5903a1\",\"dweb:/ipfs/Qmb3SD7Zw1QirY1PqSkQRyBT7ss3BDi1vJ2KjJz1dnVu7T\"]},\"@openzeppelin/contracts/token/ERC777/IERC777.sol\":{\"keccak256\":\"0x7846aa81baa00557eba6215442eab916bc98f2e692fdc7b8523cf31122dc8e28\",\"urls\":[\"bzz-raw://40a5491dcdcdbea4bf8695e1c75f5f723dcd19c1392e8ff7a5fc56e13b5794e1\",\"dweb:/ipfs/QmcAFeKKXAFFEzCShHhT65smF8SDhhMg5oWmU3TWKPpTFT\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol\":{\"keccak256\":\"0xc9e219f9060c261ab6d140f448ccdcb207ce9835f0d2868d2c5d4a93486d2208\",\"urls\":[\"bzz-raw://a03ae88229a14e3c0060e558300ba7ab5bdcea10aa814c80d6148e0914d4fdf3\",\"dweb:/ipfs/QmYS76B2bAVTcuzmtYVAt6mY4qr16tZSsWP7dUWdcAgRww\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Sender.sol\":{\"keccak256\":\"0xe4be617d1e043920582d2ec0bc1fe3985a3a49cfedac80c0cf0b9ea5d31044b5\",\"urls\":[\"bzz-raw://1beb3d95ab30460159efed1fc39f9253a3bb66ce50253fc487d927b7fe32165d\",\"dweb:/ipfs/QmVtVWHT6vVfFknNX9gxtrX1xYoLbq8YeZLZrSKYcCyKY8\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]}},\"version\":1}",
    "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600881526020017f566f6c656e7469780000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f5654580000000000000000000000000000000000000000000000000000000000815250600067ffffffffffffffff811180156200009757600080fd5b50604051908082528060200260200182016040528015620000c75781602001602082028036833780820191505090505b508260029080519060200190620000e092919062000c37565b508160039080519060200190620000f992919062000c37565b5080600490805190602001906200011292919062000cbe565b5060008090505b600480549050811015620001c557600160056000600484815481106200013b57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550808060010191505062000119565b50731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d3060405180807f455243373737546f6b656e000000000000000000000000000000000000000000815250600b0190506040518091039020306040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b158015620002cb57600080fd5b505af1158015620002e0573d6000803e3d6000fd5b50505050731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d3060405180807f4552433230546f6b656e00000000000000000000000000000000000000000000815250600a0190506040518091039020306040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b158015620003e957600080fd5b505af1158015620003fe573d6000803e3d6000fd5b5050505050505062000442336a084595161401484a00000060405180602001604052806000815250604051806020016040528060008152506200044860201b60201c565b62000dbb565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415620004ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6000620004fe6200079c60201b60201c565b9050620005158160008787620007a460201b60201c565b6200053184600154620007aa60201b62002a211790919060201c565b6001819055506200058f846000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620007aa60201b62002a211790919060201c565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620005ea8160008787878760016200083360201b60201c565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015620006885780820151818401526020810190506200066b565b50505050905090810190601f168015620006b65780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015620006f1578082015181840152602081019050620006d4565b50505050905090810190601f1680156200071f5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a38473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b600033905090565b50505050565b60008082840190508381101562000829576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015620008f257600080fd5b505afa15801562000907573d6000803e3d6000fd5b505050506040513d60208110156200091e57600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000b54578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101562000a7857808201518184015260208101905062000a5b565b50505050905090810190601f16801562000aa65780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101562000ae157808201518184015260208101905062000ac4565b50505050905090810190601f16801562000b0f5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801562000b3557600080fd5b505af115801562000b4a573d6000803e3d6000fd5b5050505062000be1565b811562000be05762000b878673ffffffffffffffffffffffffffffffffffffffff1662000beb60201b62002aa91760201c565b1562000bdf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d81526020018062003b46604d913960600191505060405180910390fd5b5b5b5050505050505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801562000c2e57506000801b8214155b92505050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000c7a57805160ff191683800117855562000cab565b8280016001018555821562000cab579182015b8281111562000caa57825182559160200191906001019062000c8d565b5b50905062000cba919062000d4d565b5090565b82805482825590600052602060002090810192821562000d3a579160200282015b8281111562000d395782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000cdf565b5b50905062000d49919062000d75565b5090565b62000d7291905b8082111562000d6e57600081600090555060010162000d54565b5090565b90565b62000db891905b8082111562000db457600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010162000d7c565b5090565b90565b612d7b8062000dcb6000396000f3fe608060405234801561001057600080fd5b50600436106101165760003560e01c8063959b8c3f116100a2578063d95b637111610071578063d95b63711461074f578063dd62ed3e146107cb578063fad8b32a14610843578063fc673c4f14610887578063fe9d930314610a0357610116565b8063959b8c3f1461053d57806395d89b41146105815780639bd9bbc614610604578063a9059cbb146106e957610116565b806323b872dd116100e957806323b872dd14610281578063313ce56714610307578063556f0dc71461032b57806362ad1b831461034957806370a08231146104e557610116565b806306e485381461011b57806306fdde031461017a578063095ea7b3146101fd57806318160ddd14610263575b600080fd5b610123610ac8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561016657808201518184015260208101905061014b565b505050509050019250505060405180910390f35b610182610b56565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c25780820151818401526020810190506101a7565b50505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102496004803603604081101561021357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bf8565b604051808215151515815260200191505060405180910390f35b61026b610c1b565b6040518082815260200191505060405180910390f35b6102ed6004803603606081101561029757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c25565b604051808215151515815260200191505060405180910390f35b61030f610e83565b604051808260ff1660ff16815260200191505060405180910390f35b610333610e8c565b6040518082815260200191505060405180910390f35b6104e3600480360360a081101561035f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156103c657600080fd5b8201836020820111156103d857600080fd5b803590602001918460018302840111640100000000831117156103fa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561045d57600080fd5b82018360208201111561046f57600080fd5b8035906020019184600183028401116401000000008311171561049157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610e95565b005b610527600480360360208110156104fb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f11565b6040518082815260200191505060405180910390f35b61057f6004803603602081101561055357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f59565b005b6105896111d0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105c95780820151818401526020810190506105ae565b50505050905090810190601f1680156105f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106e76004803603606081101561061a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561066157600080fd5b82018360208201111561067357600080fd5b8035906020019184600183028401116401000000008311171561069557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611272565b005b610735600480360360408110156106ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061129c565b604051808215151515815260200191505060405180910390f35b6107b16004803603604081101561076557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113c0565b604051808215151515815260200191505060405180910390f35b61082d600480360360408110156107e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611571565b6040518082815260200191505060405180910390f35b6108856004803603602081101561085957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115f8565b005b610a016004803603608081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108e457600080fd5b8201836020820111156108f657600080fd5b8035906020019184600183028401116401000000008311171561091857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561097b57600080fd5b82018360208201111561098d57600080fd5b803590602001918460018302840111640100000000831117156109af57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061186f565b005b610ac660048036036040811015610a1957600080fd5b810190808035906020019092919080359060200190640100000000811115610a4057600080fd5b820183602082011115610a5257600080fd5b80359060200191846001830284011164010000000083111715610a7457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506118e7565b005b60606004805480602002602001604051908101604052809291908181526020018280548015610b4c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610b02575b5050505050905090565b606060028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bee5780601f10610bc357610100808354040283529160200191610bee565b820191906000526020600020905b815481529060010190602001808311610bd157829003601f168201915b5050505050905090565b600080610c0361190d565b9050610c10818585611915565b600191505092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612c616024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610d32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612cda6026913960400191505060405180910390fd5b6000610d3c61190d565b9050610d6a818686866040518060200160405280600081525060405180602001604052806000815250611b0c565b610d96818686866040518060200160405280600081525060405180602001604052806000815250611e26565b610e498582610e4486604051806060016040528060298152602001612cb160299139600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b611915565b610e7781868686604051806020016040528060008152506040518060200160405280600081525060006121f5565b60019150509392505050565b60006012905090565b60006001905090565b610ea6610ea061190d565b866113c0565b610efb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612c85602c913960400191505060405180910390fd5b610f0a85858585856001612590565b5050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8073ffffffffffffffffffffffffffffffffffffffff16610f7861190d565b73ffffffffffffffffffffffffffffffffffffffff161415610fe5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612bcf6024913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156110cf576007600061104361190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905561116c565b6001600660006110dd61190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b61117461190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112685780601f1061123d57610100808354040283529160200191611268565b820191906000526020600020905b81548152906001019060200180831161124b57829003601f168201915b5050505050905090565b61129761127d61190d565b848484604051806020016040528060008152506001612590565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611323576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612c616024913960400191505060405180910390fd5b600061132d61190d565b905061135b818286866040518060200160405280600081525060405180602001604052806000815250611b0c565b611387818286866040518060200160405280600081525060405180602001604052806000815250611e26565b6113b581828686604051806020016040528060008152506040518060200160405280600081525060006121f5565b600191505092915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806114d85750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156114d75750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b5b806115695750600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61160061190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611684576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612bf36021913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611777576001600760006116e461190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061180b565b6006600061178361190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690555b61181361190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b61188061187a61190d565b856113c0565b6118d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612c85602c913960400191505060405180910390fd5b6118e1848484846126f9565b50505050565b6119096118f261190d565b8383604051806020016040528060008152506126f9565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561199b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612b3f6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612d236023913960400191505060405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611bca57600080fd5b505afa158015611bde573d6000803e3d6000fd5b505050506040513d6020811015611bf457600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e1d578073ffffffffffffffffffffffffffffffffffffffff166375ab97828888888888886040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611d4c578082015181840152602081019050611d31565b50505050905090810190601f168015611d795780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015611db2578082015181840152602081019050611d97565b50505050905090810190601f168015611ddf5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015611e0457600080fd5b505af1158015611e18573d6000803e3d6000fd5b505050505b50505050505050565b611e3286868686612a1b565b611e9d83604051806060016040528060278152602001612b86602791396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611f30836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612a2190919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561202557808201518184015260208101905061200a565b50505050905090810190601f1680156120525780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561208b578082015181840152602081019050612070565b50505050905090810190601f1680156120b85780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a48373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b60008383111582906121e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121a757808201518184015260208101905061218c565b50505050905090810190601f1680156121d45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b1580156122b357600080fd5b505afa1580156122c7573d6000803e3d6000fd5b505050506040513d60208110156122dd57600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612509578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612434578082015181840152602081019050612419565b50505050905090810190601f1680156124615780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561249a57808201518184015260208101905061247f565b50505050905090810190601f1680156124c75780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156124ec57600080fd5b505af1158015612500573d6000803e3d6000fd5b50505050612586565b81156125855761252e8673ffffffffffffffffffffffffffffffffffffffff16612aa9565b15612584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d815260200180612c14604d913960600191505060405180910390fd5b5b5b5050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415612616576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b646022913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156126b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a2073656e6420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b60006126c361190d565b90506126d3818888888888611b0c565b6126e1818888888888611e26565b6126f0818888888888886121f5565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561277f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612bad6022913960400191505060405180910390fd5b600061278961190d565b90506127988186600087612a1b565b6127a781866000878787611b0c565b61281284604051806060016040528060238152602001612d00602391396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061286984600154612af490919063ffffffff16565b6001819055508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561290b5780820151818401526020810190506128f0565b50505050905090810190601f1680156129385780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612971578082015181840152602081019050612956565b50505050905090810190601f16801561299e5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b50505050565b600080828401905083811015612a9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015612aeb57506000801b8214155b92505050919050565b6000612b3683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612135565b90509291505056fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220332cc8e71d39e2d070e9f2b71f8e640a2d71960098420897ff809c01eb56197464736f6c634300060700334552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e74",
    "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101165760003560e01c8063959b8c3f116100a2578063d95b637111610071578063d95b63711461074f578063dd62ed3e146107cb578063fad8b32a14610843578063fc673c4f14610887578063fe9d930314610a0357610116565b8063959b8c3f1461053d57806395d89b41146105815780639bd9bbc614610604578063a9059cbb146106e957610116565b806323b872dd116100e957806323b872dd14610281578063313ce56714610307578063556f0dc71461032b57806362ad1b831461034957806370a08231146104e557610116565b806306e485381461011b57806306fdde031461017a578063095ea7b3146101fd57806318160ddd14610263575b600080fd5b610123610ac8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561016657808201518184015260208101905061014b565b505050509050019250505060405180910390f35b610182610b56565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101c25780820151818401526020810190506101a7565b50505050905090810190601f1680156101ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102496004803603604081101561021357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610bf8565b604051808215151515815260200191505060405180910390f35b61026b610c1b565b6040518082815260200191505060405180910390f35b6102ed6004803603606081101561029757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c25565b604051808215151515815260200191505060405180910390f35b61030f610e83565b604051808260ff1660ff16815260200191505060405180910390f35b610333610e8c565b6040518082815260200191505060405180910390f35b6104e3600480360360a081101561035f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156103c657600080fd5b8201836020820111156103d857600080fd5b803590602001918460018302840111640100000000831117156103fa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561045d57600080fd5b82018360208201111561046f57600080fd5b8035906020019184600183028401116401000000008311171561049157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610e95565b005b610527600480360360208110156104fb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f11565b6040518082815260200191505060405180910390f35b61057f6004803603602081101561055357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f59565b005b6105896111d0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105c95780820151818401526020810190506105ae565b50505050905090810190601f1680156105f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106e76004803603606081101561061a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561066157600080fd5b82018360208201111561067357600080fd5b8035906020019184600183028401116401000000008311171561069557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611272565b005b610735600480360360408110156106ff57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061129c565b604051808215151515815260200191505060405180910390f35b6107b16004803603604081101561076557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506113c0565b604051808215151515815260200191505060405180910390f35b61082d600480360360408110156107e157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611571565b6040518082815260200191505060405180910390f35b6108856004803603602081101561085957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506115f8565b005b610a016004803603608081101561089d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156108e457600080fd5b8201836020820111156108f657600080fd5b8035906020019184600183028401116401000000008311171561091857600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561097b57600080fd5b82018360208201111561098d57600080fd5b803590602001918460018302840111640100000000831117156109af57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061186f565b005b610ac660048036036040811015610a1957600080fd5b810190808035906020019092919080359060200190640100000000811115610a4057600080fd5b820183602082011115610a5257600080fd5b80359060200191846001830284011164010000000083111715610a7457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506118e7565b005b60606004805480602002602001604051908101604052809291908181526020018280548015610b4c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610b02575b5050505050905090565b606060028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bee5780601f10610bc357610100808354040283529160200191610bee565b820191906000526020600020905b815481529060010190602001808311610bd157829003601f168201915b5050505050905090565b600080610c0361190d565b9050610c10818585611915565b600191505092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cac576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612c616024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610d32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180612cda6026913960400191505060405180910390fd5b6000610d3c61190d565b9050610d6a818686866040518060200160405280600081525060405180602001604052806000815250611b0c565b610d96818686866040518060200160405280600081525060405180602001604052806000815250611e26565b610e498582610e4486604051806060016040528060298152602001612cb160299139600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b611915565b610e7781868686604051806020016040528060008152506040518060200160405280600081525060006121f5565b60019150509392505050565b60006012905090565b60006001905090565b610ea6610ea061190d565b866113c0565b610efb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612c85602c913960400191505060405180910390fd5b610f0a85858585856001612590565b5050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8073ffffffffffffffffffffffffffffffffffffffff16610f7861190d565b73ffffffffffffffffffffffffffffffffffffffff161415610fe5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612bcf6024913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16156110cf576007600061104361190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff021916905561116c565b6001600660006110dd61190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b61117461190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112685780601f1061123d57610100808354040283529160200191611268565b820191906000526020600020905b81548152906001019060200180831161124b57829003601f168201915b5050505050905090565b61129761127d61190d565b848484604051806020016040528060008152506001612590565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611323576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612c616024913960400191505060405180910390fd5b600061132d61190d565b905061135b818286866040518060200160405280600081525060405180602001604052806000815250611b0c565b611387818286866040518060200160405280600081525060405180602001604052806000815250611e26565b6113b581828686604051806020016040528060008152506040518060200160405280600081525060006121f5565b600191505092915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806114d85750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156114d75750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b5b806115695750600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61160061190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611684576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612bf36021913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611777576001600760006116e461190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061180b565b6006600061178361190d565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690555b61181361190d565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b61188061187a61190d565b856113c0565b6118d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180612c85602c913960400191505060405180910390fd5b6118e1848484846126f9565b50505050565b6119096118f261190d565b8383604051806020016040528060008152506126f9565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561199b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612b3f6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611a21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180612d236023913960400191505060405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611bca57600080fd5b505afa158015611bde573d6000803e3d6000fd5b505050506040513d6020811015611bf457600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611e1d578073ffffffffffffffffffffffffffffffffffffffff166375ab97828888888888886040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611d4c578082015181840152602081019050611d31565b50505050905090810190601f168015611d795780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015611db2578082015181840152602081019050611d97565b50505050905090810190601f168015611ddf5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015611e0457600080fd5b505af1158015611e18573d6000803e3d6000fd5b505050505b50505050505050565b611e3286868686612a1b565b611e9d83604051806060016040528060278152602001612b86602791396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611f30836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612a2190919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561202557808201518184015260208101905061200a565b50505050905090810190601f1680156120525780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561208b578082015181840152602081019050612070565b50505050905090810190601f1680156120b85780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a48373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b60008383111582906121e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156121a757808201518184015260208101905061218c565b50505050905090810190601f1680156121d45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b1580156122b357600080fd5b505afa1580156122c7573d6000803e3d6000fd5b505050506040513d60208110156122dd57600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614612509578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612434578082015181840152602081019050612419565b50505050905090810190601f1680156124615780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561249a57808201518184015260208101905061247f565b50505050905090810190601f1680156124c75780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156124ec57600080fd5b505af1158015612500573d6000803e3d6000fd5b50505050612586565b81156125855761252e8673ffffffffffffffffffffffffffffffffffffffff16612aa9565b15612584576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d815260200180612c14604d913960600191505060405180910390fd5b5b5b5050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415612616576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612b646022913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156126b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a2073656e6420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b60006126c361190d565b90506126d3818888888888611b0c565b6126e1818888888888611e26565b6126f0818888888888886121f5565b50505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141561277f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180612bad6022913960400191505060405180910390fd5b600061278961190d565b90506127988186600087612a1b565b6127a781866000878787611b0c565b61281284604051806060016040528060238152602001612d00602391396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546121359092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061286984600154612af490919063ffffffff16565b6001819055508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561290b5780820151818401526020810190506128f0565b50505050905090810190601f1680156129385780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612971578082015181840152602081019050612956565b50505050905090810190601f16801561299e5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b50505050565b600080828401905083811015612a9f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f9150808214158015612aeb57506000801b8214155b92505050919050565b6000612b3683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612135565b90509291505056fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220332cc8e71d39e2d070e9f2b71f8e640a2d71960098420897ff809c01eb56197464736f6c63430006070033",
    "sourceMap": "434:247:3:-:0;;;550:129;5:9:-1;2:2;;;27:1;24;17:12;2:2;550:129:3;2645:623:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;612:1:3;598:16;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;598:16:3;;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;125:4;109:14;101:6;88:42;156:4;148:6;144:17;134:27;;0:165;598:16:3;;;;2789:4:10;2781:5;:12;;;;;;;;;;;;:::i;:::-;;2813:6;2803:7;:16;;;;;;;;;;;;:::i;:::-;;2855;2830:22;:41;;;;;;;;;;;;:::i;:::-;;2886:9;2898:1;2886:13;;2881:136;2905:22;:29;;;;2901:1;:33;2881:136;;;3002:4;2955:17;:44;2973:22;2996:1;2973:25;;;;;;;;;;;;;;;;;;;;;;;;;2955:44;;;;;;;;;;;;;;;;:51;;;;;;;;;;;;;;;;;;2936:3;;;;;;;2881:136;;;;1235:42;3058:41;;;3108:4;3115:24;;;;;;;;;;;;;;;;;;;3149:4;3058:97;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3058:97:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3058:97:10;;;;1235:42;3165:41;;;3215:4;3222:23;;;;;;;;;;;;;;;;;;;3255:4;3165:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;3165:96:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3165:96:10;;;;2645:623;;;626:46:3::1;632:10;644:19;626:46;;;;;;;;;;;::::0;::::1;;;;;;;;;;;::::0;:5:::1;;;:46;;:::i;:::-;434:247:::0;;10335:725:10;10533:1;10514:21;;:7;:21;;;;10506:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10583:16;10602:12;:10;;;:12;;:::i;:::-;10583:31;;10625:59;10646:8;10664:1;10668:7;10677:6;10625:20;;;:59;;:::i;:::-;10744:24;10761:6;10744:12;;:16;;;;;;:24;;;;:::i;:::-;10729:12;:39;;;;10799:30;10822:6;10799:9;:18;10809:7;10799:18;;;;;;;;;;;;;;;;:22;;;;;;:30;;;;:::i;:::-;10778:9;:18;10788:7;10778:18;;;;;;;;;;;;;;;:51;;;;10840:88;10860:8;10878:1;10882:7;10891:6;10899:8;10909:12;10923:4;10840:19;;;:88;;:::i;:::-;10961:7;10944:57;;10951:8;10944:57;;;10970:6;10978:8;10988:12;10944:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10944:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10944:57:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11037:7;11016:37;;11033:1;11016:37;;;11046:6;11016:37;;;;;;;;;;;;;;;;;;10335:725;;;;;:::o;590:104:4:-;643:15;677:10;670:17;;590:104;:::o;17189:110:10:-;;;;;:::o;874:176:8:-;932:7;951:9;967:1;963;:5;951:17;;991:1;986;:6;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;1035:8;;;874:176;;;;:::o;15873:688:10:-;16130:19;1235:42;16152:41;;;16194:2;1883:66;16198:32;;16152:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;16152:79:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16152:79:10;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;16152:79:10;;;;;;;;;;;;;;;;16130:101;;16268:1;16245:25;;:11;:25;;;16241:314;;16303:11;16286:44;;;16331:8;16341:4;16347:2;16351:6;16359:8;16369:12;16286:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;16286:96:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;16286:96:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;16286:96:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16286:96:10;;;;16241:314;;;16403:19;16399:156;;;16447:15;:2;:13;;;;;;;:15;;:::i;:::-;16446:16;16438:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16399:156;16241:314;15873:688;;;;;;;;:::o;718:610:14:-;778:4;1036:16;1062:19;1084:66;1062:88;;;;1251:7;1239:20;1227:32;;1290:11;1278:8;:23;;:42;;;;;1317:3;1305:15;;:8;:15;;1278:42;1270:51;;;;718:610;;;:::o;434:247:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
    "deployedSourceMap": "434:247:3:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;434:247:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;7012:122:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;7012:122:10;;;;;;;;;;;;;;;;;3322:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3322:90:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8539:189;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;8539:189:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4083:115;;;:::i;:::-;;;;;;;;;;;;;;;;;;;9093:672;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;9093:672:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3746:74;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3935:87;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7253:366;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;7253:366:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;7253:366:10;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;7253:366:10;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7253:366:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7253:366:10;;;;;;;;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;7253:366:10;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;7253:366:10;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7253:366:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7253:366:10;;;;;;;;;;;;;;;:::i;:::-;;4298:142;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4298:142:10;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6081:405;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;6081:405:10;;;;;;;;;;;;;;;;;;;:::i;:::-;;3468:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3468:94:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4570:156;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4570:156:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;4570:156:10;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;4570:156:10;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;4570:156:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;4570:156:10;;;;;;;;;;;;;;;:::i;:::-;;4957:431;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4957:431:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5701:313;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5701:313:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;8258:143;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;8258:143:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6550:396;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;6550:396:10;;;;;;;;;;;;;;;;;;;:::i;:::-;;7740:279;;;;;;15:3:-1;10;7:12;4:2;;;32:1;29;22:12;4:2;7740:279:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;7740:279:10;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;7740:279:10;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7740:279:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7740:279:10;;;;;;;;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;7740:279:10;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;7740:279:10;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7740:279:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7740:279:10;;;;;;;;;;;;;;;:::i;:::-;;5518:120;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5518:120:10;;;;;;;;;;;;;;;;;;;27:11:-1;14;11:28;8:2;;;52:1;49;42:12;8:2;5518:120:10;;41:9:-1;34:4;18:14;14:25;11:40;8:2;;;64:1;61;54:12;8:2;5518:120:10;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;5518:120:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;5518:120:10;;;;;;;;;;;;;;;:::i;:::-;;7012:122;7070:16;7105:22;7098:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7012:122;:::o;3322:90::-;3368:13;3400:5;3393:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3322:90;:::o;8539:189::-;8613:4;8629:14;8646:12;:10;:12::i;:::-;8629:29;;8668:32;8677:6;8685:7;8694:5;8668:8;:32::i;:::-;8717:4;8710:11;;;8539:189;;;;:::o;4083:115::-;4153:7;4179:12;;4172:19;;4083:115;:::o;9093:672::-;9191:4;9236:1;9215:23;;:9;:23;;;;9207:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9315:1;9297:20;;:6;:20;;;;9289:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9371:15;9389:12;:10;:12::i;:::-;9371:30;;9412:61;9430:7;9439:6;9447:9;9458:6;9412:61;;;;;;;;;;;;;;;;;;;;;;;;:17;:61::i;:::-;9484:49;9490:7;9499:6;9507:9;9518:6;9484:49;;;;;;;;;;;;;;;;;;;;;;;;:5;:49::i;:::-;9543:112;9552:6;9560:7;9569:85;9602:6;9569:85;;;;;;;;;;;;;;;;;:11;:19;9581:6;9569:19;;;;;;;;;;;;;;;:28;9589:7;9569:28;;;;;;;;;;;;;;;;:32;;:85;;;;;:::i;:::-;9543:8;:112::i;:::-;9666:70;9686:7;9695:6;9703:9;9714:6;9666:70;;;;;;;;;;;;;;;;;;;;;;;;9730:5;9666:19;:70::i;:::-;9754:4;9747:11;;;9093:672;;;;;:::o;3746:74::-;3787:5;3811:2;3804:9;;3746:74;:::o;3935:87::-;3988:7;4014:1;4007:8;;3935:87;:::o;7253:366::-;7460:35;7474:12;:10;:12::i;:::-;7488:6;7460:13;:35::i;:::-;7452:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7554:58;7560:6;7568:9;7579:6;7587:4;7593:12;7607:4;7554:5;:58::i;:::-;7253:366;;;;;:::o;4298:142::-;4385:7;4411:9;:22;4421:11;4411:22;;;;;;;;;;;;;;;;4404:29;;4298:142;;;:::o;6081:405::-;6177:8;6161:24;;:12;:10;:12::i;:::-;:24;;;;6153:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6241:17;:27;6259:8;6241:27;;;;;;;;;;;;;;;;;;;;;;;;;6237:185;;;6291:24;:38;6316:12;:10;:12::i;:::-;6291:38;;;;;;;;;;;;;;;:48;6330:8;6291:48;;;;;;;;;;;;;;;;6284:55;;;;;;;;;;;6237:185;;;6407:4;6370:10;:24;6381:12;:10;:12::i;:::-;6370:24;;;;;;;;;;;;;;;:34;6395:8;6370:34;;;;;;;;;;;;;;;;:41;;;;;;;;;;;;;;;;;;6237:185;6466:12;:10;:12::i;:::-;6437:42;;6456:8;6437:42;;;;;;;;;;;;6081:405;:::o;3468:94::-;3516:13;3548:7;3541:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3468:94;:::o;4570:156::-;4665:54;4671:12;:10;:12::i;:::-;4685:9;4696:6;4704:4;4665:54;;;;;;;;;;;;4714:4;4665:5;:54::i;:::-;4570:156;;;:::o;4957:431::-;5035:4;5080:1;5059:23;;:9;:23;;;;5051:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5134:12;5149;:10;:12::i;:::-;5134:27;;5172:56;5190:4;5196;5202:9;5213:6;5172:56;;;;;;;;;;;;;;;;;;;;;;;;:17;:56::i;:::-;5239:44;5245:4;5251;5257:9;5268:6;5239:44;;;;;;;;;;;;;;;;;;;;;;;;:5;:44::i;:::-;5294:65;5314:4;5320;5326:9;5337:6;5294:65;;;;;;;;;;;;;;;;;;;;;;;;5353:5;5294:19;:65::i;:::-;5377:4;5370:11;;;4957:431;;;;:::o;5701:313::-;5815:4;5850:11;5838:23;;:8;:23;;;:120;;;;5878:17;:27;5896:8;5878:27;;;;;;;;;;;;;;;;;;;;;;;;;:79;;;;;5910:24;:37;5935:11;5910:37;;;;;;;;;;;;;;;:47;5948:8;5910:47;;;;;;;;;;;;;;;;;;;;;;;;;5909:48;5878:79;5838:120;:169;;;;5974:10;:23;5985:11;5974:23;;;;;;;;;;;;;;;:33;5998:8;5974:33;;;;;;;;;;;;;;;;;;;;;;;;;5838:169;5831:176;;5701:313;;;;:::o;8258:143::-;8340:7;8366:11;:19;8378:6;8366:19;;;;;;;;;;;;;;;:28;8386:7;8366:28;;;;;;;;;;;;;;;;8359:35;;8258:143;;;;:::o;6550:396::-;6639:12;:10;:12::i;:::-;6627:24;;:8;:24;;;;6619:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6704:17;:27;6722:8;6704:27;;;;;;;;;;;;;;;;;;;;;;;;;6700:185;;;6798:4;6747:24;:38;6772:12;:10;:12::i;:::-;6747:38;;;;;;;;;;;;;;;:48;6786:8;6747:48;;;;;;;;;;;;;;;;:55;;;;;;;;;;;;;;;;;;6700:185;;;6840:10;:24;6851:12;:10;:12::i;:::-;6840:24;;;;;;;;;;;;;;;:34;6865:8;6840:34;;;;;;;;;;;;;;;;6833:41;;;;;;;;;;;6700:185;6926:12;:10;:12::i;:::-;6900:39;;6916:8;6900:39;;;;;;;;;;;;6550:396;:::o;7740:279::-;7875:36;7889:12;:10;:12::i;:::-;7903:7;7875:13;:36::i;:::-;7867:93;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7970:42;7976:7;7985:6;7993:4;7999:12;7970:5;:42::i;:::-;7740:279;;;;:::o;5518:120::-;5594:37;5600:12;:10;:12::i;:::-;5614:6;5622:4;5594:37;;;;;;;;;;;;:5;:37::i;:::-;5518:120;;:::o;590:104:4:-;643:15;677:10;670:17;;590:104;:::o;13892:335:10:-;14003:1;13985:20;;:6;:20;;;;13977:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14084:1;14065:21;;:7;:21;;;;14057:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14168:5;14137:11;:19;14149:6;14137:19;;;;;;;;;;;;;;;:28;14157:7;14137:28;;;;;;;;;;;;;;;:36;;;;14205:7;14188:32;;14197:6;14188:32;;;14214:5;14188:32;;;;;;;;;;;;;;;;;;13892:335;;;:::o;14700:484::-;14921:19;1235:42;14943:41;;;14985:4;1700:66;14991:29;;14943:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;14943:78:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;14943:78:10;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;14943:78:10;;;;;;;;;;;;;;;;14921:100;;15058:1;15035:25;;:11;:25;;;15031:147;;15090:11;15076:39;;;15116:8;15126:4;15132:2;15136:6;15144:8;15154:12;15076:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15076:91:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15076:91:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;15076:91:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;15076:91:10;;;;15031:147;14700:484;;;;;;;:::o;13227:527::-;13436:48;13457:8;13467:4;13473:2;13477:6;13436:20;:48::i;:::-;13513:70;13533:6;13513:70;;;;;;;;;;;;;;;;;:9;:15;13523:4;13513:15;;;;;;;;;;;;;;;;:19;;:70;;;;;:::i;:::-;13495:9;:15;13505:4;13495:15;;;;;;;;;;;;;;;:88;;;;13609:25;13627:6;13609:9;:13;13619:2;13609:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;13593:9;:13;13603:2;13593:13;;;;;;;;;;;;;;;:41;;;;13671:2;13650:56;;13665:4;13650:56;;13655:8;13650:56;;;13675:6;13683:8;13693:12;13650:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;13650:56:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;13650:56:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13736:2;13721:26;;13730:4;13721:26;;;13740:6;13721:26;;;;;;;;;;;;;;;;;;13227:527;;;;;;:::o;1746:187:8:-;1832:7;1864:1;1859;:6;;1867:12;1851:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1851:29:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1890:9;1906:1;1902;:5;1890:17;;1925:1;1918:8;;;1746:187;;;;;:::o;15873:688:10:-;16130:19;1235:42;16152:41;;;16194:2;1883:66;16198:32;;16152:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;16152:79:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16152:79:10;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;16152:79:10;;;;;;;;;;;;;;;;16130:101;;16268:1;16245:25;;:11;:25;;;16241:314;;16303:11;16286:44;;;16331:8;16341:4;16347:2;16351:6;16359:8;16369:12;16286:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;16286:96:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;16286:96:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;16286:96:10;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16286:96:10;;;;16241:314;;;16403:19;16399:156;;;16447:15;:2;:13;;;:15::i;:::-;16446:16;16438:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16399:156;16241:314;15873:688;;;;;;;;:::o;11536:654::-;11778:1;11762:18;;:4;:18;;;;11754:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11851:1;11837:16;;:2;:16;;;;11829:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11901:16;11920:12;:10;:12::i;:::-;11901:31;;11943:69;11961:8;11971:4;11977:2;11981:6;11989:8;11999:12;11943:17;:69::i;:::-;12023:57;12029:8;12039:4;12045:2;12049:6;12057:8;12067:12;12023:5;:57::i;:::-;12091:92;12111:8;12121:4;12127:2;12131:6;12139:8;12149:12;12163:19;12091;:92::i;:::-;11536:654;;;;;;;:::o;12495:726::-;12687:1;12671:18;;:4;:18;;;;12663:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12739:16;12758:12;:10;:12::i;:::-;12739:31;;12781:56;12802:8;12812:4;12826:1;12830:6;12781:20;:56::i;:::-;12848:73;12866:8;12876:4;12890:1;12894:6;12902:4;12908:12;12848:17;:73::i;:::-;12984:66;13004:6;12984:66;;;;;;;;;;;;;;;;;:9;:15;12994:4;12984:15;;;;;;;;;;;;;;;;:19;;:66;;;;;:::i;:::-;12966:9;:15;12976:4;12966:15;;;;;;;;;;;;;;;:84;;;;13075:24;13092:6;13075:12;;:16;;:24;;;;:::i;:::-;13060:12;:39;;;;13132:4;13115:50;;13122:8;13115:50;;;13138:6;13146:4;13152:12;13115:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;13115:50:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;13115:50:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13203:1;13180:34;;13189:4;13180:34;;;13207:6;13180:34;;;;;;;;;;;;;;;;;;12495:726;;;;;:::o;17189:110::-;;;;;:::o;874:176:8:-;932:7;951:9;967:1;963;:5;951:17;;991:1;986;:6;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;1035:8;;;874:176;;;;:::o;718:610:14:-;778:4;1036:16;1062:19;1084:66;1062:88;;;;1251:7;1239:20;1227:32;;1290:11;1278:8;:23;;:42;;;;;1317:3;1305:15;;:8;:15;;1278:42;1270:51;;;;718:610;;;:::o;1321:134:8:-;1379:7;1405:43;1409:1;1412;1405:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1398:50;;1321:134;;;;:::o",
    "source": "pragma solidity ^0.6.0;\n\nimport \"@openzeppelin/contracts/token/ERC777/ERC777.sol\";\n\n\n/**\n * @title VTX\n * @dev Very simple ERC777 Token example, where all tokens are pre-assigned to the creator.\n * Note they can later distribute these tokens as they wish using `transfer` and other\n * `ERC20` or `ERC777` functions.\n * Based on https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/examples/SimpleToken.sol\n */\ncontract VTX is ERC777 {\n\n    /**\n     * @dev Constructor that gives msg.sender all of existing tokens.\n     */\n    constructor () public ERC777(\"Volentix\", \"VTX\", new address[](0)) {\n        _mint(msg.sender, 10000000 * 10 ** 18, \"\", \"\");\n    }\n}",
    "sourcePath": "/Users/sylvltx/bridge/volentix_eth_contracts/contracts/VTXToken.sol",
    "ast": {
      "absolutePath": "/Users/sylvltx/bridge/volentix_eth_contracts/contracts/VTXToken.sol",
      "exportedSymbols": {
        "VTX": [
          234
        ]
      },
      "id": 235,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 203,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:3"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
          "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
          "id": 204,
          "nodeType": "ImportDirective",
          "scope": 235,
          "sourceUnit": 1798,
          "src": "25:57:3",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 206,
                "name": "ERC777",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1797,
                "src": "450:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC777_$1797",
                  "typeString": "contract ERC777"
                }
              },
              "id": 207,
              "nodeType": "InheritanceSpecifier",
              "src": "450:6:3"
            }
          ],
          "contractDependencies": [
            257,
            697,
            1797,
            1956
          ],
          "contractKind": "contract",
          "documentation": {
            "id": 205,
            "nodeType": "StructuredDocumentation",
            "src": "85:348:3",
            "text": "@title VTX\n@dev Very simple ERC777 Token example, where all tokens are pre-assigned to the creator.\nNote they can later distribute these tokens as they wish using `transfer` and other\n`ERC20` or `ERC777` functions.\nBased on https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/examples/SimpleToken.sol"
          },
          "fullyImplemented": true,
          "id": 234,
          "linearizedBaseContracts": [
            234,
            1797,
            697,
            1956,
            257
          ],
          "name": "VTX",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 232,
                "nodeType": "Block",
                "src": "616:63:3",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 221,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "632:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "632:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_rational_10000000000000000000000000_by_1",
                            "typeString": "int_const 10000000000000000000000000"
                          },
                          "id": 227,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "hexValue": "3130303030303030",
                            "id": 223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "644:8:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10000000_by_1",
                              "typeString": "int_const 10000000"
                            },
                            "value": "10000000"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "id": 226,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "hexValue": "3130",
                              "id": 224,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "655:2:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_10_by_1",
                                "typeString": "int_const 10"
                              },
                              "value": "10"
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "**",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "3138",
                              "id": 225,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "661:2:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            },
                            "src": "655:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            }
                          },
                          "src": "644:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000000000000_by_1",
                            "typeString": "int_const 10000000000000000000000000"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "",
                          "id": 228,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "665:2:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "",
                          "id": 229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "669:2:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_rational_10000000000000000000000000_by_1",
                            "typeString": "int_const 10000000000000000000000000"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "id": 220,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1418,
                        "src": "626:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                          "typeString": "function (address,uint256,bytes memory,bytes memory)"
                        }
                      },
                      "id": 230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "626:46:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 231,
                    "nodeType": "ExpressionStatement",
                    "src": "626:46:3"
                  }
                ]
              },
              "documentation": {
                "id": 208,
                "nodeType": "StructuredDocumentation",
                "src": "464:81:3",
                "text": "@dev Constructor that gives msg.sender all of existing tokens."
              },
              "id": 233,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "566f6c656e746978",
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "579:10:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_16b466d30429fc20927e61b781ebc84f3df61295787fb286d6eba8b934660f1c",
                        "typeString": "literal_string \"Volentix\""
                      },
                      "value": "Volentix"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "565458",
                      "id": 212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "591:5:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_90873c846a3667b56b10aa459d61b859d87d929fbe53a7d333ea2003176157e8",
                        "typeString": "literal_string \"VTX\""
                      },
                      "value": "VTX"
                    },
                    {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "612:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "598:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (address[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 213,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "602:7:3",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 214,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "602:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                            "typeString": "address[]"
                          }
                        }
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "598:16:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    }
                  ],
                  "id": 218,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 210,
                    "name": "ERC777",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1797,
                    "src": "572:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC777_$1797_$",
                      "typeString": "type(contract ERC777)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "572:43:3"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 209,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "562:2:3"
              },
              "returnParameters": {
                "id": 219,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "616:0:3"
              },
              "scope": 234,
              "src": "550:129:3",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 235,
          "src": "434:247:3"
        }
      ],
      "src": "0:681:3"
    },
    "legacyAST": {
      "absolutePath": "/Users/sylvltx/bridge/volentix_eth_contracts/contracts/VTXToken.sol",
      "exportedSymbols": {
        "VTX": [
          234
        ]
      },
      "id": 235,
      "nodeType": "SourceUnit",
      "nodes": [
        {
          "id": 203,
          "literals": [
            "solidity",
            "^",
            "0.6",
            ".0"
          ],
          "nodeType": "PragmaDirective",
          "src": "0:23:3"
        },
        {
          "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
          "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
          "id": 204,
          "nodeType": "ImportDirective",
          "scope": 235,
          "sourceUnit": 1798,
          "src": "25:57:3",
          "symbolAliases": [],
          "unitAlias": ""
        },
        {
          "abstract": false,
          "baseContracts": [
            {
              "arguments": null,
              "baseName": {
                "contractScope": null,
                "id": 206,
                "name": "ERC777",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 1797,
                "src": "450:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_contract$_ERC777_$1797",
                  "typeString": "contract ERC777"
                }
              },
              "id": 207,
              "nodeType": "InheritanceSpecifier",
              "src": "450:6:3"
            }
          ],
          "contractDependencies": [
            257,
            697,
            1797,
            1956
          ],
          "contractKind": "contract",
          "documentation": {
            "id": 205,
            "nodeType": "StructuredDocumentation",
            "src": "85:348:3",
            "text": "@title VTX\n@dev Very simple ERC777 Token example, where all tokens are pre-assigned to the creator.\nNote they can later distribute these tokens as they wish using `transfer` and other\n`ERC20` or `ERC777` functions.\nBased on https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/examples/SimpleToken.sol"
          },
          "fullyImplemented": true,
          "id": 234,
          "linearizedBaseContracts": [
            234,
            1797,
            697,
            1956,
            257
          ],
          "name": "VTX",
          "nodeType": "ContractDefinition",
          "nodes": [
            {
              "body": {
                "id": 232,
                "nodeType": "Block",
                "src": "616:63:3",
                "statements": [
                  {
                    "expression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 221,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "632:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 222,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "632:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_rational_10000000000000000000000000_by_1",
                            "typeString": "int_const 10000000000000000000000000"
                          },
                          "id": 227,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "hexValue": "3130303030303030",
                            "id": 223,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "644:8:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_10000000_by_1",
                              "typeString": "int_const 10000000"
                            },
                            "value": "10000000"
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            },
                            "id": 226,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "hexValue": "3130",
                              "id": 224,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "655:2:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_10_by_1",
                                "typeString": "int_const 10"
                              },
                              "value": "10"
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "**",
                            "rightExpression": {
                              "argumentTypes": null,
                              "hexValue": "3138",
                              "id": 225,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "661:2:3",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_18_by_1",
                                "typeString": "int_const 18"
                              },
                              "value": "18"
                            },
                            "src": "655:8:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_1000000000000000000_by_1",
                              "typeString": "int_const 1000000000000000000"
                            }
                          },
                          "src": "644:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_10000000000000000000000000_by_1",
                            "typeString": "int_const 10000000000000000000000000"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "",
                          "id": 228,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "665:2:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "",
                          "id": 229,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "string",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "669:2:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          "value": ""
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          {
                            "typeIdentifier": "t_rational_10000000000000000000000000_by_1",
                            "typeString": "int_const 10000000000000000000000000"
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          },
                          {
                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                            "typeString": "literal_string \"\""
                          }
                        ],
                        "id": 220,
                        "name": "_mint",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1418,
                        "src": "626:5:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                          "typeString": "function (address,uint256,bytes memory,bytes memory)"
                        }
                      },
                      "id": 230,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "626:46:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_tuple$__$",
                        "typeString": "tuple()"
                      }
                    },
                    "id": 231,
                    "nodeType": "ExpressionStatement",
                    "src": "626:46:3"
                  }
                ]
              },
              "documentation": {
                "id": 208,
                "nodeType": "StructuredDocumentation",
                "src": "464:81:3",
                "text": "@dev Constructor that gives msg.sender all of existing tokens."
              },
              "id": 233,
              "implemented": true,
              "kind": "constructor",
              "modifiers": [
                {
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "566f6c656e746978",
                      "id": 211,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "579:10:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_16b466d30429fc20927e61b781ebc84f3df61295787fb286d6eba8b934660f1c",
                        "typeString": "literal_string \"Volentix\""
                      },
                      "value": "Volentix"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "565458",
                      "id": 212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "591:5:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_90873c846a3667b56b10aa459d61b859d87d929fbe53a7d333ea2003176157e8",
                        "typeString": "literal_string \"VTX\""
                      },
                      "value": "VTX"
                    },
                    {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 216,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "612:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 215,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "NewExpression",
                        "src": "598:13:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_ptr_$",
                          "typeString": "function (uint256) pure returns (address[] memory)"
                        },
                        "typeName": {
                          "baseType": {
                            "id": 213,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "602:7:3",
                            "stateMutability": "nonpayable",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "id": 214,
                          "length": null,
                          "nodeType": "ArrayTypeName",
                          "src": "602:9:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                            "typeString": "address[]"
                          }
                        }
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "598:16:3",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                        "typeString": "address[] memory"
                      }
                    }
                  ],
                  "id": 218,
                  "modifierName": {
                    "argumentTypes": null,
                    "id": 210,
                    "name": "ERC777",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1797,
                    "src": "572:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_type$_t_contract$_ERC777_$1797_$",
                      "typeString": "type(contract ERC777)"
                    }
                  },
                  "nodeType": "ModifierInvocation",
                  "src": "572:43:3"
                }
              ],
              "name": "",
              "nodeType": "FunctionDefinition",
              "overrides": null,
              "parameters": {
                "id": 209,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "562:2:3"
              },
              "returnParameters": {
                "id": 219,
                "nodeType": "ParameterList",
                "parameters": [],
                "src": "616:0:3"
              },
              "scope": 234,
              "src": "550:129:3",
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            }
          ],
          "scope": 235,
          "src": "434:247:3"
        }
      ],
      "src": "0:681:3"
    },
    "compiler": {
      "name": "solc",
      "version": "0.6.7+commit.b8d736ae.Emscripten.clang"
    },
    "networks": {
      "42": {
        "events": {
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
          "0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "tokenHolder",
                "type": "address"
              }
            ],
            "name": "AuthorizedOperator",
            "type": "event"
          },
          "0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
              }
            ],
            "name": "Burned",
            "type": "event"
          },
          "0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
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
                "name": "amount",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
              }
            ],
            "name": "Minted",
            "type": "event"
          },
          "0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "tokenHolder",
                "type": "address"
              }
            ],
            "name": "RevokedOperator",
            "type": "event"
          },
          "0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
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
                "name": "amount",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
              }
            ],
            "name": "Sent",
            "type": "event"
          },
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
          }
        },
        "links": {},
        "address": "0x62a76D710f74aA9B247ff368C999eB672FDc172b",
        "transactionHash": "0xa22ba606794e4b6f11ba4b8a87ac99320820b12e867fe3a090eb2488504d9538"
      },
      "5777": {
        "events": {
          "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
          "0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "tokenHolder",
                "type": "address"
              }
            ],
            "name": "AuthorizedOperator",
            "type": "event"
          },
          "0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
              },
              {
                "indexed": false,
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
              }
            ],
            "name": "Burned",
            "type": "event"
          },
          "0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
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
                "name": "amount",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
              }
            ],
            "name": "Minted",
            "type": "event"
          },
          "0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
              {
                "indexed": true,
                "internalType": "address",
                "name": "tokenHolder",
                "type": "address"
              }
            ],
            "name": "RevokedOperator",
            "type": "event"
          },
          "0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987": {
            "anonymous": false,
            "inputs": [
              {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
              },
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
                "name": "amount",
                "type": "uint256"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
              },
              {
                "indexed": false,
                "internalType": "bytes",
                "name": "operatorData",
                "type": "bytes"
              }
            ],
            "name": "Sent",
            "type": "event"
          },
          "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
          }
        },
        "links": {},
        "address": "0x1203210d67e65cB6503Ee6AA519Fec92A7BEd54b",
        "transactionHash": "0x7687d48b4036eff698dfa313287b46032f8591644aad15a966c4df8944d5fadf"
      }
    },
    "schemaVersion": "3.0.23",
    "updatedAt": "2020-08-16T17:09:20.291Z",
    "networkType": "ethereum",
    "devdoc": {
      "details": "Very simple ERC777 Token example, where all tokens are pre-assigned to the creator. Note they can later distribute these tokens as they wish using `transfer` and other `ERC20` or `ERC777` functions. Based on https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/examples/SimpleToken.sol",
      "methods": {
        "allowance(address,address)": {
          "details": "See {IERC20-allowance}.     * Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves."
        },
        "approve(address,uint256)": {
          "details": "See {IERC20-approve}.     * Note that accounts cannot have allowance issued by their operators."
        },
        "authorizeOperator(address)": {
          "details": "See {IERC777-authorizeOperator}."
        },
        "balanceOf(address)": {
          "details": "Returns the amount of tokens owned by an account (`tokenHolder`)."
        },
        "burn(uint256,bytes)": {
          "details": "See {IERC777-burn}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility."
        },
        "constructor": {
          "details": "Constructor that gives msg.sender all of existing tokens."
        },
        "decimals()": {
          "details": "See {ERC20-decimals}.     * Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility)."
        },
        "defaultOperators()": {
          "details": "See {IERC777-defaultOperators}."
        },
        "granularity()": {
          "details": "See {IERC777-granularity}.     * This implementation always returns `1`."
        },
        "isOperatorFor(address,address)": {
          "details": "See {IERC777-isOperatorFor}."
        },
        "name()": {
          "details": "See {IERC777-name}."
        },
        "operatorBurn(address,uint256,bytes,bytes)": {
          "details": "See {IERC777-operatorBurn}.     * Emits {Burned} and {IERC20-Transfer} events."
        },
        "operatorSend(address,address,uint256,bytes,bytes)": {
          "details": "See {IERC777-operatorSend}.     * Emits {Sent} and {IERC20-Transfer} events."
        },
        "revokeOperator(address)": {
          "details": "See {IERC777-revokeOperator}."
        },
        "send(address,uint256,bytes)": {
          "details": "See {IERC777-send}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility."
        },
        "symbol()": {
          "details": "See {IERC777-symbol}."
        },
        "totalSupply()": {
          "details": "See {IERC777-totalSupply}."
        },
        "transfer(address,uint256)": {
          "details": "See {IERC20-transfer}.     * Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract.     * Also emits a {Sent} event."
        },
        "transferFrom(address,address,uint256)": {
          "details": "See {IERC20-transferFrom}.    * Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators).    * Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events."
        }
      },
      "title": "VTX"
    },
    "userdoc": {
      "methods": {}
    }
  }
  //npm install --save web3-net  
const Web3 = require('web3');
const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig'); // development only
const fetch = require('node-fetch');                                    
const { TextEncoder, TextDecoder } = require('util');  
const { mainModule } = require('process');
var Accounts = require('web3-eth-accounts');
const eth_token_contract = '0x71c5a83193399b15417ffda7f9406cd72f311d8a'; 
const eth_pool_address = '0x7D5592066FAE5cC14a62477EEb5074036610415c';
const eos_token_contract = 'vtx222222222'
const eos_pool_account = 'vtx222222222';
const eos_account = 'quaremachina';
const custodian_account = 'vltxtknaudit'; 
const defaultPrivateKey = "5KkddYRe4VJdp5E5m8oiZiJuzGD6F2CVR5zcv8C2hbsCv5sZ9ZS";
const Eth = require('web3-eth');
console.log('Current directory: ' + process.cwd());

async function main(){
  eth_balance();
}

async function eth_balance(){
    for (i =0;;i++) {
        try{   
                let web3 = new Web3('http://127.0.0.1:8545');
                web3.eth.isSyncing()
                .then(web3 = new Web3('https://ropsten.infura.io/v3/c3436ae558954d85ae242a2ea517475c'));
                let contract = new web3.eth.Contract(json.abi, eth_token_contract);
                await sleep(3000);
                new_vtx_balance = contract.methods.balanceOf(eth_pool_address).call((err, result) => {}); 
                new_vtx_balance = await new_vtx_balance;
                from_wei = web3.utils.fromWei(new_vtx_balance, 'ether');
                from_wei = from_wei.toString();
                from_wei = from_wei.slice(0, -6);
                new_vtx_balance = new_vtx_balance.toString();
                new_vtx_balance = new_vtx_balance.slice(0, -10);
                console.log('Raw balance sent to custodian', new_vtx_balance);
                send_balance_EOS(new_vtx_balance);
                const rpc = new JsonRpc('https://jungle2.cryptolions.io:443', { fetch });
                eos_vtx_balance = rpc.get_currency_balance(eos_pool_account, eos_pool_account, 'WVTX').then((balance) => {return balance})
                eos_vtx_balance = await eos_vtx_balance;
                console.log('ETH balance', from_wei);
                console.log('EOS balance', eos_vtx_balance);
        }
        catch(err){
            console.log(err);
            continue;
        }
    }
}

function send_balance_EOS(balance, i){
    var rpc;
    try{
        const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
        rpc = new JsonRpc('https://jungle2.cryptolions.io:443', { fetch }); 
        const api = new Api({ rpc, signatureProvider, textDecoder: new TextDecoder(), textEncoder: new TextEncoder() });
        const timestamp = Date.now(); // Unix timestamp in milliseconds
        (async () => {
            const result = await api.transact({
            actions: [{
                account: custodian_account,
                name: 'updtblnc',
                authorization: [{
                actor: eos_account,
                permission: 'active',
                }],
                data: {
                account: eos_account,    
                balance: balance,
                timestamp: timestamp,
                },
            }]
            }, {
            blocksBehind: 3,
            expireSeconds: 30,
            });
            console.dir(result);
        })();
    }catch(err){
        console.log(err);
    }
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main();


