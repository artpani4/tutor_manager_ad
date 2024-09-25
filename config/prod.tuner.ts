import Tuner from "jsr:@artpani/tuner";
import { BaseCfgType } from "./base.tuner.ts";

const prodCfg = Tuner.tune({
  parent: Tuner.Load.local.configDir<BaseCfgType>("base.tuner.ts"),
  data: {},
});

export default prodCfg;
export type prodCfgType = typeof prodCfg;
