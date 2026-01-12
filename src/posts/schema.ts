import {boolean, integer, pgSchema, pgTable, text, timestamp} from "drizzle-orm/pg-core";
import {baseEntity} from "../database/base";
import {usersTable} from "../users/schema";
import {relations} from "drizzle-orm";

export const postsTable = pgSchema("cm").table("posts", {
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
