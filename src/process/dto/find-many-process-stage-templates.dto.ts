import { IsInt, IsOptional } from 'class-validator';

export class FindManyProcessStageTemplatesDTO {
  @IsOptional()
  @IsInt()
  templateId: number;
}
