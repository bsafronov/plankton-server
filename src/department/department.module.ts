import { Module } from '@nestjs/common';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';

@Module({
  providers: [DepartmentService],
  controllers: [DepartmentController],
})
export class DepartmentModule {}
