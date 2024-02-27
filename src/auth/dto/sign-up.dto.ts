import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class SignUpDTO {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  firstName: string;

  @IsOptional()
  lastName: string;

  @IsOptional()
  @IsNumber()
  departmentId: number;
}
