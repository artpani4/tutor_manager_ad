import Tuner from "jsr:@artpani/tuner";

const baseCfg = Tuner.tune({
  env: {
    GUARDEN_TOKEN: Tuner.Env.getString.orNothing(),
    TG_BOT_TOKEN: Tuner.Env.getString.orThrow(
      new Error(
        `Missing TG_BOT_TOKEN! Envs: ${
          JSON.stringify(Deno.env.toObject(), null, 2)
        }`,
      ),
    ),
    SUPABASE_API_URL: Tuner.Env.getString.orThrow(
      new Error("Missing SUPABASE_API_URL!"),
    ),
    SUPABASE_API_TOKEN: Tuner.Env.getString.orThrow(
      new Error("Missing SUPABASE_API_TOKEN!"),
    ),
    SUPABASE_SCHEMA: Tuner.Env.getString.orThrow(
      new Error("Missing SUPABASE_SCHEMA!"),
    ),
    CURRENT_ENV: Tuner.Env.getString.orDefault("DEV"),
    WEBHOOK_URL: Tuner.Env.getString.orExit(),
  },

  data: {},
});

export default baseCfg;
export type BaseCfgType = typeof baseCfg;
