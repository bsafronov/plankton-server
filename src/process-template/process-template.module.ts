import { Module } from '@nestjs/common';
import { ProcessTemplateService } from './process-template.service';
import { ProcessTemplateController } from './process-template.controller';

@Module({
  providers: [ProcessTemplateService],
  controllers: [ProcessTemplateController],
})
export class ProcessTemplateModule {}
