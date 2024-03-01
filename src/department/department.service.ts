import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DepartmentService {
  constructor(private db: PrismaService) {}
  async findMany() {
    return await this.db.department.findMany();
  }
}
