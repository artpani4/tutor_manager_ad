import { devCfgType } from "../config/dev.tuner.ts";
import Tuner from "jsr:@artpani/tuner";
import * as supabaseAPI from "$supabase";
import { Bot, webhookCallback } from "$grammy";
import { Context, Hono, Next } from "@hono";
export const config = await Tuner.use.loadConfig<devCfgType>({
  configDirPath: "./config",
});

export const supabase = supabaseAPI.createClient(
  config.env.SUPABASE_API_URL,
  config.env.SUPABASE_API_TOKEN,
  {
    db: {
      schema: config.env.SUPABASE_SCHEMA,
    },
  },
);

export const bot = new Bot(config.env.TG_BOT_TOKEN, {
  client: {
    canUseWebhookReply: (method) => method === "sendChatAction",
  },
});

export const app = new Hono();
