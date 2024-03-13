import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProcessTemplateStageFlowCreateDTO } from './dto/create';
import { ProcessTemplateStageFlowUpdateDTO } from './dto/update';
import { ProcessTemplateStageFlowFindOneDTO } from './dto/find-one';
import { ProcessTemplateStageFlowFindManyDTO } from './dto/find-many';

@Injectable()
export class ProcessTemplateStageFlowService {
  constructor(private db: PrismaService) {}

  create({
    fieldId,
    nextFieldId,
    stageId,
    templateId,
    value,
  }: ProcessTemplateStageFlowCreateDTO) {
    return this.db.processTemplateStageFlow.create({
      data: {
        field: {
          connect: {
            id: fieldId,
          },
        },
        nextStage: {
          connect: {
            id: nextFieldId,
          },
        },
        stage: {
          connect: {
            id: stageId,
          },
        },
        template: {
          connect: {
            id: templateId,
          },
        },
        value,
      },
    });
  }
  update({ id, fieldId, nextStageId }: ProcessTemplateStageFlowUpdateDTO) {
    return this.db.processTemplateStageFlow.update({
      where: {
        id,
      },
      data: {
        field: {
          connect: {
            id: fieldId,
          },
        },
        nextStage: {
          connect: {
            id: nextStageId,
          },
        },
      },
    });
  }
  delete(id: number) {
    return this.db.processTemplateStageFlow.delete({
      where: {
        id,
      },
    });
  }
  findOne(id: number, dto?: ProcessTemplateStageFlowFindOneDTO) {
    return this.db.processTemplateStageFlow.findUnique({
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
  }: ProcessTemplateStageFlowFindManyDTO) {
    return this.db.processTemplateStageFlow.findMany({
      take,
      skip: page * take - take,
      where: {
        stageId,
        templateId,
      },
    });
  }
}
