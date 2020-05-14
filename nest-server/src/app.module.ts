// Vendor
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
// Controllers
import { AppController } from 'app.controller';
import { BooksController } from 'controllers/books/books.controller';
import { AuthController } from 'controllers/auth/auth.controller';
import { UsersController } from 'controllers/users/users.controller';
import { AuthorsController } from 'controllers/authors/authors.controller';
// Services
import { AppService } from 'app.service';
import { BooksService, AuthService, AuthorsService, UsersService } from 'services';
// Schemas
import { BookSchema, UserSchema, AuthorSchema } from 'schemas';
// Strategies
import { JwtStrategy } from 'strategy/jwt.strategy';
// Logger
import { MyLogger } from 'logger';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ilibrary'),
    MongooseModule.forFeature([
      { name: 'Books', schema: BookSchema },
      { name: 'Users', schema: UserSchema },
      { name: 'Authors', schema: AuthorSchema }
    ]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600
      },
    }),
  ],
  controllers: [
    AppController,
    BooksController,
    AuthController,
    UsersController,
    AuthorsController
  ],
  providers: [
    AppService,
    BooksService,
    AuthService,
    AuthorsService,
    UsersService,
    JwtStrategy,
    MyLogger
  ],
  exports: [ ]
})
export class AppModule {}
