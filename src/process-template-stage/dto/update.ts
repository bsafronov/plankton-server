import { IsNumber, IsString } from 'class-validator';

export class ProcessTemplateStageUpdateDTO {
  @IsNumber()
  id: number;

  @IsString()
  name: string;
}
