pragma solidity ^0.4.25;

contract Donation {
  struct DonorInfo {
    address[] donors;
    mapping(address => uint256) ledger;
  }
  mapping(address => DonorInfo) DonationHistory;
  // 创建一个key为地址的对应的映射 每一个地址可以对应一个“DonationHistory”
  //   一个捐赠信息的log日志事件
  event LogDonate(
    address streamer,
    address donor,
    string _nickname,
    uint256 value,
    string message
  );

  function donate(
    address _streamer,
    string _nickname,
    string _message
  ) public payable {
    _streamer.transfer(msg.value);
    DonationHistory[_streamer].ledger[msg.sender] += msg.value;
    emit LogDonate(_streamer, msg.sender, _nickname, msg.value, _message);
  }

  function getDonorList() public view returns (address[]) {}

  function listDonorInfo() public {}
}
