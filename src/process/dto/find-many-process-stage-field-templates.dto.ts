import { IsInt, IsOptional } from 'class-validator';

export class FindManyProcessStageFieldTemplatesDTO {
  @IsOptional()
  @IsInt()
  templateId?: number;

  @IsOptional()
  @IsInt()
  stageId?: number;
}
