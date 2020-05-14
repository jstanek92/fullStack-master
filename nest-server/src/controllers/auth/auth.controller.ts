// Vendors
import { Controller, Post, Req, Get, UseGuards, Body, HttpException, HttpStatus, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
// Service
import { AuthService, UsersService } from 'services';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService
  ) {

  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }): Promise<{ token: string }> {
    const neededUser =  await this.usersService.findOneByName(body.username);
    if (!neededUser) {
      throw new HttpException( 'Wrong username', HttpStatus.FORBIDDEN);
    }
    if (neededUser && neededUser.password === body.password) {
      const token = await this.authService.signIn(body.username);
      return {
        token
      };
    } else {
      throw new HttpException( 'Wrong password', HttpStatus.FORBIDDEN);
    }
  }

  @Get('data')
  @UseGuards(AuthGuard())
  findAll(): void {
    return null;
  }

  // @Get('token')
  // async createToken(): Promise<any> {
  //     return await this.authService.createToken();
  // }
}
