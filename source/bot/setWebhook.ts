import { config } from "$share";

fetch(
  `https://api.telegram.org/bot${config.env.TG_BOT_TOKEN}/setWebhook?url=${config.env.WEBHOOK_URL}`,
).then((res) => console.log(JSON.stringify(res.statusText)));
