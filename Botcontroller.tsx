import { Controller, Get, Post, Body } from '@nestjs/common';
import { BotService } from './bot.service';

@Controller('bot')
export class BotController {
    constructor(private readonly botService: BotService) { }

    @Get()
    getSettings() {
        return this.botService.getSettings();
    }

    @Post('/token')
    setToken(@Body() data: { token: string }) {
        return this.botService.setToken(data.token);
    }

    @Post('/price')
    setPrice(@Body() data: { price: number }) {
        return this.botService.setPrice(data.price);
    }
}
