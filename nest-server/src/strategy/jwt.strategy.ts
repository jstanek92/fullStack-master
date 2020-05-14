// Vendors
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
// Services
import { AuthService } from 'services';
// Models
import { JwtPayload } from 'models';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: 'secretKey',
        });
    }

    async validate(payload: JwtPayload) {
        const user = await this.authService.validateUser(payload);
        console.log(user);

        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}
