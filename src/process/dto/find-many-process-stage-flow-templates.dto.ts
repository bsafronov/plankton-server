import { IsInt, IsOptional } from 'class-validator';

export class FindManyProcessStageFlowTemplatesDTO {
  @IsOptional()
  @IsInt()
  templateId?: number;

  @IsOptional()
  @IsInt()
  stageId?: number;
}
