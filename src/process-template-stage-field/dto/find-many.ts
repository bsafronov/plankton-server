import { IsInt, IsNumber, IsOptional } from 'class-validator';

export class ProcessTemplateStageFieldFindManyDTO {
  @IsOptional()
  @IsNumber()
  take?: number;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsInt()
  stageId?: number;

  @IsOptional()
  @IsInt()
  templateId?: number;
}
