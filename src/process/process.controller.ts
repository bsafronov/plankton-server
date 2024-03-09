import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateProcessFieldTemplateDTO } from './dto/create-process-field-template.dto';
import { CreateProcessStageTemplateDTO } from './dto/create-process-stage-template.dto';
import { CreateProcessTemplateDTO } from './dto/create-process-template.dto';
import { ProcessService } from './process.service';
import { CreateProcessStageFieldTemplateDTO } from './dto/create-process-stage-field-template.dto';
import { CreateProcessStageFlowTemplateDTO } from './dto/create-process-stage-flow-template.dto';

@Controller('processes')
export class ProcessController {
  constructor(private processService: ProcessService) {}

  @Post('/templates')
  createTemplate(@Body() dto: CreateProcessTemplateDTO) {
    return this.processService.createTemplate(dto);
  }

  @Get('/templates/:id')
  findOneTemplate(@Param('id', ParseIntPipe) id: number) {
    return this.processService.findOneTemplate(id);
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
}
