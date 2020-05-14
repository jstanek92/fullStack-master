// Vendors
import { Controller, Post, Get, Put, Delete, Param, Body, HttpException, HttpStatus, UseInterceptors } from '@nestjs/common';
// Models
import { User } from 'models';
// Services
import { UsersService } from 'services/users.service';
// Interceptors
import { TransformInterceptor } from 'common/interceptors/transform.interceptor';

// @UseInterceptors(new TransformInterceptor())
@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {

    }

    @Post('create')
    public async create(@Body() user: User): Promise<User> {
        console.log('POST create');
        // this.usersService.findOneByName(user.username);
        const existingUserName = await this.usersService.findOneByName(user.username);
        if (existingUserName) {
            throw new HttpException('This username is in use', HttpStatus.METHOD_NOT_ALLOWED);
        }

        return this.usersService.create(user);
    }

    @Get('getAll')
    public getAll(): Promise<User[]> {
        return this.usersService.getAll();
    }

    @Get('getById/:id')
    public getById(@Param('id') id: string): Promise<User> {
        console.log('GET: ' + id);
        return this.usersService.getById(id);
    }

    @Put('updateById/:id')
    public async updateById(@Param() id: string, @Body() user: User): Promise<User> {
        console.log('PUT: ' + id);
        return this.usersService.updateById( user, id);
    }

    @Delete('deleteById/:id')
    public async deleteById(@Param('id') id: string): Promise<User> {
        console.log('DELETE: ' + id);
        return this.usersService.deleteById(id);
    }
}
