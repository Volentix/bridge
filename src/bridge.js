const Web3 = require('web3');
const { Api, JsonRpc, RpcError } = require('eosjs');
const { JsSignatureProvider } = require('eosjs/dist/eosjs-jssig');      // development only
const fetch = require('node-fetch');                                    
const { TextEncoder, TextDecoder } = require('util');  
const { mainModule } = require('process');
var Accounts = require('web3-eth-accounts');
const json  = require("./build/contracts/VTX.json");
const web31= new Web3('ws://127.0.0.1:8546');
const web32 = new Web3("https://ropsten.infura.io/v3/c3436ae558954d85ae242a2ea517475c");
const web33= new Web3('https://main-rpc.linkpool.io');
const eth_token_contract = '0x71c5a83193399b15417ffda7f9406cd72f311d8a'; 
const eth_pool_address = '0x7D5592066FAE5cC14a62477EEb5074036610415c';
const eos_token_contract = 'vtx222222222'
const eos_pool_account = 'vtx222222222';
const eos_account = 'quaremachina';
const custodian_account = 'vltxtknaudit'; 
const defaultPrivateKey = "5KkddYRe4VJdp5E5m8oiZiJuzGD6F2CVR5zcv8C2hbsCv5sZ9ZS";
async function main(){
  eth_balance(web31);
//   eth_balance(web32);
//   eth_balance(web32);
//   process.exit(22);
}

async function eth_balance(web3_instance){   
    const contract = new web3_instance.eth.Contract(json.abi, eth_token_contract); 
    for (i =0;;i++) {
        await sleep(3000);
        new_vtx_balance = contract.methods.balanceOf(eth_pool_address).call((err, result) => {}); 
        new_vtx_balance = await new_vtx_balance;
        from_wei = web3_instance.utils.fromWei(new_vtx_balance, 'ether');
        from_wei = from_wei.toString();
        from_wei = from_wei.slice(0, -6);
        new_vtx_balance = new_vtx_balance.toString();
        new_vtx_balance = new_vtx_balance.slice(0, -10);
        console.log(new_vtx_balance);
        send_balance_EOS(new_vtx_balance);
        const rpc = new JsonRpc('https://jungle2.cryptolions.io:443', { fetch });
        eos_vtx_balance = rpc.get_currency_balance(eos_pool_account, eos_pool_account, 'WVTX').then((balance) => {return balance})
        eos_vtx_balance = await eos_vtx_balance;
        console.log('ETH balance');
        console.log(from_wei);
        console.log('EOS balance');
        console.log(eos_vtx_balance)
    }
}

function send_balance_EOS(balance){
    const signatureProvider = new JsSignatureProvider([defaultPrivateKey]);
    const rpc = new JsonRpc('https://jungle2.cryptolions.io:443', { fetch });
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
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


main();


