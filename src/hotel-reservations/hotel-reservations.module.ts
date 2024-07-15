import { Module } from '@nestjs/common';
import { HotelReservationsController } from './hotel-reservations.controller';
import { HotelReservationsService } from './hotel-reservations.service';

@Module({
  controllers: [HotelReservationsController],
  providers: [HotelReservationsService]
})
export class HotelReservationsModule {}
