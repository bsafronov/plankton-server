import { Body, Controller, Post } from '@nestjs/common';
import { ProcessService } from './process.service';
import { CreateProcessTemplateDTO } from './dto/create-process-template.dto';
import { CreateProcessFieldTemplateDTO } from './dto/create-process-field-template.dto';
import { CreateProcessStageTemplateDTO } from './dto/create-process-stage-template.dto';
import { CreateProcessStageFormTemplateDTO } from './dto/create-process-stage-form-template.dto';
import { CreateProcessStageFormFieldTemplateDTO } from './dto/create-process-stage-form-field-template.dto';
import { CreateProcessStageFormConditionTemplateDTO } from './dto/create-process-stage-form-condition-template.dto';

@Controller('processes')
export class ProcessController {
  constructor(private processService: ProcessService) {}

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

  @Post('/templates/stages/forms')
  createStageFormTemplate(@Body() dto: CreateProcessStageFormTemplateDTO) {
    return this.processService.createStageFormTemplate(dto);
  }

  @Post('/templates/stages/forms/fields')
  createStageFormFieldTemplate(
    @Body() dto: CreateProcessStageFormFieldTemplateDTO,
  ) {
    return this.processService.createStageFormFieldTemplate(dto);
  }

  @Post('/templates/stages/forms/conditions')
  createStageFormConditionTemplate(
    @Body() dto: CreateProcessStageFormConditionTemplateDTO,
  ) {
    return this.processService.createStageFormConditionTemplate(dto);
  }
}
