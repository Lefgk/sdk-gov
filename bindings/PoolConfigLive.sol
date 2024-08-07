// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import { Tokens } from "./Tokens.sol";

struct QuotedTokenParams {
    Tokens token;
    uint16 minRiskRate;
    uint16 maxRate;
    uint96 limit;
}

struct PoolParams {
    uint256 U_optimal;
    uint256 U_reserve;
    uint256 R_base;
    uint256 R_slope1;
    uint256 R_slope2;
    uint256 R_slope3;
    uint256 expectedLiquidityLimit;
    bool supportsQuotas;
    QuotedTokenParams[] quotedTokens;
}

contract PoolConfigLive {
    mapping(Tokens => PoolParams) poolParams;
    Tokens[] underlyings;

    constructor() {
        PoolParams storage pp;

        // $GENERATE_HERE$
    }
}
