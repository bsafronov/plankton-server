import { Controller, Get } from '@nestjs/common';
import { DepartmentService } from './department.service';

@Controller('departments')
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}
  @Get()
  findMany() {
    return this.departmentService.findMany();
  }
}
