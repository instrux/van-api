import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type UserDoc = User & Document;

@Schema({
  versionKey: false,
})
export class User {
  @Prop({
    required: true,
    unique: true,
  })
  email: string;

  @Prop({
    required: true,
  })
  password: string;

  @Prop()
  name?: string;

  @Prop({
    default: true,
  })
  status?: boolean;

  @Prop({
    type: Date,
    default: Date.now,
  })
  create_time?: number;

  @Prop({
    type: Date,
    default: Date.now,
  })
  update_time?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
