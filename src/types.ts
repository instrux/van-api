import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthBody {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
