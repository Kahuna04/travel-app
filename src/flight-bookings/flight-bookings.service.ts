import { Injectable } from '@nestjs/common';

@Injectable()
export class FlightBookingsService {

  async getFlight(flightId: string) {
   
    return { id: flightId, airline: 'Dana', destination: 'Lagos' };
  }
}