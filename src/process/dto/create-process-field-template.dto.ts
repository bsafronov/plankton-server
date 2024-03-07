import { IsNumber, IsString } from 'class-validator';

export class CreateProcessFieldTemplateDTO {
  @IsNumber()
  templateId: number;

  @IsString()
  name: string;
}
