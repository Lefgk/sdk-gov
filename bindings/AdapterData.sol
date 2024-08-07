// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import { Tokens } from "./Tokens.sol";
import { Contracts } from "./SupportedContracts.sol";
import { AdapterType } from "./AdapterType.sol";

struct SimpleAdapter {
    Contracts targetContract;
    AdapterType adapterType;
}

struct CurveAdapter {
    Contracts targetContract;
    AdapterType adapterType;
    Tokens lpToken;
    Contracts basePool;
}

struct CurveStETHAdapter {
    Contracts curveETHGateway;
    AdapterType adapterType;
    Tokens lpToken;
}

struct CurveWrapper {
    Contracts targetContract;
    AdapterType adapterType;
    Tokens lpToken;
    uint256 nCoins;
}

struct ConvexBasePoolAdapter {
    Contracts targetContract;
    AdapterType adapterType;
    Tokens stakedToken;
}

contract AdapterData {
    SimpleAdapter[] simpleAdapters;
    CurveAdapter[] curveAdapters;
    CurveStETHAdapter[] curveStEthAdapters;
    CurveWrapper[] curveWrappers;
    ConvexBasePoolAdapter[] convexBasePoolAdapters;

    constructor() {
        // $GENERATE_HERE$
    }
}
