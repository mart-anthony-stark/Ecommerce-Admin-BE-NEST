import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, SignupDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getAll(@Body() dto: SignupDto) {
    return this.authService.getAll();
  }

  @Post()
  login(@Body() dto: AuthDto) {
    return this.authService.login();
  }

  @Post()
  signup(@Body() dto: SignupDto) {
    return this.authService.signup();
  }
}
