// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// import { Response } from 'express';
// Models
import { Book } from 'models/book.interface';

@Injectable()
export class BooksService {

    constructor(
        @InjectModel('Books') private readonly bookModel: Model<Book>
    ) {

    }

    public async create(book: Book): Promise<Book> {
        const createdBook = new this.bookModel(book);
        return await createdBook.save();
    }

    public async getAll(): Promise<Book[]> {
        return await this.bookModel.find().exec();
    }

    public async getById(id: string): Promise<Book> {
        const query = { _id: id };
        return await this.bookModel.find(query);
    }

    public async updateById(book: Book, id: string): Promise<Book> {
        const query = { _id: id };
        return await this.bookModel.findOneAndUpdate(query, book);
    }

    public async deleteById(id: string): Promise<any> {
        const query = { _id: id };
        return await this.bookModel.findByIdAndRemove(query);
    }
}
