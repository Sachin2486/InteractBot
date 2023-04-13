import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';

@Module({
    controllers: [UserController, BotController],
    providers: [UserService, BotService],
})
export class BotModule { }
