// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.18;

contract DogCoin {
    uint256 public total_supply = 20_000;
    address immutable i_owner;

    mapping(address => uint256) public balances;

    struct Payment {
        uint256 transferAmount;
        address recepientAddress;
    }
    mapping(address => Payment[]) public payments;

    constructor() {
        i_owner = msg.sender;
        balances[i_owner] = total_supply;
    }

    event TotalSupplyChanged(uint256 updated_supply);
    event SuccessfulTransfer(uint256 balanceOfRecepient);

    modifier OnlyOwner() {
        require(msg.sender == i_owner);
        _;
    }

    function increaseInStepThousand() public {
        total_supply += 1000;
        emit TotalSupplyChanged(total_supply);
    }

    function transfer(uint256 _amount, address _to) public {
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
        emit SuccessfulTransfer(balances[_to]);
        payments[msg.sender].push(Payment(_amount, _to));
    }
}
