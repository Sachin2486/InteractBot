import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    private users: { chatId: number, subscribed: boolean }[] = [];

    findAll() {
        return this.users;
    }

    create(chatId: number) {
        if (this.users.findIndex(u => u.chatId === chatId) === -1) {
            this.users.push({ chatId, subscribed: false });
        }
    }

    subscribe(chatId: number) {
        const index = this.users.findIndex(u => u.chatId === chatId);
        if (index !== -1) {
            this.users[index].subscribed = true;
        }
    }

    unsubscribe(chatId: number) {
        const index = this.users.findIndex(u => u.chatId === chatId);
        if (index !== -1) {
            this.users[index].subscribed = false;
        }
    }
}
