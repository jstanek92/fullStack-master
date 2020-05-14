// Vendors
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
// Models
import { Author } from 'models';

@Injectable()
export class AuthorsService {
    constructor(
        @InjectModel('Authors') private readonly authorModel: Model<Author>
    ) {

    }

    public async create(author: Author): Promise<Author> {
        const createdAuthor = new this.authorModel(author);
        return await createdAuthor.save();
    }

    public async getAll(): Promise<Author[]> {
        return await this.authorModel.find().exec();
    }

    public async getById(id: string): Promise<Author> {
        const query = { _id: id };
        return await this.authorModel.find(query);
    }

    public async updateById(author: Author, id: string): Promise<Author> { // TODO
        const query = { _id: (id as any).id };
        return await this.authorModel.findOneAndUpdate(query, author);
    }

    public async deleteById(id: string): Promise<Author> {
        const query = { _id: id };
        return await this.authorModel.findByIdAndRemove(query);
    }
}
