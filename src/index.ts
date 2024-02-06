import { Client, GatewayIntentBits, Partials, Events } from "discord.js";
import { drizzle } from "drizzle-orm/bun-sqlite";
import { Database } from "bun:sqlite";
import {user } from "@drizzle/schema";

const databaseTables = [`user (id INTEGER PRIMARY KEY, name TEXT)`];

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.GuildMember],
});

const sqlite = new Database("drizzle/db.sqlite");
for (const tableCreationStatement of databaseTables) {
  await sqlite.exec(`CREATE TABLE IF NOT EXISTS ${tableCreationStatement}`);
}
const db = drizzle(sqlite);

// db.select().from(user).prepare();


client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(process.env.Token).catch((err) => {
  console.log("[LOGIN Error]:", err);
});

export { db, sqlite };
