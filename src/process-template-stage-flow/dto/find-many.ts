import { IsNumber, IsOptional } from 'class-validator';

export class ProcessTemplateStageFlowFindManyDTO {
  @IsOptional()
  @IsNumber()
  take?: number;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  stageId?: number;

  @IsOptional()
  @IsNumber()
  templateId?: number;
}
