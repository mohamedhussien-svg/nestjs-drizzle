import {integer, pgSchema, pgTable, serial, text} from "drizzle-orm/pg-core";
import {baseEntity} from "../database/base";
import {relations} from "drizzle-orm";
import {postsTable} from "../posts/schema";

export const usersTable = pgSchema("cm").table("users", {
    ...baseEntity,
    email: text("email").unique(),
    password: text("password")
})

export const usersRelations = relations(usersTable, ({many}) => ({
    posts: many(postsTable)
}))
