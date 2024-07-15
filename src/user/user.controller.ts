import { Controller, Get, Post,  UseGuards, Request, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './users/users.service';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @UseGuards(AuthGuard('oauth2'))
  getProfile(@Request() req) {
    //This endpoint will only be accessible to authenticated users via OAuth 2.0
  return req.user;
  }

  @Post('register')
  async registerUser() {
    await this.userService.notifyHotelService();
    return { message: 'User registered and hotel service notified' };
  }
}
