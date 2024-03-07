import { IsNumber, IsString } from 'class-validator';

export class CreateProcessStageTemplateDTO {
  @IsNumber()
  templateId: number;

  @IsString()
  name: string;
}
