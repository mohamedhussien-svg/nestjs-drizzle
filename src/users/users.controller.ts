import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserRequestDto} from "./create.user.request";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {
    }

    @Get()
    async getUsers() {
        return this.userService.getUsers();
    }

    @Post()
    async createUser(@Body() body: CreateUserRequestDto) {
        return this.userService.createUser(body);
    }
}
