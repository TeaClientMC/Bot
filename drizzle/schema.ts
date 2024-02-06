import { text, integer } from "drizzle-orm/sqlite-core";
import { sqliteTable } from "drizzle-orm/sqlite-core";



export const user = sqliteTable('user', {
    id: integer('userId').primaryKey(),
    username: text('username').notNull(),
})