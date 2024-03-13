import { IsNumber, IsOptional } from 'class-validator';

export class ProcessTemplateFindManyDTO {
  @IsOptional()
  @IsNumber()
  take?: number;

  @IsOptional()
  @IsNumber()
  page?: number;
}
