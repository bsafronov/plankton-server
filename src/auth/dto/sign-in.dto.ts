import { IsNotEmpty, IsOptional } from 'class-validator';

export class SignInDTO {
  @IsOptional()
  email?: string;

  @IsOptional()
  username?: string;

  @IsNotEmpty()
  password: string;
}
