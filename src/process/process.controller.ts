import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreateProcessFieldTemplateDTO } from './dto/create-process-field-template.dto';
import { CreateProcessStageTemplateDTO } from './dto/create-process-stage-template.dto';
import { CreateProcessTemplateDTO } from './dto/create-process-template.dto';
import { ProcessService } from './process.service';
import { CreateProcessStageFieldTemplateDTO } from './dto/create-process-stage-field-template.dto';
import { CreateProcessStageFlowTemplateDTO } from './dto/create-process-stage-flow-template.dto';
import { FindManyProcessFieldTemplatesDTO } from './dto/find-many-process-field-templates.dto';
import { FindManyProcessStageTemplatesDTO } from './dto/find-many-process-stage-templates.dto';
import { FindManyProcessStageFlowTemplatesDTO } from './dto/find-many-process-stage-flow-templates.dto';

@Controller('processes')
export class ProcessController {
  constructor(private processService: ProcessService) {}

  // CREATE
  @Post('/templates')
  createTemplate(@Body() dto: CreateProcessTemplateDTO) {
    return this.processService.createTemplate(dto);
  }

  @Post('/templates/fields')
  createFieldTemplate(@Body() dto: CreateProcessFieldTemplateDTO) {
    return this.processService.createFieldTemplate(dto);
  }

  @Post('/templates/stages')
  createStageTemplate(@Body() dto: CreateProcessStageTemplateDTO) {
    return this.processService.createStageTemplate(dto);
  }

  @Post('/templates/stages/fields')
  createStageFieldTemplate(@Body() dto: CreateProcessStageFieldTemplateDTO) {
    return this.processService.createStageFieldTemplate(dto);
  }

  @Post('/templates/stages/flows')
  createStageFlowTemplate(@Body() dto: CreateProcessStageFlowTemplateDTO) {
    return this.processService.createStageFlowTemplate(dto);
  }

  // GET

  @Get('/templates/fields')
  findManyFieldTemplates(@Query() dto: FindManyProcessFieldTemplatesDTO) {
    return this.processService.findManyFieldTemplates(dto);
  }

  @Get('/templates/stages')
  findManyStageTemplates(@Query() dto: FindManyProcessStageTemplatesDTO) {
    return this.processService.findManyStageTemplates(dto);
  }

  @Get('/templates/stages/flows')
  findManyStageFlowTemplates(
    @Query() dto: FindManyProcessStageFlowTemplatesDTO,
  ) {
    return this.processService.findManyStageFlowTemplates(dto);
  }

  @Get('/templates/stages/fields')
  findManyStageFieldTemplates(
    @Query() dto: FindManyProcessStageFlowTemplatesDTO,
  ) {
    return this.processService.findManyStageFieldTemplates(dto);
  }

  @Get('/templates/stages/:id')
  findOneStageTemplate(@Param('id', ParseIntPipe) id: number) {
    return this.processService.findOneStageTemplate(id);
  }

  @Get('/templates/:id')
  findOneTemplate(@Param('id', ParseIntPipe) id: number) {
    return this.processService.findOneTemplate(id);
  }
}
