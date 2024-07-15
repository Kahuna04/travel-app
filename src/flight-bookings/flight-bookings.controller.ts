import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('flights')
export class FlightBookingsController {

  @Get()
  @UseGuards(AuthGuard('oauth2'))
  async getAllFlights() {
    // This endpoint will only be accessible to authenticated users via OAuth 2.0
    return { message: 'List of flights' };
  }
}