import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessTemplateCreateDTO } from './dto/create';
import { ProcessTemplateUpdateDTO } from './dto/update';
import { ProcessTemplateFindOneDTO } from './dto/find-one';
import { ProcessTemplateFindManyDTO } from './dto/find-many';

@Injectable()
export class ProcessTemplateService {
  constructor(private db: PrismaService) {}

  create(dto: ProcessTemplateCreateDTO) {
    return this.db.processTemplate.create({
      data: {
        ...dto,
      },
    });
  }
  update(dto: ProcessTemplateUpdateDTO) {
    return this.db.processTemplate.update({
      where: {
        id: dto.id,
      },
      data: {
        name: dto.name,
      },
    });
  }
  delete(id: number) {
    return this.db.processTemplate.delete({
      where: {
        id,
      },
    });
  }
  findOne(id: number, dto?: ProcessTemplateFindOneDTO) {
    return this.db.processTemplate.findUnique({
      where: {
        id,
      },
      include: {
        _count: true,
      },
    });
  }
  findMany({ page = 1, take = 50 }: ProcessTemplateFindManyDTO) {
    return this.db.processTemplate.findMany({
      take,
      skip: take * page - take,
    });
  }
}
