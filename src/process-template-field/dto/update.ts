import { IsInt, IsString } from 'class-validator';

export class ProcessTemplateFieldUpdateDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
