import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';

export class ProcessTemplateStageFieldUpdateDTO {
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsString()
  placeholder?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(['TEXT', 'NUMBER'], {
    message: 'type must be either "TEXT" or "NUMBER"',
  })
  type?: 'TEXT' | 'NUMBER';
}
