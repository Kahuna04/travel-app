import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { OAuthStrategy } from './oauth.strategy';
import { AuthService } from './auth.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'oauth2' }),
  ],
  providers: [
    AuthService,
    OAuthStrategy,
  ],
  exports: [
    AuthService,
    PassportModule,
  ],
})
export class AuthModule {}