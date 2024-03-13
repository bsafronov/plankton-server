import { Module } from '@nestjs/common';
import { ProcessTemplateFieldService } from './process-template-field.service';
import { ProcessTemplateFieldController } from './process-template-field.controller';

@Module({
  providers: [ProcessTemplateFieldService],
  controllers: [ProcessTemplateFieldController]
})
export class ProcessTemplateFieldModule {}
