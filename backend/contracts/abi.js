module.exports = [
  {
    constant: true,
    inputs: [],
    name: "getName",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ name: "_name", type: "string" }],
    name: "setName",
    outputs: [{ name: "", type: "string" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
