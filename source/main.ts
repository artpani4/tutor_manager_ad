import { webhookCallback } from "$grammy";
import { app, bot } from "$share";
import { Context, Next } from "@hono";

export const botHandleUpdate = webhookCallback(bot, "hono");

app.post("/telegramGetUpdates", async (c: Context, next: Next) => {
  try {
    return await botHandleUpdate(c);
  } catch (e) {
    console.error(e);
  }

  await next();
});

Deno.serve(app.fetch);
