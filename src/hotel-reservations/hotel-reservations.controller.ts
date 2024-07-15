import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('hotels')
export class HotelReservationsController {

  @Get()
  @UseGuards(AuthGuard('oauth2'))
  async getAllHotels() {
    // This endpoint will only be accessible to authenticated users via OAuth 2.0
    return { message: 'List of hotels' };
  }
}