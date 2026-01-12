import {boolean, integer, pgSchema, pgTable, text, timestamp} from "drizzle-orm/pg-core";
import {baseEntity} from "../base";
import {usersTable} from "./user.schema";
import {relations} from "drizzle-orm";
import {getPgSchema} from "../pgschema";

export const postsTable = getPgSchema().table("posts", {
    ...baseEntity,
    content: text("content"),
    published: boolean("published").default(false),
    userId: integer("userId").references(() => usersTable.id)
})

export const postsRelations = relations(postsTable, ({one}) => ({
    user: one(
        usersTable, {
            fields: [postsTable.userId],
            references: [usersTable.id]
        }
    )
}));
