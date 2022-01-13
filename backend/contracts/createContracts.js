const Web3 = require("web3");
const abi = require("./abi");
let web3 = new Web3("HTTP://127.0.0.1:7545");
const contractAddress = "0x73e746dd1E9E9911f3F1f4EBBD5661d42240548F";
const contract = new web3.eth.Contract(abi, contractAddress);
module.exports = { web3, contract };
