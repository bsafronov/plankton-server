import { IsNumber, IsString } from 'class-validator';

export class ProcessTemplateStageCreateDTO {
  @IsNumber()
  templateId: number;

  @IsString()
  name: string;
}
