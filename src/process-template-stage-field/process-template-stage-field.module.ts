import { Module } from '@nestjs/common';
import { ProcessTemplateStageFieldService } from './process-template-stage-field.service';
import { ProcessTemplateStageFieldController } from './process-template-stage-field.controller';

@Module({
  providers: [ProcessTemplateStageFieldService],
  controllers: [ProcessTemplateStageFieldController]
})
export class ProcessTemplateStageFieldModule {}
