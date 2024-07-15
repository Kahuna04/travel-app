import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HotelReservationsModule } from './hotel-reservations/hotel-reservations.module';
import { FlightBookingsModule } from './flight-bookings/flight-bookings.module';
import { AuthModule } from './shared/auth/auth.module';
import { MessageBrokerModule } from './shared/message-broker/message-broker.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, 
            HotelReservationsModule, 
            FlightBookingsModule,
            AuthModule,
            MessageBrokerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
