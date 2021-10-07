import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { JwtAuthenticationGuard } from './auth/guards';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('protected')
  @UseGuards(JwtAuthenticationGuard)
  authProtected(@Req() request: Request) {
    return (request as any).user
  }
}
