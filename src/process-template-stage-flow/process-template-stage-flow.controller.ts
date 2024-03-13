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
import { ProcessTemplateStageFlowService } from './process-template-stage-flow.service';
import { ProcessTemplateStageFlowCreateDTO } from './dto/create';
import { ProcessTemplateStageFlowUpdateDTO } from './dto/update';
import { ProcessTemplateStageFlowFindOneDTO } from './dto/find-one';
import { ProcessTemplateStageFlowFindManyDTO } from './dto/find-many';

@Controller('process-template-stage-flows')
export class ProcessTemplateStageFlowController {
  constructor(private service: ProcessTemplateStageFlowService) {}
  @Post()
  create(@Body() dto: ProcessTemplateStageFlowCreateDTO) {
    return this.service.create(dto);
  }

  @Patch()
  update(@Body() dto: ProcessTemplateStageFlowUpdateDTO) {
    return this.service.update(dto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.service.delete(id);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @Query() dto: ProcessTemplateStageFlowFindOneDTO,
  ) {
    return this.service.findOne(id, dto);
  }

  @Get()
  findMany(@Query() dto: ProcessTemplateStageFlowFindManyDTO) {
    return this.service.findMany(dto);
  }
}
