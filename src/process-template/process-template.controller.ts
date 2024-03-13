import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProcessTemplateService } from './process-template.service';
import { ProcessTemplateCreateDTO } from './dto/create';
import { ProcessTemplateUpdateDTO } from './dto/update';
import { ProcessTemplateFindOneDTO } from './dto/find-one';
import { ProcessTemplateFindManyDTO } from './dto/find-many';

@Controller('process-templates')
export class ProcessTemplateController {
  constructor(private service: ProcessTemplateService) {}
  @Post()
  create(@Body() dto: ProcessTemplateCreateDTO) {
    return this.service.create(dto);
  }

  @Patch()
  update(@Body() dto: ProcessTemplateUpdateDTO) {
    return this.service.update(dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() dto: ProcessTemplateFindOneDTO,
  ) {
    return this.service.findOne(id, dto);
  }

  @Get()
  findMany(@Query() dto: ProcessTemplateFindManyDTO) {
    return this.service.findMany(dto);
  }
}
