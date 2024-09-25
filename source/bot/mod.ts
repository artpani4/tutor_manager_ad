import luminous from "$luminous";
import { updateTelegramUser } from "../db/queries.ts";
import { bot } from "../share.ts";
const loggerOptions = new luminous.OptionsBuilder().setName("bot")
  .build();
const log = new luminous.Logger(loggerOptions);
bot.command("start", async (ctx) => {
  // deno-lint-ignore ban-ts-comment
  //@ts-ignore
  log.dbg(ctx.from.id);
  try {
    const [_suc, err] = await updateTelegramUser(ctx.from?.id!, {
      first_name: ctx.from?.first_name,
      last_name: ctx.from?.last_name,
      username: ctx.from?.username,
      language_code: ctx.from?.language_code,
      is_premium: ctx.from?.is_premium || false,
    });

    if (err) throw err;

    await ctx.reply(
      "Я тебя запомнил",
    );
  } catch (e) {
  }
});
