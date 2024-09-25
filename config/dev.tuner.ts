import Tuner from "jsr:@artpani/tuner";
import { BaseCfgType } from "./base.tuner.ts";

const devCfg = Tuner.tune({
  parent: Tuner.Load.local.configDir<BaseCfgType>("base.tuner.ts"),
  data: {},
});

export default devCfg;
export type devCfgType = typeof devCfg;
