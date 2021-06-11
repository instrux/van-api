import { BadRequestException, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserBody } from './types';
import { argon2id, hash } from 'argon2';

@Controller('users')
export class UsersController {
  constructor(
    private users: UsersService,
  ) {
  }

  @Get()
  lists(): any {
    return this.users.find({}, true);
  }

  @Get(':id')
  get(@Param('id') id: any): any {
    return this.users.findOne({
      _id: id,
    }, true);
  }

  @Get('pages/:page')
  pages(@Param('page') page: number): any {
    return {
      result: {
        page,
      },
    };
  }

  @Post()
  async create(@Body() body: CreateUserBody) {
    const exists = await this.users.findOne({
      email: body.email,
    });
    if (exists) {
      throw new BadRequestException([
        `The email of [${body.email}] already exists`,
      ]);
    }
    const password = await hash(body.password, {
      type: argon2id,
    });
    await this.users.create({
      email: body.email,
      password,
      name: body?.name,
    });
    return {
      message: ['ok'],
    };
  }
}
