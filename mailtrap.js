import { MailtrapClient } from "mailtrap"
import "dotenv/config"






export const client = new MailtrapClient({
  token: process.env.TOKEN,
});

export const sender = {
 email: "hello@demomailtrap.com",
 name: "Instagram",
};