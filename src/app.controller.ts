import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private auth: AuthService,
  ) {
  }

  @Get()
  index() {
    return {
      msg: 'hi',
    };
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  login(@Request() req) {
    return this.auth.login(req.email);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return {
      status: 'ok',
    };
  }
}
