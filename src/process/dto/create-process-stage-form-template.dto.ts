import { IsNumber } from 'class-validator';

export class CreateProcessStageFormTemplateDTO {
  @IsNumber()
  stageId: number;
}
