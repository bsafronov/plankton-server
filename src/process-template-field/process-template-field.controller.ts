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
import { ProcessTemplateFieldService } from './process-template-field.service';
import { ProcessTemplateFieldCreateDTO } from './dto/create';
import { ProcessTemplateFieldUpdateDTO } from './dto/update';
import { ProcessTemplateFieldFindOneDTO } from './dto/find-one';
import { ProcessTemplateFieldFindManyDTO } from './dto/find-many';

@Controller('process-template-fields')
export class ProcessTemplateFieldController {
  constructor(private service: ProcessTemplateFieldService) {}
  @Get()
  findMany(@Query() dto: ProcessTemplateFieldFindManyDTO) {
    return this.service.findMany(dto);
  }

  @Post()
  create(@Body() dto: ProcessTemplateFieldCreateDTO) {
    return this.service.create(dto);
  }

  @Patch()
  update(@Body() dto: ProcessTemplateFieldUpdateDTO) {
    return this.service.update(dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() dto: ProcessTemplateFieldFindOneDTO,
  ) {
    return this.service.findOne(id, dto);
  }
}
