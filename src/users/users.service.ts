import {Inject, Injectable} from '@nestjs/common';
import {DATABASE_CONNECTION} from "../database/database.connection";
import * as schema from './schema'
import {NodePgDatabase, NodePgTransaction} from "drizzle-orm/node-postgres";

@Injectable()
export class UsersService {
    constructor(@Inject(DATABASE_CONNECTION) private readonly db: NodePgDatabase<typeof schema>) {
    }

    async getUsers() {

        return this.db.query.usersTable.findMany({
            with: {posts: true}
        })
    }

    async createUser(body: typeof schema.usersTable.$inferInsert, tx?: NodePgTransaction<any, any>) {
        return (tx || this.db).insert(schema.usersTable).values(body);
    }

    async insertInTwoTables() {
        return this.db.transaction(async (tx) => {
        })
    }
}
