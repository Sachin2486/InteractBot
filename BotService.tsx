import { Injectable } from '@nestjs/common';

@Injectable()
export class BotService {
    private token: string = '';
    private price: number = 0;

    getSettings() {
        return { token: this.token, price: this.price };
    }

    setToken(token: string) {
        this.token = token;
    }

    setPrice(price: number) {
        this.price = price;
    }
}
