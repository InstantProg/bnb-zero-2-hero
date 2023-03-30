Link for the challenge page: https://www.solidityctf.xyz/

# Level 1 - Matrix Addition
Write a function that adds two matrices returns the result. To keep things simple the array sizes will be fixed sizes of 2x2 (uint256[2][2]). Take a look at Wikipedia if you need help understanding matrix addition. Your solution should implement the following interface:


```solidity
interface Isolution1 {
    function solution(
        uint256[2][2] calldata x, 
        uint256[2][2] calldata y
    ) external pure returns (
        uint256[2][2] memory
    );
}
```

# Level 2 - Sorting an Array
Write a function that sorts an array in ascending order and returns the result. The array will be a fixed of 10 but the contents random. Your solution should implement the following interface:

```solidity
  interface Isolution2 {
  function solution(uint256[10] calldata unsortedArray) external returns (uint256[10] memory sortedArray);
}
```

# Level 3 - codeSize
Using the Isolution3 interface write a function that takes an address and returns the codeSize of that address as a uint256.

```solidity
interface Isolution3 {
    function solution(address addr) external view 
    returns (uint256 codeSize);
}
```

# Level 4 - Storage
Using the Isolution4 interface write a function that takes a uint256 and saves it to storage slot 3.

```solidity
interface Isolution4 {
    function solution(uint256 value) external;
}
```
