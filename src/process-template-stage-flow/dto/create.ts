import { Optional } from '@nestjs/common';
import { IsInt, IsString } from 'class-validator';

export class ProcessTemplateStageFlowCreateDTO {
  @IsInt()
  fieldId: number;

  @IsInt()
  nextFieldId: number;

  @IsInt()
  stageId: number;

  @IsInt()
  templateId: number;

  @Optional()
  @IsString()
  value: string;
}
