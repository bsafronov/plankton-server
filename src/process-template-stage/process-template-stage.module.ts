import { Module } from '@nestjs/common';
import { ProcessTemplateStageService } from './process-template-stage.service';
import { ProcessTemplateStageController } from './process-template-stage.controller';

@Module({
  providers: [ProcessTemplateStageService],
  controllers: [ProcessTemplateStageController]
})
export class ProcessTemplateStageModule {}
