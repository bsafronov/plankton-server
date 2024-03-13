import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessTemplateStageFieldCreateDTO } from './dto/create';
import { ProcessTemplateStageFieldUpdateDTO } from './dto/update';
import { ProcessTemplateStageFieldFindOneDTO } from './dto/find-one';
import { ProcessTemplateStageFieldFindManyDTO } from './dto/find-many';

@Injectable()
export class ProcessTemplateStageFieldService {
  constructor(private db: PrismaService) {}

  create({
    fieldId,
    templateId,
    stageId,
    ...dto
  }: ProcessTemplateStageFieldCreateDTO) {
    return this.db.processTemplateStageField.create({
      data: {
        field: {
          connect: {
            id: fieldId,
          },
        },
        template: {
          connect: {
            id: templateId,
          },
        },
        stage: {
          connect: {
            id: stageId,
          },
        },
        ...dto,
      },
    });
  }
  update({ id, ...dto }: ProcessTemplateStageFieldUpdateDTO) {
    return this.db.processTemplateStageField.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });
  }

  delete(id: number) {
    return this.db.processTemplateStageField.delete({
      where: {
        id,
      },
    });
  }

  findOne(id: number, dto?: ProcessTemplateStageFieldFindOneDTO) {
    return this.db.processTemplateStageField.findUnique({
      where: {
        id,
      },
    });
  }

  findMany({
    page = 1,
    take = 20,
    stageId,
    templateId,
  }: ProcessTemplateStageFieldFindManyDTO) {
    return this.db.processTemplateStageField.findMany({
      take,
      skip: page * take - take,
      where: {
        stageId,
        templateId,
      },
    });
  }
}
