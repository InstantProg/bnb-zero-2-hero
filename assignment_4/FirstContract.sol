// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract BootcampContract {
    uint256 number;
    address immutable i_owner;

    constructor() {
        i_owner = msg.sender;
    }

    function store(uint256 num) public {
        number = num;
    }

    function callByDeployer() external view returns (address) {
        if (msg.sender == i_owner) {
            address return_address = 0x000000000000000000000000000000000000dEaD;
            return return_address;
        } else {
            return i_owner;
        }
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
