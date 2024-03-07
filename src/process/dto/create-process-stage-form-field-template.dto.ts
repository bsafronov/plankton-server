import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProcessStageFormFieldTemplateDTO {
  @IsNumber()
  fieldId: number;

  @IsNumber()
  formId: number;

  @IsOptional()
  @IsString()
  label?: string;

  @IsOptional()
  @IsString()
  placeholder?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(['TEXT', 'NUMBER'])
  type?: 'TEXT' | 'NUMBER';
}
