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
import { ProcessTemplateStageFieldService } from './process-template-stage-field.service';
import { ProcessTemplateStageFieldCreateDTO } from './dto/create';
import { ProcessTemplateStageFieldUpdateDTO } from './dto/update';
import { ProcessTemplateStageFieldFindOneDTO } from './dto/find-one';
import { ProcessTemplateStageFieldFindManyDTO } from './dto/find-many';

@Controller('process-template-stage-fields')
export class ProcessTemplateStageFieldController {
  constructor(private service: ProcessTemplateStageFieldService) {}
  @Post()
  create(@Body() dto: ProcessTemplateStageFieldCreateDTO) {
    return this.service.create(dto);
  }

  @Patch()
  update(@Body() dto: ProcessTemplateStageFieldUpdateDTO) {
    return this.service.update(dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() dto: ProcessTemplateStageFieldFindOneDTO,
  ) {
    return this.service.findOne(id, dto);
  }

  @Get()
  findMany(@Query() dto: ProcessTemplateStageFieldFindManyDTO) {
    return this.service.findMany(dto);
  }
}
