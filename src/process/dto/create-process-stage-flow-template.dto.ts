import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateProcessStageFlowTemplateDTO {
  @IsNumber()
  templateId: number;

  @IsNumber()
  stageId: number;

  @IsNumber()
  nextStageId: number;

  @IsOptional()
  @IsNumber()
  fieldId: number;

  @IsOptional()
  @IsString()
  value: string;
}
