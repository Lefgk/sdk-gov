// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import { Tokens, TokenType } from "./Tokens.sol";

interface IERC20Check {
    function totalSupply() external view returns (uint256);
}

struct TokenData {
    Tokens id;
    address addr;
    string symbol;
    TokenType tokenType;
}

contract TokensDataLive {
    mapping(uint256 => TokenData[]) tokenDataByNetwork;

    constructor() {
        // $GENERATE_HERE$
    }

    function getTokenData(
        uint256 chainId
    ) external view returns (TokenData[] memory) {
        return tokenDataByNetwork[chainId];
    }
}
