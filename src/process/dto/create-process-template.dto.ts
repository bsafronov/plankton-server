import { IsString } from 'class-validator';

export class CreateProcessTemplateDTO {
  @IsString()
  name: string;
}
