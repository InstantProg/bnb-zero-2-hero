/**
 *Submitted for verification at BscScan.com on 2023-03-30
 */

// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

/* 
  interface Isolution2 {
    function solution(uint256[10] calldata unsortedArray) external returns (uint256[10] memory sortedArray);
  }
*/

contract Level_2_Solution {
    function solution(
        uint256[10] calldata unsortedArray
    ) external pure returns (uint256[10] memory sortedArray) {
        uint256[10] memory arr = unsortedArray;
        uint n = arr.length;

        for (uint i = 0; i < n - 1; i++) {
            for (uint j = i + 1; j < n; j++) {
                if (arr[j] < arr[i]) {
                    uint temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }

        return arr;
    }
}
