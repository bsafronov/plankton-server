import { IsInt, IsOptional } from 'class-validator';

export class FindManyProcessFieldTemplatesDTO {
  @IsOptional()
  @IsInt()
  templateId?: number;
}
