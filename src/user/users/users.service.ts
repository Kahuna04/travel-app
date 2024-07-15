import { Injectable } from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
    constructor(@Inject('RABBITMQ_SERVICE') private readonly client: ClientProxy) {}

    async notifyHotelService() {
      const message = { userId: '123', action: 'USER_REGISTERED' };
      this.client.emit('user_registered', message); 
    }
}
