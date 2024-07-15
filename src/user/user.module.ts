import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UserController } from './user.controller';
import { UserService } from './users/users.service';
import { MessageBrokerModule } from '../shared/message-broker/message-broker.module';
import { RabbitMQService } from '../shared/message-broker/rabbitmq.service';

@Module({
  imports: [
    MessageBrokerModule,
    ClientsModule.registerAsync([
      {
        name: 'RABBITMQ_SERVICE', // Use the same name as in the Inject decorator
        imports: [MessageBrokerModule],
        useFactory: async (rabbitMQService: RabbitMQService) => ({
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'microservices_queue',
          },
        }),
        inject: [RabbitMQService],
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
