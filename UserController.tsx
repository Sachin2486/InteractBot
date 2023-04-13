import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Post()
    create(@Body() data: { chatId: number }) {
        return this.userService.create(data.chatId);
    }

    @Post('/subscribe')
    subscribe(@Body() data: { chatId: number }) {
        return this.userService.subscribe(data.chatId);
    }

    @Post('/unsubscribe')
    unsubscribe(@Body() data: { chatId: number }) {
        return this.userService.unsubscribe(data.chatId);
    }
}
