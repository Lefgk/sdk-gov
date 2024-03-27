import { NetworkType } from "../core/chains";
import { NOT_DEPLOYED } from "../core/constants";
import { TypedObjectUtils } from "../utils/mappers";
import {
  AaveV2LPToken,
  AaveV2PoolTokenData,
  aaveV2Tokens,
  WrappedAaveV2LPToken,
  WrappedAaveV2PoolTokenData,
  wrappedAaveV2Tokens,
} from "./aave";
import {
  AuraLPToken,
  AuraLPTokenData,
  auraLpTokens,
  AuraStakedToken,
  AuraStakedTokenData,
  auraStakedTokens,
} from "./aura";
import {
  BalancerLPToken,
  BalancerLpTokenData,
  balancerLpTokens,
} from "./balancer";
import {
  CompoundV2LPToken,
  CompoundV2PoolTokenData,
  compoundV2Tokens,
} from "./compound";
import {
  ConvexLPToken,
  ConvexLPTokenData,
  ConvexPhantomTokenData,
  ConvexStakedPhantomToken,
  convexTokens,
} from "./convex";
import {
  CurveLPToken,
  CurveLPTokenData,
  curveTokens,
  MetaCurveLPTokenData,
} from "./curveLP";
import { decimals } from "./decimals";
import {
  ERC4626LPToken,
  erc4626Tokens,
  ERC4626VaultOfCurveLPTokenData,
  ERC4626VaultTokenData,
} from "./erc4626";
import {
  DieselStakedTokenData,
  DieselStakedTokenTypes,
  DieselTokenData,
  DieselTokenTypes,
  GearboxToken,
  GearboxTokenData,
  gearTokens,
} from "./gear";
import { NormalToken, NormalTokenData, normalTokens } from "./normal";
import { WrappedToken, WrappedTokenData, wrappedTokens } from "./wrapped";
import {
  YearnLPToken,
  yearnTokens,
  YearnVaultOfCurveLPTokenData,
  YearnVaultOfMetaCurveLPTokenData,
  YearnVaultTokenData,
} from "./yearn";

export type LPTokens =
  | YearnLPToken
  | CurveLPToken
  | ConvexLPToken
  | ConvexStakedPhantomToken
  | BalancerLPToken
  | AaveV2LPToken
  | WrappedAaveV2LPToken
  | CompoundV2LPToken
  | ERC4626LPToken
  | AuraLPToken
  | AuraStakedToken;

export type SupportedToken =
  | NormalToken
  | WrappedToken
  | LPTokens
  | DieselTokenTypes
  | DieselStakedTokenTypes
  | GearboxToken;

export interface TokenBase {
  name: string;
  symbol: string;
}

export type LPTokenDataI =
  | CurveLPTokenData
  | MetaCurveLPTokenData
  | YearnVaultTokenData
  | YearnVaultOfCurveLPTokenData
  | YearnVaultOfMetaCurveLPTokenData
  | ConvexLPTokenData
  | ConvexPhantomTokenData
  | BalancerLpTokenData
  | AaveV2PoolTokenData
  | WrappedAaveV2PoolTokenData
  | CompoundV2PoolTokenData
  | ERC4626VaultTokenData
  | ERC4626VaultOfCurveLPTokenData
  | AuraLPTokenData
  | AuraStakedTokenData;

export type TokenDataI =
  | NormalTokenData
  | WrappedTokenData
  | LPTokenDataI
  | DieselTokenData
  | DieselStakedTokenData
  | GearboxTokenData;

export const lpTokens: Record<LPTokens, LPTokenDataI> = {
  ...curveTokens,
  ...convexTokens,
  ...yearnTokens,
  ...balancerLpTokens,
  ...aaveV2Tokens,
  ...wrappedAaveV2Tokens,
  ...compoundV2Tokens,
  ...erc4626Tokens,
  ...auraLpTokens,
  ...auraStakedTokens,
};

export const supportedTokens: Record<SupportedToken, TokenDataI> = {
  ...normalTokens,
  ...wrappedTokens,
  ...lpTokens,
  ...gearTokens,
};

export const tokenDataByNetwork: Record<
  NetworkType,
  Record<SupportedToken, string>
> = {
  //
  // MAINNET NETWORK
  Mainnet: {
    "1INCH": "0x111111111117dC0aa78b770fA6A738034120C302",
    AAVE: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
    COMP: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
    CRV: "0xD533a949740bb3306d119CC777fa900bA034cd52",
    DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    DPI: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
    FEI: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
    LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
    SNX: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
    UNI: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    USDC_e: NOT_DEPLOYED,
    USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    WBTC: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
    YFI: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
    OHM: "0x64aa3364F17a4D01c6f1751Fd97C2BD3D7e7f1D5",
    MIM: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
    SPELL: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
    GMX: NOT_DEPLOYED,
    ARB: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
    RDNT: NOT_DEPLOYED,
    BAL: "0xba100000625a3754423978a60c9317c58a424e3D",
    SHIB: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",

    /// UPDATE
    STETH: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
    wstETH: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
    CVX: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
    FRAX: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
    FXS: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
    LDO: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
    LUSD: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
    sUSD: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
    GUSD: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
    LQTY: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
    MKR: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
    RPL: "0xB4EFd85c19999D84251304bDA99E90B92300Bd93",
    APE: "0x4d224452801ACEd8B2F0aebE155379bb5D594381",
    rETH: "0xae78736Cd615f374D3085123A210448E74Fc6393",
    AURA: "0xC0c293ce456fF0ED870ADd98a0828Dd4d2903DBF",
    SWISE: "0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2",
    WLD: "0x163f8C2467924be0ae7B5347228CABF260318753",
    OP: NOT_DEPLOYED,
    osETH: "0xf1C9acDc66974dFB6dEcB12aA385b9cD01190E38",
    weETH: "0xCd5fE23C85820F7B72D0926FC9b05b43E359b7ee",
    ezETH: "0xbf5495Efe5DB9ce00f80364C8B423567e58d2110",
    rsETH: "0xA1290d69c65A6Fe4DF752f95823fae25cB99e5A7",
    PENDLE: "0x808507121B80c02388fAd14726482e061B8da827",
    frxETH: "0x5E8422345238F34275888049021821E8E08CAa1f",
    sfrxETH: "0xac3E018457B222d93114458476f3E3416Abbe38F",
    cbETH: "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704",
    rswETH: "0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0",
    USDe: "0x4c9EDD5852cd905f086C759E8383e09bff1E68B3",
    GHO: "0x40D16FC0246aD3160Ccc09B8D0D3A2cD28aE6C2f",

    // CURVE LP TOKENS
    "3Crv": "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
    crvFRAX: "0x3175Df0976dFA876431C2E9eE6Bc45b65d3473CC",
    steCRV: "0x06325440D014e39736583c165C2963BA99fAf14E",
    FRAX3CRV: "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B",
    LUSD3CRV: "0xEd279fDD11cA84bEef15AF5D39BB4d4bEE23F0cA",
    crvPlain3andSUSD: "0xC25a3A3b969415c80451098fa907EC722572917F",
    gusd3CRV: "0xD2967f45c4f384DEEa880F807Be904762a3DeA07",
    USDeUSDC: "0x02950460E2b9529D0E00284A5fA2d7bDF3fA4d72",
    FRAXUSDe: "0x5dc1BF6f1e983C0b21EfB003c105133736fA0743",
    USDecrvUSD: "0xF55B0f6F2Da5ffDDb104b58a60F2862745960442",
    USDeDAI: "0xF36a4BA50C603204c3FC6d2dA8b78A7b69CBC67d",
    OHMFRAXBP: "0x5271045F7B73c17825A7A7aee6917eE46b0B7520",
    MIM_3LP3CRV: "0x5a6A4D54456819380173272A5E8E9B9904BdF41B",
    crvCRVETH: "0xEd4064f376cB8d68F770FB1Ff088a3d0F3FF5c4d",
    crvCVXETH: "0x3A283D9c08E8b55966afb64C515f5143cf907611",
    crvUSDTWBTCWETH: "0xf5f5B97624542D72A9E06f04804Bf81baA15e2B4",
    LDOETH: "0xb79565c01b7Ae53618d9B847b9443aAf4f9011e7",

    crvUSD: "0xf939E0A03FB07F59A73314E73794Be0E57ac1b4E",

    crvUSDUSDC: "0x4DEcE678ceceb27446b35C672dC7d61F30bAD69E",
    crvUSDUSDT: "0x390f3595bCa2Df7d23783dFd126427CCeb997BF4",
    crvUSDFRAX: "0x0CD6f267b2086bea681E922E19D40512511BE538",
    crvUSDETHCRV: "0x4eBdF703948ddCEA3B11f675B4D1Fba9d2414A14",

    rETH_f: "0x6c38cE8984a890F5e46e6dF6117C26b3F1EcfC9C",
    MtEthena: "0x167478921b907422F8E88B43C4Af2B8BEa278d3A",
    GHOUSDe: "0x670a72e6D22b0956C0D2573288F82DCc5d6E3a61",
    wstETHCRV: NOT_DEPLOYED,
    "2CRV": NOT_DEPLOYED,
    "3c-crvUSD": NOT_DEPLOYED,
    crvUSDC: NOT_DEPLOYED,
    crvUSDC_e: NOT_DEPLOYED,
    crvUSDT: NOT_DEPLOYED,
    "3CRV": NOT_DEPLOYED,

    // CONVEX LP TOKENS
    cvx3Crv: "0x30D9410ED1D5DA1F6C8391af5338C93ab8d4035C",
    cvxcrvFRAX: "0x117A0bab81F25e60900787d98061cCFae023560c",
    cvxsteCRV: "0x9518c9063eB0262D791f38d8d6Eb0aca33c63ed0",
    cvxFRAX3CRV: "0xbE0F6478E0E4894CFb14f32855603A083A57c7dA",
    cvxLUSD3CRV: "0xFB9B2f06FDb404Fd3E2278E9A9edc8f252F273d0",
    cvxcrvPlain3andSUSD: "0x11D200ef1409cecA8D6d23e6496550f707772F11",
    cvxgusd3CRV: "0x15c2471ef46Fa721990730cfa526BcFb45574576",
    cvxOHMFRAXBP: "0xd8F1B275c320819c7D752ef79988d0780bf00446",
    cvxMIM_3LP3CRV: "0xabB54222c2b77158CC975a2b715a3d703c256F05",
    cvxcrvCRVETH: "0x0Fb8dcdD95e4C48D3dD0eFA4086512f6F8FD4565",
    cvxcrvCVXETH: "0x0bC857f97c0554d1d0D602b56F2EEcE682016fBA",
    cvxcrvUSDTWBTCWETH: "0xB77BA8B4b9d981269466eE95796A9Af57d4E82DB",
    cvxLDOETH: "0x4eBE557ae39F87D2a014719777FD4cF4d01Dc8Ee",
    cvxcrvUSDUSDC: "0x75A2F59eC37c18962c53b0244D60B53f749DF25E",
    cvxcrvUSDUSDT: "0x939e4C11E391a28CD81248163f3a2e595f12CE5E",
    cvxcrvUSDFRAX: "0x01CcDe1dFb6c84e1Cc13a6Bf777aa2160ABd11BA",
    cvxcrvUSDETHCRV: "0xa11a2c04D62b4A2324Fc857Fa14762Ad94751b4F",

    // CONVEX PHANTOM TOKEN ADDRESSES
    stkcvx3Crv: "0xbAc7a431146aeAf3F57A16b9954f332Fd292F270",
    stkcvxFRAX3CRV: "0xaF314b088B53835d5cF4e4CB81beABa5934a61fe",
    stkcvxgusd3CRV: "0x34fB99abBAFb4e87e256960D572664c6ADc301B8",
    stkcvxsteCRV: "0xe15B7D80a51e1fe54aC355CaBE848Efce5289BDB",
    stkcvxcrvPlain3andSUSD: "0x7e1992A7F28dAA5f6a2d34e2cd40f962f37B172C",
    stkcvxLUSD3CRV: "0x0A1D4A25d0390899b90bCD22E1Ef155003EA76d7",
    stkcvxcrvFRAX: "0x276187f24D41745513cbE2Bd5dFC33a4d8CDc9ed",
    stkcvxOHMFRAXBP: "0x888407AabAfa936B90acF65C4Db19370A01d9bd8",
    stkcvxMIM_3LP3CRV: "0x1aAbe1B22a290cCB39FD77440D5eb96Cf40079f4",
    stkcvxcrvCRVETH: "0xfC4b109D46e12170DF31AF8ba39403fAC2b8c0cf",
    stkcvxcrvCVXETH: "0x948bEd0211076b05d22e98929217d0f04D068C5c",
    stkcvxcrvUSDTWBTCWETH: "0xEE3EE8373384BBfea3227E527C1B9b4e7821273E",
    stkcvxLDOETH: "0x2Fd6bD5b81c1060039D619E76e4e1f924B173006",
    stkcvxcrvUSDUSDC: "0xDb4217B9C8DB788Aa3871d45B4BE6ac5D1FF8C49",
    stkcvxcrvUSDUSDT: "0x5C5e5117E26374870c80a5FA04c3f75a821440D6",
    stkcvxcrvUSDFRAX: "0x7376AD488AB2bd8dF7665d619A4148f0E5094813",
    stkcvxcrvUSDETHCRV: "0x0Bf1626d4925F8A872801968be11c052862AC2D3",

    // YEARN TOKENS
    yvDAI: "0xdA816459F1AB5631232FE5e97a05BBBb94970c95",
    yvUSDC: "0xa354F35829Ae975e850e23e9615b11Da1B3dC4DE",
    yvWETH: "0xa258C4606Ca8206D8aA700cE2143D7db854D168c",
    yvWBTC: "0xA696a63cc78DfFa1a63E9E50587C197387FF6C7E",
    yvUSDT: "0x3B27F92C0e212C671EA351827EDF93DB27cc0c65",
    yvCurve_stETH: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
    yvCurve_FRAX: "0xB4AdA607B9d6b2c9Ee07A275e9616B84AC560139",
    yvOP: NOT_DEPLOYED,

    // BALANCER TOKENS
    "50OHM_50DAI": "0x76FCf0e8C7Ff37A47a799FA2cd4c13cDe0D981C9",
    "50OHM_50WETH": "0xD1eC5e215E8148D76F4460e4097FD3d5ae0A3558",
    OHM_wstETH: "0xd4f79CA0Ac83192693bce4699d0c10C66Aa6Cf0F",
    USDC_DAI_USDT: "0x79c58f70905F734641735BC61e45c19dD9Ad60bC",
    B_rETH_STABLE: "0x1E19CF2D73a72Ef1332C882F20534B6519Be0276",
    weETH_rETH: "0x05ff47AFADa98a98982113758878F9A8B9FddA0a",
    osETH_wETH_BPT: "0xDACf5Fa19b1f720111609043ac67A9818262850c",
    B_80BAL_20WETH: "0x5c6Ee304399DBdB9C8Ef030aB642B10820DB8F56",
    "50WETH_50AURA": "0xCfCA23cA9CA720B6E98E3Eb9B6aa0fFC4a5C08B9",
    ezETH_WETH_BPT: "0x596192bB6e41802428Ac943D2f1476C1Af25CC0E",
    weETH_ezETH_rswETH: "0x848a5564158d84b8A8fb68ab5D004Fae11619A54",
    GHO_USDT_USDC: "0x8353157092ED8Be69a9DF8F95af097bbF33Cb2aF",
    BPT_rETH_ETH: NOT_DEPLOYED,
    BPT_WSTETH_ETH: NOT_DEPLOYED,
    BPT_ROAD: NOT_DEPLOYED,
    ECLP_wstETH_WETH: NOT_DEPLOYED,
    wstETH_WETH_BPT: NOT_DEPLOYED,
    wstETH_rETH_sfrxETH: NOT_DEPLOYED,
    wstETH_rETH_cbETH: NOT_DEPLOYED,
    rETH_WETH_BPT: NOT_DEPLOYED,
    "33AURA_33ARB_33BAL": NOT_DEPLOYED,

    // AURA
    auraB_rETH_STABLE: "0x9497df26e5bD669Cb925eC68E730492b9300c482",
    auraweETH_rETH: "0xb2912397566Dafc9cDee555a38e980661858a61a",
    auraosETH_wETH_BPT: "0x7d7a8889F4277234335F86f18df3b7c0AC5F6aed",
    auraBPT_rETH_ETH: NOT_DEPLOYED,
    auraBPT_WSTETH_ETH: NOT_DEPLOYED,
    aurawstETH_WETH_BPT: NOT_DEPLOYED,
    aurawstETH_rETH_sfrxETH: NOT_DEPLOYED,
    aurawstETH_rETH_cbETH: NOT_DEPLOYED,
    aurarETH_WETH_BPT: NOT_DEPLOYED,

    auraB_rETH_STABLE_vault: "0xDd1fE5AD401D4777cE89959b7fa587e569Bf125D",
    auraweETH_rETH_vault: "0x07A319A023859BbD49CC9C38ee891c3EA9283Cc5",
    auraosETH_wETH_BPT_vault: "0x5F032f15B4e910252EDaDdB899f7201E89C8cD6b",
    auraBPT_rETH_ETH_vault: NOT_DEPLOYED,
    auraBPT_WSTETH_ETH_vault: NOT_DEPLOYED,
    aurawstETH_WETH_BPT_vault: NOT_DEPLOYED,
    aurawstETH_rETH_sfrxETH_vault: NOT_DEPLOYED,
    aurawstETH_rETH_cbETH_vault: NOT_DEPLOYED,
    aurarETH_WETH_BPT_vault: NOT_DEPLOYED,

    // GEARBOX
    dDAI: "0x6CFaF95457d7688022FC53e7AbE052ef8DFBbdBA",
    dUSDC: "0xc411dB5f5Eb3f7d552F9B8454B2D74097ccdE6E3",
    dWBTC: "0xe753260F1955e8678DCeA8887759e07aa57E8c54",
    dWETH: "0xF21fc650C1B34eb0FDE786D52d23dA99Db3D6278",
    dwstETH: "0x2158034dB06f06dcB9A786D2F1F8c38781bA779d",
    dFRAX: "0x8A1112AFef7F4FC7c066a77AABBc01b3Fff31D47",

    dUSDCV3: "0xda00000035fef4082F78dEF6A8903bee419FbF8E",
    dWBTCV3: "0xda00010eDA646913F273E10E7A5d1F659242757d",
    dWETHV3: "0xda0002859B2d05F66a753d8241fCDE8623f26F4f",
    sdUSDCV3: "0x9ef444a6d7F4A5adcd68FD5329aA5240C90E14d2",
    sdWBTCV3: "0xA8cE662E45E825DAF178DA2c8d5Fae97696A788A",
    sdWETHV3: "0x0418fEB7d0B25C411EB77cD654305d29FcbFf685",

    dUSDTV3: "0x05A811275fE9b4DE503B3311F51edF6A856D936e",
    dGHOV3: "0x4d56c9cBa373AD39dF69Eb18F076b7348000AE09",
    dDAIV3: "0xe7146F53dBcae9D6Fa3555FE502648deb0B2F823",
    sdUSDTV3: "0x16adAb68bDEcE3089D4f1626Bb5AEDD0d02471aD",
    sdGHOV3: "0xE2037090f896A858E3168B978668F22026AC52e7",
    sdDAIV3: "0xC853E4DA38d9Bd1d01675355b8c8f3BBC1451973",

    GEAR: "0xBa3335588D9403515223F109EdC4eB7269a9Ab5D",

    // ERC4626
    sDAI: "0x83F20F44975D03b1b09e64809B757c47f942BEeA",
    YieldETH: "0xb5b29320d2Dde5BA5BAFA1EbcD270052070483ec",
    sUSDe: "0x9D39A5DE30e57443BfF2A8307A4256c8797A3497",

    // AAVE
    aUSDC: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
    aDAI: "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
    aUSDT: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
    aWETH: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",

    waDAI: NOT_DEPLOYED,
    waUSDC: NOT_DEPLOYED,
    waUSDT: NOT_DEPLOYED,
    waWETH: NOT_DEPLOYED,

    // COMPOUND
    fUSDC: "0x465a5a630482f3abD6d3b84B39B29b07214d19e5",
    cDAI: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
    cUSDC: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
    cUSDT: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
    cETH: "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
    cLINK: "0xFAce851a4921ce59e912d19329929CE6da6EB0c7",
  },

  ///
  ///
  /// A R B I T R U M   N E T W O R K
  ///
  ///
  Arbitrum: {
    "1INCH": NOT_DEPLOYED,
    AAVE: "0xba5DdD1f9d7F570dc94a51479a000E3BCE967196",
    COMP: "0x354A6dA3fcde098F8389cad84b0182725c6C91dE",
    CRV: "0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978",
    DAI: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    DPI: NOT_DEPLOYED,
    FEI: NOT_DEPLOYED,
    LINK: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
    SNX: "0xcBA56Cd8216FCBBF3fA6DF6137F3147cBcA37D60",
    UNI: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
    USDT: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
    USDC: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
    USDC_e: "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",
    WBTC: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
    WETH: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    YFI: "0x82e3A8F066a6989666b031d916c43672085b1582",
    OHM: "0x6E6a3D8F1AfFAc703B1aEF1F43B8D2321bE40043",
    MIM: "0xFEa7a6a0B346362BF88A9e4A88416B77a57D6c2A",
    SPELL: "0x3E6648C5a70A150A88bCE65F4aD4d506Fe15d2AF",
    GMX: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    ARB: "0x912CE59144191C1204E64559FE8253a0e49E6548",
    RDNT: "0x3082CC23568eA640225c2467653dB90e9250AaA0",
    BAL: "0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8",
    AURA: "0x1509706a6c66CA549ff0cB464de88231DDBe213B",
    SWISE: NOT_DEPLOYED,

    /// UPDATE
    STETH: NOT_DEPLOYED,
    wstETH: "0x5979D7b546E38E414F7E9822514be443A4800529",
    CVX: "0xb952A807345991BD529FDded05009F5e80Fe8F45",
    FRAX: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
    FXS: "0x9d2F299715D94d8A7E6F5eaa8E654E8c74a988A7",
    LDO: "0x13Ad51ed4F1B7e9Dc168d8a00cB3f4dDD85EfA60",
    LUSD: "0x93b346b6BC2548dA6A1E7d98E9a421B42541425b",
    sUSD: "0xA970AF1a584579B618be4d69aD6F73459D112F95",
    GUSD: NOT_DEPLOYED,
    LQTY: "0xfb9E5D956D889D91a82737B9bFCDaC1DCE3e1449",
    MKR: NOT_DEPLOYED,
    RPL: "0xB766039cc6DB368759C1E56B79AFfE831d0Cc507",
    APE: NOT_DEPLOYED,
    rETH: "0xEC70Dcb4A1EFa46b8F2D97C310C9c4790ba5ffA8",
    WLD: NOT_DEPLOYED,
    OP: NOT_DEPLOYED,
    osETH: NOT_DEPLOYED,
    weETH: "0x35751007a407ca6FEFfE80b3cB397736D2cf4dbe",
    ezETH: "0x2416092f143378750bb29b79eD961ab195CcEea5",
    rsETH: "0x4186BFC76E2E237523CBC30FD220FE055156b41F",
    PENDLE: "0x0c880f6761F1af8d9Aa9C466984b80DAb9a8c9e8",
    frxETH: "0x178412e79c25968a32e89b11f63B33F733770c2A",
    sfrxETH: "0x95aB45875cFFdba1E5f451B950bC2E42c0053f39",
    cbETH: "0x1DEBd73E752bEaF79865Fd6446b0c970EaE7732f",
    rswETH: NOT_DEPLOYED,
    USDe: NOT_DEPLOYED,
    GHO: NOT_DEPLOYED,

    // REDSTONE
    SHIB: NOT_DEPLOYED,

    // YEARN TOKENS
    yvDAI: NOT_DEPLOYED,
    yvUSDC: NOT_DEPLOYED,
    yvWETH: NOT_DEPLOYED,
    yvWBTC: NOT_DEPLOYED,
    yvUSDT: NOT_DEPLOYED,
    yvOP: NOT_DEPLOYED,
    yvCurve_stETH: NOT_DEPLOYED,
    yvCurve_FRAX: NOT_DEPLOYED,

    // CURVE LP TOKENS
    "3Crv": NOT_DEPLOYED,
    "2CRV": "0x7f90122BF0700F9E7e1F688fe926940E8839F353",
    "3c-crvUSD": "0x82670f35306253222F8a165869B28c64739ac62e",
    wstETHCRV: NOT_DEPLOYED,
    crvFRAX: NOT_DEPLOYED,
    steCRV: NOT_DEPLOYED,
    FRAX3CRV: NOT_DEPLOYED,
    LUSD3CRV: NOT_DEPLOYED,
    crvPlain3andSUSD: NOT_DEPLOYED,
    gusd3CRV: NOT_DEPLOYED,
    USDeUSDC: NOT_DEPLOYED,
    FRAXUSDe: NOT_DEPLOYED,
    USDecrvUSD: NOT_DEPLOYED,
    OHMFRAXBP: NOT_DEPLOYED,
    MIM_3LP3CRV: NOT_DEPLOYED,
    crvCRVETH: NOT_DEPLOYED,
    crvCVXETH: NOT_DEPLOYED,
    crvUSDTWBTCWETH: NOT_DEPLOYED,
    LDOETH: NOT_DEPLOYED,
    USDeDAI: NOT_DEPLOYED,
    MtEthena: NOT_DEPLOYED,
    GHOUSDe: NOT_DEPLOYED,

    crvUSDUSDC: NOT_DEPLOYED,
    crvUSDUSDT: NOT_DEPLOYED,
    crvUSDFRAX: "0x2FE7AE43591E534C256A1594D326e5779E302Ff4",
    crvUSDETHCRV: NOT_DEPLOYED,
    crvUSDC: "0xec090cf6DD891D2d014beA6edAda6e05E025D93d",
    crvUSDT: "0x73aF1150F265419Ef8a5DB41908B700C32D49135",
    crvUSDC_e: "0x3aDf984c937FA6846E5a24E0A68521Bdaf767cE1",

    rETH_f: NOT_DEPLOYED,
    "3CRV": NOT_DEPLOYED,

    // CONVEX LP TOKENS
    cvx3Crv: NOT_DEPLOYED,
    cvxcrvFRAX: NOT_DEPLOYED,
    cvxsteCRV: NOT_DEPLOYED,
    cvxcrvPlain3andSUSD: NOT_DEPLOYED,
    cvxFRAX3CRV: NOT_DEPLOYED,
    cvxLUSD3CRV: NOT_DEPLOYED,
    cvxgusd3CRV: NOT_DEPLOYED,
    cvxOHMFRAXBP: NOT_DEPLOYED,
    cvxMIM_3LP3CRV: NOT_DEPLOYED,
    cvxcrvCRVETH: NOT_DEPLOYED,
    cvxcrvCVXETH: NOT_DEPLOYED,
    cvxcrvUSDTWBTCWETH: NOT_DEPLOYED,
    cvxLDOETH: NOT_DEPLOYED,
    cvxcrvUSDUSDC: NOT_DEPLOYED,
    cvxcrvUSDUSDT: NOT_DEPLOYED,
    cvxcrvUSDFRAX: NOT_DEPLOYED,
    cvxcrvUSDETHCRV: NOT_DEPLOYED,

    crvUSD: "0x498Bf2B1e120FeD3ad3D42EA2165E9b73f99C1e5",

    // CONVEX PHANTOM TOKEN ADDRESSES
    stkcvx3Crv: NOT_DEPLOYED,
    stkcvxcrvFRAX: NOT_DEPLOYED,
    stkcvxFRAX3CRV: NOT_DEPLOYED,
    stkcvxgusd3CRV: NOT_DEPLOYED,
    stkcvxsteCRV: NOT_DEPLOYED,
    stkcvxcrvPlain3andSUSD: NOT_DEPLOYED,
    stkcvxLUSD3CRV: NOT_DEPLOYED,
    stkcvxOHMFRAXBP: NOT_DEPLOYED,
    stkcvxMIM_3LP3CRV: NOT_DEPLOYED,
    stkcvxcrvCRVETH: NOT_DEPLOYED,
    stkcvxcrvCVXETH: NOT_DEPLOYED,
    stkcvxcrvUSDTWBTCWETH: NOT_DEPLOYED,
    stkcvxLDOETH: NOT_DEPLOYED,
    stkcvxcrvUSDUSDC: NOT_DEPLOYED,
    stkcvxcrvUSDUSDT: NOT_DEPLOYED,
    stkcvxcrvUSDFRAX: NOT_DEPLOYED,
    stkcvxcrvUSDETHCRV: NOT_DEPLOYED,

    // BALANCER TOKENS
    "50OHM_50DAI": NOT_DEPLOYED,
    "50OHM_50WETH": NOT_DEPLOYED,
    B_80BAL_20WETH: NOT_DEPLOYED,
    "50WETH_50AURA": NOT_DEPLOYED,
    OHM_wstETH: NOT_DEPLOYED,
    USDC_DAI_USDT: NOT_DEPLOYED,
    B_rETH_STABLE: NOT_DEPLOYED,
    BPT_rETH_ETH: NOT_DEPLOYED,
    BPT_WSTETH_ETH: NOT_DEPLOYED,
    BPT_ROAD: NOT_DEPLOYED,
    ECLP_wstETH_WETH: NOT_DEPLOYED,
    weETH_rETH: NOT_DEPLOYED,
    osETH_wETH_BPT: NOT_DEPLOYED,
    ezETH_WETH_BPT: NOT_DEPLOYED,
    weETH_ezETH_rswETH: NOT_DEPLOYED,
    GHO_USDT_USDC: NOT_DEPLOYED,
    wstETH_WETH_BPT: "0x9791d590788598535278552EEcD4b211bFc790CB",
    wstETH_rETH_sfrxETH: "0x0c8972437a38b389ec83d1E666b69b8a4fcf8bfd",
    wstETH_rETH_cbETH: "0x4a2F6Ae7F3e5D715689530873ec35593Dc28951B",
    rETH_WETH_BPT: "0xadE4A71BB62bEc25154CFc7e6ff49A513B491E81",
    "33AURA_33ARB_33BAL": "0xbcaA6c053cab3Dd73a2E898d89A4f84a180ae1CA",

    // AURA

    auraB_rETH_STABLE: NOT_DEPLOYED,
    auraweETH_rETH: NOT_DEPLOYED,
    auraosETH_wETH_BPT: NOT_DEPLOYED,
    auraBPT_rETH_ETH: NOT_DEPLOYED,
    auraBPT_WSTETH_ETH: NOT_DEPLOYED,
    aurawstETH_WETH_BPT: "0xc99B6fD0486448F100891CA43C015fD6f09c8bD0",
    aurawstETH_rETH_sfrxETH: "0x5db70B93942936c01e5a1A1D19ABc442A9C967e3",
    aurawstETH_rETH_cbETH: "0x7A1b7f30a98d4C8BDB66AaDc6E13Be4AcdD4DE2C",
    aurarETH_WETH_BPT: "0xE23B5EC0100d446E4086D03e3546D6ef6F6Bcf1c",

    auraB_rETH_STABLE_vault: NOT_DEPLOYED,
    auraweETH_rETH_vault: NOT_DEPLOYED,
    auraosETH_wETH_BPT_vault: NOT_DEPLOYED,
    auraBPT_rETH_ETH_vault: NOT_DEPLOYED,
    auraBPT_WSTETH_ETH_vault: NOT_DEPLOYED,
    aurawstETH_WETH_BPT_vault: "0xa7BdaD177D474f946f3cDEB4bcea9d24Cf017471",
    aurawstETH_rETH_sfrxETH_vault: "0xa427B131059A503b5fC9C7e1a130585ca3b32e3d",
    aurawstETH_rETH_cbETH_vault: "0x8cA64Bd82AbFE138E195ce5Cb7268CA285D42245",
    aurarETH_WETH_BPT_vault: "0x129A44AC6ff0f965C907579F96F2eD682E52c84A",

    // GEARBOX
    dDAI: NOT_DEPLOYED,
    dUSDC: NOT_DEPLOYED,
    dWBTC: NOT_DEPLOYED,
    dWETH: NOT_DEPLOYED,
    dwstETH: NOT_DEPLOYED,
    dFRAX: NOT_DEPLOYED,

    dUSDCV3: "0xa76c604145D7394DEc36C49Af494C144Ff327861",
    dWBTCV3: NOT_DEPLOYED,
    dWETHV3: "0x04419d3509f13054f60d253E0c79491d9E683399",
    sdUSDCV3: "0x608F9e2E8933Ce6b39A8CddBc34a1e3E8D21cE75",
    sdWBTCV3: NOT_DEPLOYED,
    sdWETHV3: "0x6773fF780Dd38175247795545Ee37adD6ab6139a",

    dUSDTV3: NOT_DEPLOYED,
    dGHOV3: NOT_DEPLOYED,
    dDAIV3: NOT_DEPLOYED,
    sdUSDTV3: NOT_DEPLOYED,
    sdGHOV3: NOT_DEPLOYED,
    sdDAIV3: NOT_DEPLOYED,

    GEAR: "0x2F26337576127efabEEc1f62BE79dB1bcA9148A4",

    // AAVE
    aUSDC: "0x724dc807b04555b71ed48a6896b6F41593b8C637",
    aDAI: "0x82E64f49Ed5EC1bC6e43DAD4FC8Af9bb3A2312EE",
    aUSDT: "0x6ab707Aca953eDAeFBc4fD23bA73294241490620",
    aWETH: "0xe50fA9b3c56FfB159cB0FCA61F5c9D750e8128c8",

    waDAI: NOT_DEPLOYED,
    waUSDC: NOT_DEPLOYED,
    waUSDT: NOT_DEPLOYED,
    waWETH: NOT_DEPLOYED,

    cDAI: NOT_DEPLOYED,
    cUSDC: NOT_DEPLOYED,
    cUSDT: NOT_DEPLOYED,
    cETH: NOT_DEPLOYED,
    cLINK: NOT_DEPLOYED,

    fUSDC: NOT_DEPLOYED,
    sDAI: NOT_DEPLOYED,
    YieldETH: NOT_DEPLOYED,
    sUSDe: NOT_DEPLOYED,
  },
  ///
  ///
  /// OPTIMISM
  ///
  ///
  Optimism: {
    "1INCH": NOT_DEPLOYED,
    AAVE: "0x76FB31fb4af56892A25e32cFC43De717950c9278",
    COMP: NOT_DEPLOYED,
    CRV: "0x0994206dfE8De6Ec6920FF4D779B0d950605Fb53",
    DAI: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    DPI: NOT_DEPLOYED,
    FEI: NOT_DEPLOYED,
    LINK: "0x350a791Bfc2C21F9Ed5d10980Dad2e2638ffa7f6",
    SNX: "0x8700dAec35aF8Ff88c16BdF0418774CB3D7599B4",
    UNI: "0x6fd9d7AD17242c41f7131d257212c54A0e816691",
    USDT: "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58",
    USDC: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    USDC_e: "0x7F5c764cBc14f9669B88837ca1490cCa17c31607",
    WBTC: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
    WETH: "0x4200000000000000000000000000000000000006",
    YFI: "0x9046D36440290FfDE54FE0DD84Db8b1CfEE9107B",
    OHM: NOT_DEPLOYED,
    MIM: "0xB153FB3d196A8eB25522705560ac152eeEc57901",
    SPELL: NOT_DEPLOYED,
    GMX: NOT_DEPLOYED,
    ARB: NOT_DEPLOYED,
    RDNT: NOT_DEPLOYED,
    BAL: "0xFE8B128bA8C78aabC59d4c64cEE7fF28e9379921",
    AURA: "0x1509706a6c66CA549ff0cB464de88231DDBe213B",
    SWISE: NOT_DEPLOYED,
    WLD: "0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1",
    OP: "0x4200000000000000000000000000000000000042",

    /// UPDATE
    STETH: NOT_DEPLOYED,
    wstETH: "0x1F32b1c2345538c0c6f582fCB022739c4A194Ebb",
    CVX: NOT_DEPLOYED,
    FRAX: "0x2E3D870790dC77A83DD1d18184Acc7439A53f475",
    FXS: "0x67CCEA5bb16181E7b4109c9c2143c24a1c2205Be",
    LDO: "0xFdb794692724153d1488CcdBE0C56c252596735F",
    LUSD: "0xc40F949F8a4e094D1b49a23ea9241D289B7b2819",
    sUSD: "0x8c6f28f2F1A3C87F0f938b96d27520d9751ec8d9",
    GUSD: NOT_DEPLOYED,
    LQTY: NOT_DEPLOYED,
    MKR: NOT_DEPLOYED,
    RPL: "0xC81D1F0EB955B0c020E5d5b264E1FF72c14d1401",
    APE: NOT_DEPLOYED,
    rETH: "0x9Bcef72be871e61ED4fBbc7630889beE758eb81D",
    osETH: NOT_DEPLOYED,
    weETH: NOT_DEPLOYED,
    ezETH: NOT_DEPLOYED,
    rsETH: NOT_DEPLOYED,
    PENDLE: "0xBC7B1Ff1c6989f006a1185318eD4E7b5796e66E1",
    frxETH: "0x6806411765Af15Bddd26f8f544A34cC40cb9838B",
    sfrxETH: "0x484c2D6e3cDd945a8B2DF735e079178C1036578c",
    cbETH: "0xadDb6A0412DE1BA0F936DCaeb8Aaa24578dcF3B2",
    rswETH: NOT_DEPLOYED,
    USDe: NOT_DEPLOYED,
    GHO: NOT_DEPLOYED,

    // REDSTONE
    SHIB: NOT_DEPLOYED,

    // YEARN TOKENS
    yvDAI: "0x65343F414FFD6c97b0f6add33d16F6845Ac22BAc",
    yvUSDC: "0xaD17A225074191d5c8a37B50FdA1AE278a2EE6A2",
    yvUSDT: "0xFaee21D0f0Af88EE72BB6d68E54a90E6EC2616de",
    yvWETH: "0x5B977577Eb8a480f63e11FC615D6753adB8652Ae",
    yvWBTC: "0x7Edf16076e56FA4c111055fbA1fF5556b8757cFB",
    yvOP: "0x7D2382b1f8Af621229d33464340541Db362B4907",
    yvCurve_stETH: NOT_DEPLOYED,
    yvCurve_FRAX: NOT_DEPLOYED,

    // CURVE LP TOKENS
    "3Crv": NOT_DEPLOYED,
    "3CRV": "0x15F52286C0FF1d7A7dDbC9E300dd66628D46D4e6",
    wstETHCRV: "0xEfDE221f306152971D8e9f181bFe998447975810",
    crvFRAX: NOT_DEPLOYED,
    steCRV: NOT_DEPLOYED,
    FRAX3CRV: NOT_DEPLOYED,
    LUSD3CRV: NOT_DEPLOYED,
    crvPlain3andSUSD: NOT_DEPLOYED,
    gusd3CRV: NOT_DEPLOYED,
    USDeUSDC: NOT_DEPLOYED,
    FRAXUSDe: NOT_DEPLOYED,
    USDecrvUSD: NOT_DEPLOYED,
    OHMFRAXBP: NOT_DEPLOYED,
    MIM_3LP3CRV: NOT_DEPLOYED,
    crvCRVETH: NOT_DEPLOYED,
    crvCVXETH: NOT_DEPLOYED,
    crvUSDTWBTCWETH: NOT_DEPLOYED,
    LDOETH: NOT_DEPLOYED,
    USDeDAI: NOT_DEPLOYED,
    MtEthena: NOT_DEPLOYED,
    GHOUSDe: NOT_DEPLOYED,

    crvUSDUSDC: NOT_DEPLOYED,
    crvUSDUSDT: NOT_DEPLOYED,
    crvUSDFRAX: NOT_DEPLOYED,
    crvUSDETHCRV: NOT_DEPLOYED,

    "2CRV": NOT_DEPLOYED,
    "3c-crvUSD": NOT_DEPLOYED,
    crvUSDC: NOT_DEPLOYED,
    crvUSDC_e: NOT_DEPLOYED,
    crvUSDT: NOT_DEPLOYED,

    rETH_f: NOT_DEPLOYED,

    // CONVEX LP TOKENS
    cvx3Crv: NOT_DEPLOYED,
    cvxcrvFRAX: NOT_DEPLOYED,
    cvxsteCRV: NOT_DEPLOYED,
    cvxcrvPlain3andSUSD: NOT_DEPLOYED,
    cvxFRAX3CRV: NOT_DEPLOYED,
    cvxLUSD3CRV: NOT_DEPLOYED,
    cvxgusd3CRV: NOT_DEPLOYED,
    cvxOHMFRAXBP: NOT_DEPLOYED,
    cvxMIM_3LP3CRV: NOT_DEPLOYED,
    cvxcrvCRVETH: NOT_DEPLOYED,
    cvxcrvCVXETH: NOT_DEPLOYED,
    cvxcrvUSDTWBTCWETH: NOT_DEPLOYED,
    cvxLDOETH: NOT_DEPLOYED,
    cvxcrvUSDUSDC: NOT_DEPLOYED,
    cvxcrvUSDUSDT: NOT_DEPLOYED,
    cvxcrvUSDFRAX: NOT_DEPLOYED,
    cvxcrvUSDETHCRV: NOT_DEPLOYED,

    crvUSD: NOT_DEPLOYED,

    // CONVEX PHANTOM TOKEN ADDRESSES
    stkcvx3Crv: NOT_DEPLOYED,
    stkcvxcrvFRAX: NOT_DEPLOYED,
    stkcvxFRAX3CRV: NOT_DEPLOYED,
    stkcvxgusd3CRV: NOT_DEPLOYED,
    stkcvxsteCRV: NOT_DEPLOYED,
    stkcvxcrvPlain3andSUSD: NOT_DEPLOYED,
    stkcvxLUSD3CRV: NOT_DEPLOYED,
    stkcvxOHMFRAXBP: NOT_DEPLOYED,
    stkcvxMIM_3LP3CRV: NOT_DEPLOYED,
    stkcvxcrvCRVETH: NOT_DEPLOYED,
    stkcvxcrvCVXETH: NOT_DEPLOYED,
    stkcvxcrvUSDTWBTCWETH: NOT_DEPLOYED,
    stkcvxLDOETH: NOT_DEPLOYED,
    stkcvxcrvUSDUSDC: NOT_DEPLOYED,
    stkcvxcrvUSDUSDT: NOT_DEPLOYED,
    stkcvxcrvUSDFRAX: NOT_DEPLOYED,
    stkcvxcrvUSDETHCRV: NOT_DEPLOYED,

    // BALANCER TOKENS
    "50OHM_50DAI": NOT_DEPLOYED,
    "50OHM_50WETH": NOT_DEPLOYED,
    OHM_wstETH: NOT_DEPLOYED,
    USDC_DAI_USDT: NOT_DEPLOYED,
    B_rETH_STABLE: NOT_DEPLOYED,
    weETH_rETH: NOT_DEPLOYED,
    osETH_wETH_BPT: NOT_DEPLOYED,
    B_80BAL_20WETH: NOT_DEPLOYED,
    "50WETH_50AURA": NOT_DEPLOYED,
    wstETH_WETH_BPT: NOT_DEPLOYED,
    wstETH_rETH_cbETH: NOT_DEPLOYED,
    wstETH_rETH_sfrxETH: NOT_DEPLOYED,
    rETH_WETH_BPT: NOT_DEPLOYED,
    ezETH_WETH_BPT: NOT_DEPLOYED,
    weETH_ezETH_rswETH: NOT_DEPLOYED,
    "33AURA_33ARB_33BAL": NOT_DEPLOYED,
    GHO_USDT_USDC: NOT_DEPLOYED,

    BPT_rETH_ETH: "0x4Fd63966879300caFafBB35D157dC5229278Ed23",
    BPT_WSTETH_ETH: "0x7B50775383d3D6f0215A8F290f2C9e2eEBBEceb2",
    BPT_ROAD: "0x39965c9dAb5448482Cf7e002F583c812Ceb53046",
    ECLP_wstETH_WETH: "0x7Ca75bdEa9dEde97F8B13C6641B768650CB83782",

    // AURA
    auraB_rETH_STABLE: NOT_DEPLOYED,
    auraweETH_rETH: NOT_DEPLOYED,
    auraosETH_wETH_BPT: NOT_DEPLOYED,
    auraBPT_rETH_ETH: "0x094C6846Fb2801b4753182ADFac336AAE8030A46",
    auraBPT_WSTETH_ETH: "0x4c7E79c921144eBf7eBdbf0D3156bf192cDBe5f5",
    aurarETH_WETH_BPT: NOT_DEPLOYED,
    aurawstETH_rETH_cbETH: NOT_DEPLOYED,
    aurawstETH_rETH_sfrxETH: NOT_DEPLOYED,
    aurawstETH_WETH_BPT: NOT_DEPLOYED,

    auraB_rETH_STABLE_vault: NOT_DEPLOYED,
    auraweETH_rETH_vault: NOT_DEPLOYED,
    auraosETH_wETH_BPT_vault: NOT_DEPLOYED,
    auraBPT_rETH_ETH_vault: "0x61ac9315a1Ae71633E95Fb35601B59180eC8d61d",
    auraBPT_WSTETH_ETH_vault: "0xe110b862E4D076596707892c0C5163BC183eb161",
    aurarETH_WETH_BPT_vault: NOT_DEPLOYED,
    aurawstETH_rETH_cbETH_vault: NOT_DEPLOYED,
    aurawstETH_rETH_sfrxETH_vault: NOT_DEPLOYED,
    aurawstETH_WETH_BPT_vault: NOT_DEPLOYED,

    // GEARBOX
    dDAI: NOT_DEPLOYED,
    dUSDC: NOT_DEPLOYED,
    dWBTC: NOT_DEPLOYED,
    dWETH: NOT_DEPLOYED,
    dwstETH: NOT_DEPLOYED,
    dFRAX: NOT_DEPLOYED,

    dUSDCV3: NOT_DEPLOYED,
    dWBTCV3: NOT_DEPLOYED,
    dWETHV3: NOT_DEPLOYED,
    sdUSDCV3: NOT_DEPLOYED,
    sdWBTCV3: NOT_DEPLOYED,
    sdWETHV3: NOT_DEPLOYED,

    dUSDTV3: NOT_DEPLOYED,
    dGHOV3: NOT_DEPLOYED,
    dDAIV3: NOT_DEPLOYED,
    sdUSDTV3: NOT_DEPLOYED,
    sdGHOV3: NOT_DEPLOYED,
    sdDAIV3: NOT_DEPLOYED,

    GEAR: NOT_DEPLOYED,

    // AAVE
    aUSDC: NOT_DEPLOYED,
    aDAI: NOT_DEPLOYED,
    aUSDT: NOT_DEPLOYED,
    aWETH: NOT_DEPLOYED,

    waDAI: NOT_DEPLOYED,
    waUSDC: NOT_DEPLOYED,
    waUSDT: NOT_DEPLOYED,
    waWETH: NOT_DEPLOYED,

    cDAI: NOT_DEPLOYED,
    cUSDC: NOT_DEPLOYED,
    cUSDT: NOT_DEPLOYED,
    cETH: NOT_DEPLOYED,
    cLINK: NOT_DEPLOYED,

    fUSDC: NOT_DEPLOYED,
    sDAI: NOT_DEPLOYED,
    YieldETH: NOT_DEPLOYED,
    sUSDe: NOT_DEPLOYED,
  },
  //
  //
  // BASE
  //
  //
  ///
  ///
  /// OPTIMISM
  ///
  ///
  Base: {
    "1INCH": NOT_DEPLOYED,
    AAVE: NOT_DEPLOYED,
    COMP: NOT_DEPLOYED,
    CRV: NOT_DEPLOYED,
    DAI: NOT_DEPLOYED,
    DPI: NOT_DEPLOYED,
    FEI: NOT_DEPLOYED,
    LINK: NOT_DEPLOYED,
    SNX: NOT_DEPLOYED,
    UNI: NOT_DEPLOYED,
    USDT: NOT_DEPLOYED,
    USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    USDC_e: NOT_DEPLOYED,
    WBTC: NOT_DEPLOYED,
    WETH: NOT_DEPLOYED,
    YFI: NOT_DEPLOYED,
    OHM: NOT_DEPLOYED,
    MIM: NOT_DEPLOYED,
    SPELL: NOT_DEPLOYED,
    GMX: NOT_DEPLOYED,
    ARB: NOT_DEPLOYED,
    RDNT: NOT_DEPLOYED,
    BAL: NOT_DEPLOYED,
    AURA: NOT_DEPLOYED,
    SWISE: NOT_DEPLOYED,
    WLD: NOT_DEPLOYED,
    OP: NOT_DEPLOYED,

    /// UPDATE
    STETH: NOT_DEPLOYED,
    wstETH: NOT_DEPLOYED,
    CVX: NOT_DEPLOYED,
    FRAX: NOT_DEPLOYED,
    FXS: NOT_DEPLOYED,
    LDO: NOT_DEPLOYED,
    LUSD: NOT_DEPLOYED,
    sUSD: NOT_DEPLOYED,
    GUSD: NOT_DEPLOYED,
    LQTY: NOT_DEPLOYED,
    MKR: NOT_DEPLOYED,
    RPL: NOT_DEPLOYED,
    APE: NOT_DEPLOYED,
    rETH: NOT_DEPLOYED,
    osETH: NOT_DEPLOYED,
    weETH: NOT_DEPLOYED,
    ezETH: NOT_DEPLOYED,
    rsETH: NOT_DEPLOYED,
    PENDLE: NOT_DEPLOYED,
    frxETH: NOT_DEPLOYED,
    sfrxETH: NOT_DEPLOYED,
    cbETH: NOT_DEPLOYED,
    rswETH: NOT_DEPLOYED,
    USDe: NOT_DEPLOYED,

    // REDSTONE
    SHIB: NOT_DEPLOYED,

    // YEARN TOKENS
    yvDAI: NOT_DEPLOYED,
    yvUSDC: NOT_DEPLOYED,
    yvUSDT: NOT_DEPLOYED,
    yvWETH: NOT_DEPLOYED,
    yvWBTC: NOT_DEPLOYED,
    yvOP: NOT_DEPLOYED,
    yvCurve_stETH: NOT_DEPLOYED,
    yvCurve_FRAX: NOT_DEPLOYED,

    // CURVE LP TOKENS
    "3Crv": NOT_DEPLOYED,
    "3CRV": NOT_DEPLOYED,
    wstETHCRV: NOT_DEPLOYED,
    crvFRAX: NOT_DEPLOYED,
    steCRV: NOT_DEPLOYED,
    FRAX3CRV: NOT_DEPLOYED,
    LUSD3CRV: NOT_DEPLOYED,
    crvPlain3andSUSD: NOT_DEPLOYED,
    gusd3CRV: NOT_DEPLOYED,
    USDeUSDC: NOT_DEPLOYED,
    FRAXUSDe: NOT_DEPLOYED,
    USDecrvUSD: NOT_DEPLOYED,
    OHMFRAXBP: NOT_DEPLOYED,
    MIM_3LP3CRV: NOT_DEPLOYED,
    crvCRVETH: NOT_DEPLOYED,
    crvCVXETH: NOT_DEPLOYED,
    crvUSDTWBTCWETH: NOT_DEPLOYED,
    LDOETH: NOT_DEPLOYED,
    USDeDAI: NOT_DEPLOYED,
    MtEthena: NOT_DEPLOYED,

    crvUSDUSDC: NOT_DEPLOYED,
    crvUSDUSDT: NOT_DEPLOYED,
    crvUSDFRAX: NOT_DEPLOYED,
    crvUSDETHCRV: NOT_DEPLOYED,

    "2CRV": NOT_DEPLOYED,
    "3c-crvUSD": NOT_DEPLOYED,
    crvUSDC: NOT_DEPLOYED,
    crvUSDC_e: NOT_DEPLOYED,
    crvUSDT: NOT_DEPLOYED,

    rETH_f: NOT_DEPLOYED,

    // CONVEX LP TOKENS
    cvx3Crv: NOT_DEPLOYED,
    cvxcrvFRAX: NOT_DEPLOYED,
    cvxsteCRV: NOT_DEPLOYED,
    cvxcrvPlain3andSUSD: NOT_DEPLOYED,
    cvxFRAX3CRV: NOT_DEPLOYED,
    cvxLUSD3CRV: NOT_DEPLOYED,
    cvxgusd3CRV: NOT_DEPLOYED,
    cvxOHMFRAXBP: NOT_DEPLOYED,
    cvxMIM_3LP3CRV: NOT_DEPLOYED,
    cvxcrvCRVETH: NOT_DEPLOYED,
    cvxcrvCVXETH: NOT_DEPLOYED,
    cvxcrvUSDTWBTCWETH: NOT_DEPLOYED,
    cvxLDOETH: NOT_DEPLOYED,
    cvxcrvUSDUSDC: NOT_DEPLOYED,
    cvxcrvUSDUSDT: NOT_DEPLOYED,
    cvxcrvUSDFRAX: NOT_DEPLOYED,
    cvxcrvUSDETHCRV: NOT_DEPLOYED,

    crvUSD: NOT_DEPLOYED,

    // CONVEX PHANTOM TOKEN ADDRESSES
    stkcvx3Crv: NOT_DEPLOYED,
    stkcvxcrvFRAX: NOT_DEPLOYED,
    stkcvxFRAX3CRV: NOT_DEPLOYED,
    stkcvxgusd3CRV: NOT_DEPLOYED,
    stkcvxsteCRV: NOT_DEPLOYED,
    stkcvxcrvPlain3andSUSD: NOT_DEPLOYED,
    stkcvxLUSD3CRV: NOT_DEPLOYED,
    stkcvxOHMFRAXBP: NOT_DEPLOYED,
    stkcvxMIM_3LP3CRV: NOT_DEPLOYED,
    stkcvxcrvCRVETH: NOT_DEPLOYED,
    stkcvxcrvCVXETH: NOT_DEPLOYED,
    stkcvxcrvUSDTWBTCWETH: NOT_DEPLOYED,
    stkcvxLDOETH: NOT_DEPLOYED,
    stkcvxcrvUSDUSDC: NOT_DEPLOYED,
    stkcvxcrvUSDUSDT: NOT_DEPLOYED,
    stkcvxcrvUSDFRAX: NOT_DEPLOYED,
    stkcvxcrvUSDETHCRV: NOT_DEPLOYED,

    // BALANCER TOKENS
    "50OHM_50DAI": NOT_DEPLOYED,
    "50OHM_50WETH": NOT_DEPLOYED,
    OHM_wstETH: NOT_DEPLOYED,
    USDC_DAI_USDT: NOT_DEPLOYED,
    B_rETH_STABLE: NOT_DEPLOYED,
    weETH_rETH: NOT_DEPLOYED,
    osETH_wETH_BPT: NOT_DEPLOYED,
    B_80BAL_20WETH: NOT_DEPLOYED,
    "50WETH_50AURA": NOT_DEPLOYED,
    wstETH_WETH_BPT: NOT_DEPLOYED,
    wstETH_rETH_cbETH: NOT_DEPLOYED,
    wstETH_rETH_sfrxETH: NOT_DEPLOYED,
    rETH_WETH_BPT: NOT_DEPLOYED,
    ezETH_WETH_BPT: NOT_DEPLOYED,
    weETH_ezETH_rswETH: NOT_DEPLOYED,
    "33AURA_33ARB_33BAL": NOT_DEPLOYED,

    BPT_rETH_ETH: NOT_DEPLOYED,
    BPT_WSTETH_ETH: NOT_DEPLOYED,
    BPT_ROAD: NOT_DEPLOYED,
    ECLP_wstETH_WETH: NOT_DEPLOYED,

    // AURA
    auraB_rETH_STABLE: NOT_DEPLOYED,
    auraweETH_rETH: NOT_DEPLOYED,
    auraosETH_wETH_BPT: NOT_DEPLOYED,
    auraBPT_rETH_ETH: NOT_DEPLOYED,
    auraBPT_WSTETH_ETH: NOT_DEPLOYED,
    aurarETH_WETH_BPT: NOT_DEPLOYED,
    aurawstETH_rETH_cbETH: NOT_DEPLOYED,
    aurawstETH_rETH_sfrxETH: NOT_DEPLOYED,
    aurawstETH_WETH_BPT: NOT_DEPLOYED,

    auraB_rETH_STABLE_vault: NOT_DEPLOYED,
    auraweETH_rETH_vault: NOT_DEPLOYED,
    auraosETH_wETH_BPT_vault: NOT_DEPLOYED,
    auraBPT_rETH_ETH_vault: NOT_DEPLOYED,
    auraBPT_WSTETH_ETH_vault: NOT_DEPLOYED,
    aurarETH_WETH_BPT_vault: NOT_DEPLOYED,
    aurawstETH_rETH_cbETH_vault: NOT_DEPLOYED,
    aurawstETH_rETH_sfrxETH_vault: NOT_DEPLOYED,
    aurawstETH_WETH_BPT_vault: NOT_DEPLOYED,

    // GEARBOX
    dDAI: NOT_DEPLOYED,
    dUSDC: NOT_DEPLOYED,
    dWBTC: NOT_DEPLOYED,
    dWETH: NOT_DEPLOYED,
    dwstETH: NOT_DEPLOYED,
    dFRAX: NOT_DEPLOYED,

    dUSDCV3: NOT_DEPLOYED,
    dWBTCV3: NOT_DEPLOYED,
    dWETHV3: NOT_DEPLOYED,
    sdUSDCV3: NOT_DEPLOYED,
    sdWBTCV3: NOT_DEPLOYED,
    sdWETHV3: NOT_DEPLOYED,

    dUSDTV3: NOT_DEPLOYED,
    dGHOV3: NOT_DEPLOYED,
    dDAIV3: NOT_DEPLOYED,
    sdUSDTV3: NOT_DEPLOYED,
    sdGHOV3: NOT_DEPLOYED,
    sdDAIV3: NOT_DEPLOYED,

    GEAR: NOT_DEPLOYED,

    // AAVE
    aUSDC: NOT_DEPLOYED,
    aDAI: NOT_DEPLOYED,
    aUSDT: NOT_DEPLOYED,
    aWETH: NOT_DEPLOYED,

    waDAI: NOT_DEPLOYED,
    waUSDC: NOT_DEPLOYED,
    waUSDT: NOT_DEPLOYED,
    waWETH: NOT_DEPLOYED,

    cDAI: NOT_DEPLOYED,
    cUSDC: NOT_DEPLOYED,
    cUSDT: NOT_DEPLOYED,
    cETH: NOT_DEPLOYED,
    cLINK: NOT_DEPLOYED,

    fUSDC: NOT_DEPLOYED,
    sDAI: NOT_DEPLOYED,
    YieldETH: NOT_DEPLOYED,
    sUSDe: NOT_DEPLOYED,
    GHO: NOT_DEPLOYED,
    GHOUSDe: NOT_DEPLOYED,
    GHO_USDT_USDC: NOT_DEPLOYED,
  },
};

export const tokenSymbolByAddress = TypedObjectUtils.entries(
  tokenDataByNetwork,
).reduce<Record<string, SupportedToken>>(
  (acc, [, tokens]) => ({
    ...acc,
    ...TypedObjectUtils.fromEntries(
      TypedObjectUtils.entries(tokens)
        .map(([k, v]) => [v.toLowerCase(), k])
        .filter(k => !!k) as Array<[string, SupportedToken]>,
    ),
  }),
  {},
);

export const isSupportedToken = (t: unknown): t is SupportedToken =>
  typeof t === "string" && !!supportedTokens[t as SupportedToken];

export const isLPToken = (t: unknown): t is LPTokens =>
  typeof t === "string" && !!lpTokens[t as LPTokens];

export function getDecimals(token: SupportedToken | string): number {
  let dec = decimals[token as SupportedToken];
  if (dec) return dec;

  dec = decimals[tokenSymbolByAddress[token.toLowerCase()]];
  if (!dec) {
    throw new Error(`Decimals for ${token} not found`);
  }
  return dec;
}

export function extractTokenData(
  tokenAddress: string,
): [SupportedToken | undefined, number | undefined] {
  const underlyingSymbol = tokenSymbolByAddress[tokenAddress.toLowerCase()];
  const underlyingDecimals = decimals[underlyingSymbol || ""];

  return [underlyingSymbol, underlyingDecimals];
}
