import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class UserFindManyDTO {
  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  take?: number;

  @IsOptional()
  @IsEnum(['USER', 'ADMIN'])
  role?: 'USER' | 'ADMIN';

  @IsOptional()
  @IsInt()
  departmentId?: number;

  @IsOptional()
  @IsString()
  email?: string;

  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  firstName?: string;

  @IsOptional()
  @IsString()
  lastName?: string;
}
