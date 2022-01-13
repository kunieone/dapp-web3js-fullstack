// pragma solidity ^0.4.25;

// contract StateVariables {
//   string name;
//   address owner;

//   constructor() public {
//     name = "unknown";
//     owner = msg.sender;
//   }

//   modifier onlyOwner() {
//     require(msg.sender == owner, "Permission Denied");
//     _;
//   }

//   function setName(string _name) public onlyOwner returns (string) {
//     name = _name;
//     return name;
//   }

//   function getName() public view returns (string) {
//     return name;
//   }
// }

pragma solidity ^0.4.25;

contract Electron {
  string name;
  address number;

    function myFunction() returns(uint256 myNumber, string myString) {
        return (23456, "Hello!%");
    }

  function setName(string _name) public returns (string) {
    name = _name;
    return name;
  }

  function getName() public view returns (string) {
    return name;
  }
}
