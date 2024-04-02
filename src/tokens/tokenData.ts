import { NetworkType } from "../core/chains";
import { NOT_DEPLOYED } from "../core/constants";
import { SupportedToken, tokenDataByNetwork } from "./token";

export const connectors: Record<NetworkType, Array<SupportedToken>> = {
  Mainnet: ["WETH", "DAI", "USDC", "FRAX", "rETH", "ezETH", "GHO"],
  Arbitrum: ["WETH", "DAI", "USDC", "USDT", "rETH", "USDC_e"],
  Optimism: ["WETH", "USDC", "USDT", "USDC_e"],
  Base: ["WETH", "USDC", "USDT"],
};

export function getConnectors(networkType: NetworkType) {
  return connectors[networkType].map(e => {
    const result = tokenDataByNetwork[networkType][e];

    if (!result || result === NOT_DEPLOYED) {
      throw new Error(`connector token ${e} not found`);
    }

    return result.toLowerCase();
  });
}
