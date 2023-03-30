/**
 *Submitted for verification at BscScan.com on 2023-03-30
 */

// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

/*
interface Isolution {
    function solution(address addr) external view returns (uint256 codeSize);
}
*/

contract Solution3 {
    function solution(address addr) external view returns (uint256 codeSize) {
        assembly {
            codeSize := extcodesize(addr)
        }
    }
}
