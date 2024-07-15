import { Injectable } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Injectable()
export class HotelReservationsService {
  @EventPattern('user_registered')
  async handleUserRegistered(data: Record<string, any>) {
    console.log('User Registered Event Received:', data);
  }
}