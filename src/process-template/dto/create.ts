import { IsString } from 'class-validator';

export class ProcessTemplateCreateDTO {
  @IsString()
  name: string;
}
