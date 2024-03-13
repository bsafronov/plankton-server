import { IsInt } from 'class-validator';

export class ProcessTemplateStageFlowUpdateDTO {
  @IsInt()
  id: number;

  @IsInt()
  fieldId?: number;

  @IsInt()
  nextStageId?: number;
}
