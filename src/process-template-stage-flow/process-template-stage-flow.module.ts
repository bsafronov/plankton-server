import { Module } from '@nestjs/common';
import { ProcessTemplateStageFlowService } from './process-template-stage-flow.service';
import { ProcessTemplateStageFlowController } from './process-template-stage-flow.controller';

@Module({
  providers: [ProcessTemplateStageFlowService],
  controllers: [ProcessTemplateStageFlowController]
})
export class ProcessTemplateStageFlowModule {}
