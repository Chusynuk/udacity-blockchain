const Web3 = require('web3');
const EthereumTx  = require("@ethereumjs/tx").Transaction;

const URL = 'http://127.0.0.1:7545';

const web3 = new Web3(URL);

const sendingAddress = '0x3F5093d0181b9870b2FA307CE59889D59eF0FC43';
const receivingAddress = '0xe43993E904Ce791ef55Ccc549fBb3A29611aBBCe';

web3.eth.getBalance(sendingAddress).then(console.log);
web3.eth.getBalance(receivingAddress).then(console.log);

// *********CREATE A TRANSACTION*********

const rawTransaction = {
    nonce: 0,
    to: receivingAddress,
    gasPrice: 20000000,
    gasLimit: 30000,
    value: 100,
    data: ""
};

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender
const privateKeySender = 'PRIVATE KEY';
const privateKeySenderHex = Buffer.from(privateKeySender, 'hex');
const Tx = new EthereumTx(rawTransaction);
// console.log('privateKeySenderHex', privateKeySenderHex.length);
Tx.sign(privateKeySenderHex)

// // // -- Step 8: Send the serialized signed transaction to the Ethereum network.
const serializedTransaction = Tx.serialize();
// // console.log('serializedTransaction', serializedTransaction);
web3.eth.sendSignedTransaction(serializedTransaction);
