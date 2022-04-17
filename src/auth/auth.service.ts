import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  getAll() {
    return { All: [] };
  }
  login() {
    return 'login';
  }
  signup() {
    return 'signup';
  }
}
