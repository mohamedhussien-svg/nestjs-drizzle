import {integer, pgSchema, pgTable, serial, text} from "drizzle-orm/pg-core";
import {baseEntity} from "../base";
import {relations} from "drizzle-orm";
import {postsTable} from "./post.schema";
import {getPgSchema} from "../pgschema";

export const usersTable = getPgSchema().table("users", {
    ...baseEntity,
    email: text("email").unique(),
    password: text("password")
})

export const usersRelations = relations(usersTable, ({many}) => ({
    posts: many(postsTable)
}))
