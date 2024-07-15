
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

  async validateOAuthUser(token: string): Promise<any> {

    const user = {
      id: '12345',
      username: 'kahuna',
      email: 'ogundele.damilare4@gmail.com',
      roles: ['user'],
    };
    return user;
  }
}
