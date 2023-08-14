import { NOT_DEPLOYED } from "@gearbox-protocol/sdk";

import { IConfigurator, Message, ValidationResult } from "./iConfigurator";
import { PoolV3DeployConfig } from "./poolV3DeployConfig";

export interface LinearIRMParams {
  U1: number;
  U2: number;
  Rbase: number;
  Rslope1: number;
  Rslope2: number;
  Rslope3: number;
  isBorrowingMoreU2Forbidden: boolean;
}

export class LinearIRM implements IConfigurator {
  address: string;
  params: LinearIRMParams;

  static new(config: PoolV3DeployConfig): LinearIRM {
    return new LinearIRM(NOT_DEPLOYED, config.irm);
  }

  static async attach(address: string): Promise<LinearIRM> {
    return new LinearIRM(address, {
      U1: 0,
      U2: 0,
      Rbase: 0,
      Rslope1: 0,
      Rslope2: 0,
      Rslope3: 0,
      isBorrowingMoreU2Forbidden: false,
    });
  }

  private constructor(address: string, params: LinearIRMParams) {
    this.address = address;
    this.params = params;
  }

  toString(): string {
    return `{U_optimal: ${this.params.U1}, U_reserve: ${this.params.U2}, R_base: ${this.params.Rbase}, R_1: ${this.params.Rslope1}, R_2: ${this.params.Rslope2}, R_3: ${this.params.Rslope3}, isBorrmowinMoreU_reserveForbidden: ${this.params.isBorrowingMoreU2Forbidden}}`;
  }

  validate(): ValidationResult {
    const warnings: Array<Message> = [];
    const errors: Array<Message> = [];

    if (this.address === NOT_DEPLOYED) {
      if (this.params.U1 < 0) {
        errors.push({
          component: "Linear IRM",
          address: this.address,
          message: "U1 < 0",
        });
      }
    }

    return { warnings, errors };
  }

  deployConfig(): string {
    return `LinearIRMV3DeployParams _irm = LinearIRMV3DeployParams({
  U_1: ${this.params.U1},
  U_2: ${this.params.U2},
  R_base: ${this.params.Rbase},
  R_slope1: ${this.params.Rslope1},
  R_slope2: ${this.params.Rslope2},
  R_slope3: ${this.params.Rslope3},
  isBorrowingMoreU2Forbidden: ${this.params.isBorrowingMoreU2Forbidden},
  });
     
    `;
  }
}