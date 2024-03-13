import { IsInt, IsOptional } from 'class-validator';

export class ProcessTemplateFieldFindManyDTO {
  @IsOptional()
  @IsInt()
  take?: number;

  @IsOptional()
  @IsInt()
  page?: number;

  @IsOptional()
  @IsInt()
  templateId?: number;
}
