// Dotenv javascript libraries needed
require('dotenv').config();
// Ethereum javascript libraries needed
var Web3 = require('web3');
// var Tx = require('ethereumjs-tx');
var Tx = require("ethereumjs-tx").Transaction;
const json  = require("./build/contracts/VTX.json");
var EthUtil = require('ethereumjs-util');
var Wallet = require('ethereumjs-wallet');
// Rather than using a local copy of geth, interact with the ethereum blockchain via infura.io
// The key for infura.io is in .env
const web3 = new Web3('https://ropsten.infura.io/v3/c3436ae558954d85ae242a2ea517475c')
// Fixed-point notation for number of MFIL which is divisible to 3 decimal places
function financialVTX(numVTX) {
    return Number.parseFloat(numVTX / 1e3).toFixed(3);
}
// Create an async function so I can use the "await" keyword to wait for things to finish
const main = async () => {
    // This code was written and tested using web3 version 1.0.0-beta.29
    console.log(`web3 version: ${web3.version}`)
    // Who holds the token now?
    var myAddress = "0x7D5592066FAE5cC14a62477EEb5074036610415c";
    // Who are we trying to send this token to?
    var destAddress = "0x0f36bE29953148490CFc3C8150100Ae94C10A9eF";
    var transferAmount = 10000000000; //.00000001
    // var transferAmount = 1000000000000000000; //1
    // transferAmount = transferAmount.toString();
    // Determine the nonce
    var count = await web3.eth.getTransactionCount(myAddress);
    console.log(`num transactions so far: ${count}`);
    
    // The address of the contract which created VTX
    // var contractAddress = "0xaecae78aab402510293aeed3475612e1804ee2d3";//kovan
    var contractAddress = "0x71c5a83193399b15417ffda7f9406cd72f311d8a";//ropsten
    const contract = new web3.eth.Contract(json.abi, contractAddress);
    // How many tokens do I have before sending?
    var myAddress = "0x7D5592066FAE5cC14a62477EEb5074036610415c";
    var balance = await contract.methods.balanceOf(myAddress).call();
    console.log(`Balance before send: ${financialVTX(balance)} VTX\n------------------------`);
    var gasPriceGwei = 3;
    var gasLimit = 3000000;
    // Chain ID of Ropsten Test Net is 3, replace it to 1 for Main Net
    var chainId = 3;
    var rawTransaction = {
        "from": myAddress,
        "nonce": "0x" + count.toString(16),
        "gasPrice": web3.utils.toHex(gasPriceGwei * 1e9),
        "gasLimit": web3.utils.toHex(gasLimit),
        "to": contractAddress,
        "value": "0x0",
        "data": contract.methods.transfer(destAddress, transferAmount.toString()).encodeABI(),
        "chainId": chainId
    };
    console.log(`Raw of Transaction: \n${JSON.stringify(rawTransaction, null, '\t')}\n------------------------`);
    var privKey = '0x27c4cd052d31bc4006a8d2f51580cd06117933b2e0dea81c4cb35efad88dc3f0';
    // privateKeyBuffer = EthUtil.toBuffer(privKey);
    privateKeyBuffer = Buffer.from(privKey.slice(2), "hex")
    // var tx = new Tx(rawTransaction);
    var tx = new Tx(rawTransaction, {'chain':'ropsten'});
    tx.sign(privateKeyBuffer);
    var serializedTx = tx.serialize();
    // Comment out these four lines if you don't really want to send the TX right now
    console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}\n------------------------`);
    var receipt = await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
    // The receipt info of transaction, Uncomment for debug
    console.log(`Receipt info: \n${JSON.stringify(receipt, null, '\t')}\n------------------------`);
    // The balance may not be updated yet, but let's check
    balance = await contract.methods.balanceOf(myAddress).call();
    console.log(balance);
}
main();