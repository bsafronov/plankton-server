import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessTemplateFieldCreateDTO } from './dto/create';
import { ProcessTemplateFieldUpdateDTO } from './dto/update';
import { ProcessTemplateFieldFindOneDTO } from './dto/find-one';
import { ProcessTemplateFieldFindManyDTO } from './dto/find-many';

@Injectable()
export class ProcessTemplateFieldService {
  constructor(private db: PrismaService) {}

  create({ name, templateId }: ProcessTemplateFieldCreateDTO) {
    return this.db.processTemplateField.create({
      data: {
        name,
        template: {
          connect: {
            id: templateId,
          },
        },
      },
    });
  }
  update({ id, name }: ProcessTemplateFieldUpdateDTO) {
    return this.db.processTemplateField.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }
  delete(id: number) {
    return this.db.processTemplateField.delete({
      where: {
        id,
      },
    });
  }
  findOne(id: number, dto?: ProcessTemplateFieldFindOneDTO) {
    return this.db.processTemplateField.findUnique({
      where: {
        id,
      },
    });
  }
  findMany({
    page = 1,
    take = 50,
    templateId,
  }: ProcessTemplateFieldFindManyDTO) {
    return this.db.processTemplateField.findMany({
      take,
      skip: page * take - take,
      where: {
        templateId,
      },
    });
  }
}
