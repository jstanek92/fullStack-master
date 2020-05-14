// Vendors
import { Controller, Post, Get, Param, Body, Put, Res, HttpStatus, Delete, UseInterceptors } from '@nestjs/common';
import { Response } from 'express';
// Models
import { Book } from 'models';
// Services
import { BooksService } from 'services';
// Interceptors
import { TransformInterceptor } from 'common/interceptors/transform.interceptor';

// @UseInterceptors(new TransformInterceptor())
@Controller('books')
export class BooksController {
    constructor(
        private readonly booksService: BooksService
    ) {

    }

    @Post('create')
    public async create(@Body() book: Book): Promise<Book> { // TODO
        // res.json({status: HttpStatus });
        console.log('POST create');
        return this.booksService.create(book);
        // res.status(HttpStatus.CREATED).send();
        // return `Create new book`;
    }

    @Get('getAll')
    public getAll(): Promise<Book[]> {
        console.log('GET: All');
        return this.booksService.getAll();
    }

    @Get('getById/:id')
    public getById(@Param('id') id: string): Promise<Book> {
        console.log('GET: ' + id);
        return this.booksService.getById(id);
    }

    @Put('updateById/:id')
    public async updateById(@Param('id') id: string, @Body() book: Book): Promise<Book> {
        book.id = String(id);
        console.log('PUT: ' + id);
        return this.booksService.updateById(book, id);
    }

    @Delete('deleteById/:id')
    public async deleteById(@Param('id') id: string): Promise<any> {
        console.log('DELETE: ' + id);
        return this.booksService.deleteById(id);
    }

}
