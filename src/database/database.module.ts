import {Module} from '@nestjs/common';
import {DATABASE_CONNECTION} from "./database.connection";
import {ConfigService} from "@nestjs/config";
import {Pool} from "pg";
import {drizzle} from "drizzle-orm/node-postgres";
import * as userSchema from "./schemas/user.schema"
import * as postsSchema from "./schemas/post.schema"

@Module({
    imports: [],
    providers: [{
        provide: DATABASE_CONNECTION,
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
            const pool: Pool = new Pool({
                connectionString: configService.getOrThrow("DATABASE_URL")
            });

            return drizzle(pool, {
                schema: {...userSchema, ...postsSchema},
                logger: true
            });
        }
    }],
    exports: [DATABASE_CONNECTION],
    controllers: []
})
export class DatabaseModule {
}
