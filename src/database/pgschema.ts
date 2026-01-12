import {pgSchema} from "drizzle-orm/pg-core";

const schema: ReturnType<typeof pgSchema> | undefined = undefined;

export function getPgSchema() {
    return schema || pgSchema(process.env.DATABASE_SCHEMA!)

}
