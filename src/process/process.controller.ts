import { Controller } from '@nestjs/common';
import { ProcessService } from './process.service';

@Controller('processes')
export class ProcessController {
  constructor(private service: ProcessService) {}
}
