// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

enum AdapterType {
    // target contracts
    PANCAKESWAP_V2_ROUTER, //0 0x10ED43C718714eb63d5aA57B78B54704E256024E
    PANCAKESWAP_V3_ROUTER, //1 0x1b81D678ffb9C0263b24A97847620C99d213eB14
    AAVE_V3_LENDING_POOL, //2 0x6807dc923806fE8Fd134338EABCA509979a7e0cB
    Venus, //3
    OneInch_ROUTER, //4 
    AAVE_V2_WRAPPED_ATOKEN //6 USDT 0xa9251ca9DE909CB71783723713B21E4233fbf1B1
}
