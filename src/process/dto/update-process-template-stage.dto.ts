import { IsInt, IsString } from 'class-validator';

export class UpdateProcessTemplateStageDTO {
  @IsInt()
  id: number;

  @IsString()
  name: string;
}
