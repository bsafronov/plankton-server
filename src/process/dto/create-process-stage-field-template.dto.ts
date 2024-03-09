import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProcessStageFieldTemplateDTO {
  @IsNumber()
  fieldId: number;

  @IsNumber()
  templateId: number;

  @IsNumber()
  stageId: number;

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
