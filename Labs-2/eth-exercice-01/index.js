const Web3 = require('web3');

const url = 'https://mainnet.infura.io/v3/869e4866ea6e4bd28a63a91d302f149b';
const web3 = new Web3(url);

const account = '0xe9a67Bede6345C505268073014bEB7FF0Ee75b36';


web3.eth.getBalance(account).then(console.log);
// return web3;