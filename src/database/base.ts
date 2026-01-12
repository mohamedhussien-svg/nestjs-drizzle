import {serial, text, timestamp} from "drizzle-orm/pg-core";

export const baseEntity = {

    id: serial("id").primaryKey(),
    createdAt: timestamp("createdAt").defaultNow(),
    lastChangeDate: timestamp("lastChangeDate"),
    deletedAt: timestamp("deletedAt"),
    comment: text("comment")


}
