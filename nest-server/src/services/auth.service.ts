// Vendors
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// Models
// import { User } from 'models/user.interface';
// Service
import { UsersService } from 'services/users.service';
import { JwtPayload } from 'models';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {

  }

  // async createToken() {
  //     const user: JwtPayload = { username: 'test@email.com' };
  //     const accessToken = this.jwtService.sign(user);
  //     return {
  //         expiresIn: 3600,
  //         accessToken,
  //     };
  // }

  public async signIn(username: string): Promise<string> {
    const neededUser = await this.usersService.findOneByName(username);
    console.log(neededUser);
    const user: JwtPayload = {
        username: neededUser.username,
        firstName: neededUser.firstName,
        lastName: neededUser.lastName,
        userRole: neededUser.userRole
    };
    return this.jwtService.sign(user);
  }

  // TODO
  async validateUser(payload: any): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    // return await this.usersService.findOneByToken(token);
    return await this.usersService.findOneByName(payload.username);
  }
}
