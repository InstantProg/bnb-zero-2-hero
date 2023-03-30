pragma solidity 0.8.9;

contract Solution4 {
    function solution(uint256 value) external {
        assembly {
            sstore(3, value)
        }
    }
}
