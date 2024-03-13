import { IsInt, IsString } from 'class-validator';

export class ProcessTemplateFieldCreateDTO {
  @IsInt()
  templateId: number;

  @IsString()
  name: string;
}
