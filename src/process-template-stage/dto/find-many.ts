import { IsNumber, IsOptional } from 'class-validator';

export class ProcessTemplateStageFindManyDTO {
  @IsOptional()
  @IsNumber()
  take?: number;

  @IsOptional()
  @IsNumber()
  page?: number;

  @IsOptional()
  @IsNumber()
  templateId?: number;
}
