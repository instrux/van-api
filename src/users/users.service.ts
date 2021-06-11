import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDoc } from './user.schema';

@Injectable()
export class UsersService {
  private projection: any = {
    password: false,
  };

  constructor(
    @InjectModel(User.name) private model: Model<UserDoc>,
  ) {
  }

  async find(filter: any = {}, projection?: boolean) {
    return this.model.find(filter, !projection ? null : this.projection);
  }

  async findOne(filter: any = {}, projection?: boolean) {
    return this.model.findOne(filter, !projection ? null : this.projection);
  }

  async create(data: User) {
    return this.model.create(data);
  }
}
