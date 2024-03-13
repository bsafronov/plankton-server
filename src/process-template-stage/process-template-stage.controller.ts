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
import { ProcessTemplateStageService } from './process-template-stage.service';
import { ProcessTemplateStageFindOneDTO } from './dto/find-one';
import { ProcessTemplateStageFindManyDTO } from './dto/find-many';
import { ProcessTemplateStageUpdateDTO } from './dto/update';
import { ProcessTemplateStageCreateDTO } from './dto/create';

@Controller('process-template-stages')
export class ProcessTemplateStageController {
  constructor(private service: ProcessTemplateStageService) {}
  @Post()
  create(@Body() dto: ProcessTemplateStageCreateDTO) {
    return this.service.create(dto);
  }

  @Patch()
  update(@Body() dto: ProcessTemplateStageUpdateDTO) {
    return this.service.update(dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() dto: ProcessTemplateStageFindOneDTO,
  ) {
    return this.service.findOne(id, dto);
  }

  @Get()
  findMany(@Query() dto: ProcessTemplateStageFindManyDTO) {
    return this.service.findMany(dto);
  }
}
