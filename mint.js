// init web3, require ABI JSON, and declare wallet constants
const Web3 = require( 'web3' );
const httpProvider = 'https://ropsten.infura.io/v3/<MY_INFURA_KEY>';
const web3 = new Web3( new Web3.providers.HttpProvider( httpProvider, null, { transactionConfirmationBlocks: 1 } ) );
const address = '<MY_WALLET ADDRESS>';
const privateKey = '<MY_PRIVATE KEY>'; // not prefixed with 0x
const bufferPrivateKey = Buffer.from( privateKey, 'hex' );

// add wallet to web3 accounts
web3.eth.accounts.wallet.add( {
    privateKey
    , address
} );

// declare Compound Ropsten cDAI contract address and local cDai ABI
let cDAI = '0x2b536482a01e620ee111747f8334b395a42a555e';
let cDaiInstance = new web3.eth.Contract( daiAbi, cDaiAddress );

// create object with transaction data
const txData = {
    gasLimit: web3.utils.toHex( 100000 )
    , gasPrice: web3.utils.toHex( 10e9 )
    , to: cDAI
    , from: address
    , value: web3.utils.toHex( web3.utils.toWei( '1000000', 'wei' ) )
    , chainId: 3
};

// define a function for assembling, signing, and sending a  raw transaction
const sendRawTransaction = async ( txData ) => {
    console.log( 'txData: ', txData );
    let txCount, newNonce, serializedTx, sent;
    try {
        txCount = await web3.eth.getTransactionCount( address );
        console.log( 'txCount: ', txCount );
    } catch ( err ) {
        `ERROR 0`;
    }

    try {
        newNonce = await web3.utils.toHex( txCount );
        console.log( 'newNonce: ', newNonce );
    } catch ( err ) {
        `ERROR 1`;
    }

    try {
        const transaction = new Tx( txData, newNonce, { chain: 'ropsten', hardfork: 'petersburg' } );
        console.log( 'transaction: ', transaction );
        transaction.sign( bufferPrivateKey );
        serializedTx = transaction.serialize().toString( 'hex' );
        console.log( 'serializedTx: ', serializedTx );
    } catch ( err ) {
        `ERROR 2`;
    }

    let result = await web3.eth.sendSignedTransaction( '0x' + serializedTx );

    result
        .on( 'transactionHash', txHash => {
            console.log( 'transactionHash:', txHash );
        } )
        .on( 'receipt', receipt => {
            console.log( 'receipt:', receipt );
        } )
        .on( 'confirmation', ( confirmationNumber, receipt ) => {
            if ( confirmationNumber >= 1 ) {
                console.log( 'confirmations:', confirmationNumber, receipt );
            }
        } )
        .on( 'error:', error => {
            console.error( error );
        } );
