const Web3 = require('web3');
const EthereumTx  = require("@ethereumjs/tx").Transaction;

const URL = 'http://127.0.0.1:7545';

const web3 = new Web3(URL);

const sendingAddress = '0x0103F145eAd21cE974FECEe9D93326D6eb84897a';
const receivingAddress = '0xF7025dE2c15A14806Fe7906F4eAD528e4D7F225c';

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
const privateKeySender = '9bba07a3b9d014cd023e8aae7227bc04bcd12d9b34a766fb743a55fc8676c8f3';
const privateKeySenderHex = new Buffer(privateKeySender, 'hex');
const Tx = new EthereumTx(rawTransaction);
// console.log('transaction', transaction);
Tx.sign(privateKeySenderHex)

// // -- Step 8: Send the serialized signed transaction to the Ethereum network.
const serializedTransaction = Tx.serialize();
// console.log('serializedTransaction', serializedTransaction);
web3.eth.sendSignedTransaction(serializedTransaction);
