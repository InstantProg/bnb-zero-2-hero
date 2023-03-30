pragma solidity 0.8.17;

contract Solution1 {
    function solution(
        uint256[2][2] calldata x,
        uint256[2][2] calldata y
    ) external pure returns (uint256[2][2] memory) {
        uint256[2][2] memory result;
        (result[0][0], result[0][1], result[1][0], result[1][1]) = (
            x[0][0] + y[0][0],
            x[0][1] + y[0][1],
            x[1][0] + y[1][0],
            x[1][1] + y[1][1]
        );
        return result;
    }
}
