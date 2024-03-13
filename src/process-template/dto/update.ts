import { IsInt, IsString } from 'class-validator';

export class ProcessTemplateUpdateDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
