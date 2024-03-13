import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessTemplateStageCreateDTO } from './dto/create';
import { ProcessTemplateStageUpdateDTO } from './dto/update';
import { ProcessTemplateStageFindOneDTO } from './dto/find-one';
import { ProcessTemplateStageFindManyDTO } from './dto/find-many';

@Injectable()
export class ProcessTemplateStageService {
  constructor(private db: PrismaService) {}

  create({ name, templateId }: ProcessTemplateStageCreateDTO) {
    return this.db.processTemplateStage.create({
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
  update({ id, name }: ProcessTemplateStageUpdateDTO) {
    return this.db.processTemplateStage.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });
  }
  delete(id: number) {
    return this.db.processTemplateStage.delete({
      where: {
        id,
      },
    });
  }

  findOne(id: number, dto?: ProcessTemplateStageFindOneDTO) {
    return this.db.processTemplateStage.findUnique({
      where: {
        id,
      },
    });
  }

  findMany({
    page = 1,
    take = 20,
    templateId,
  }: ProcessTemplateStageFindManyDTO) {
    return this.db.processTemplateStage.findMany({
      take,
      skip: page * take - take,
      where: {
        templateId,
      },
    });
  }
}
