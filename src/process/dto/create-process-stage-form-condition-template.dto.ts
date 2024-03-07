import { IsNumber } from 'class-validator';

export class CreateProcessStageFormConditionTemplateDTO {
  @IsNumber()
  stageId: number;

  @IsNumber()
  fieldId: number;

  @IsNumber()
  formId: number;
}
