import {Body, Controller, Get, Post} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {CreatePostRequestDto} from "./create.post.request";

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {
    }

    @Get()
    async getPosts() {
        return this.postsService.getPosts();
    }

    @Post()
    async createPosts(@Body() body: CreatePostRequestDto) {
        return this.postsService.createPosts(body);
    }
}
