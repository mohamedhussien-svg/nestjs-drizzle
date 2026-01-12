import {Inject, Injectable} from '@nestjs/common';
import {DATABASE_CONNECTION} from "../database/database.connection";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../database/schemas/post.schema";
import * as postsSchema from "../database/schemas/post.schema";

@Injectable()
export class PostsService {
    constructor(@Inject(DATABASE_CONNECTION) private readonly database: NodePgDatabase<typeof schema>) {
    }

    async getPosts() {
        return this.database.query.postsTable.findMany({
            with: {
                user: true
            }
        });
    }

    async createPosts(body: typeof schema.postsTable.$inferInsert) {
        return this.database.insert(postsSchema.postsTable).values(body);
    }
}
