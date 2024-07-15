
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import { AuthService } from './auth.service';

@Injectable()
export class OAuthStrategy extends PassportStrategy(Strategy, 'oauth2') {
  constructor(private readonly authService: AuthService) {
    super({
      authorizationURL: 'YOUR_AUTH0_AUTHORIZATION_URL',
      tokenURL: 'YOUR_AUTH0_TOKEN_URL',
      clientID: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
      callbackURL: 'YOUR_CALLBACK_URL',
    });
  }

  async validate(token: string, tokenSecret: string, profile: any): Promise<any> {
    // Validate user based on token and retrieve user details
    const user = await this.authService.validateOAuthUser(token);
    return user;
  }
}
