import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProcessTemplateDTO } from './dto/create-process-template.dto';

import { CreateProcessFieldTemplateDTO } from './dto/create-process-field-template.dto';
import { CreateProcessStageFlowTemplateDTO } from './dto/create-process-stage-flow-template.dto';
import { CreateProcessStageFieldTemplateDTO } from './dto/create-process-stage-field-template.dto';
import { CreateProcessStageTemplateDTO } from './dto/create-process-stage-template.dto';
import { FindManyProcessFieldTemplatesDTO } from './dto/find-many-process-field-templates.dto';
import { FindManyProcessStageTemplatesDTO } from './dto/find-many-process-stage-templates.dto';
import { FindManyProcessStageFlowTemplatesDTO } from './dto/find-many-process-stage-flow-templates.dto';
import { FindManyProcessStageFieldTemplatesDTO } from './dto/find-many-process-stage-field-templates.dto';

@Injectable()
export class ProcessService {
  constructor(private db: PrismaService) {}

  // CREATE

  async createTemplate(dto: CreateProcessTemplateDTO) {
    return this.db.processTemplate.create({
      data: dto,
    });
  }

  async createFieldTemplate(dto: CreateProcessFieldTemplateDTO) {
    return this.db.processFieldTemplate.create({
      data: {
        name: dto.name,
        template: {
          connect: {
            id: dto.templateId,
          },
        },
      },
    });
  }

  async createStageTemplate(dto: CreateProcessStageTemplateDTO) {
    return this.db.processStageTemplate.create({
      data: {
        name: dto.name,
        template: {
          connect: {
            id: dto.templateId,
          },
        },
      },
    });
  }

  async createStageFieldTemplate(dto: CreateProcessStageFieldTemplateDTO) {
    return this.db.processStageFieldTemplate.create({
      data: {
        description: dto.description,
        placeholder: dto.placeholder,
        field: {
          connect: {
            id: dto.fieldId,
          },
        },
        stage: {
          connect: {
            id: dto.stageId,
          },
        },
        template: {
          connect: {
            id: dto.templateId,
          },
        },
        label: dto.label,
        type: dto.type,
      },
    });
  }

  async createStageFlowTemplate(dto: CreateProcessStageFlowTemplateDTO) {
    return this.db.processStageFlowTemplate.create({
      data: {
        field: dto.fieldId
          ? {
              connect: {
                id: dto.fieldId,
              },
            }
          : undefined,
        template: {
          connect: {
            id: dto.templateId,
          },
        },
        stage: {
          connect: {
            id: dto.stageId,
          },
        },
        nextStage: {
          connect: {
            id: dto.nextStageId,
          },
        },
        value: dto.value,
      },
    });
  }

  // GET

  async findOneTemplate(id: number) {
    return this.db.processTemplate.findUnique({
      where: {
        id,
      },
      include: {
        fields: true,
        stages: true,
        stageFlows: true,
        stageFields: true,
      },
    });
  }

  async findManyFieldTemplates(dto: FindManyProcessFieldTemplatesDTO) {
    return this.db.processFieldTemplate.findMany({
      where: {
        templateId: dto.templateId,
      },
    });
  }

  async findManyStageTemplates(dto: FindManyProcessStageTemplatesDTO) {
    return this.db.processStageTemplate.findMany({
      where: {
        templateId: dto.templateId,
      },
    });
  }

  async findManyStageFlowTemplates(dto: FindManyProcessStageFlowTemplatesDTO) {
    return this.db.processStageFlowTemplate.findMany({
      where: {
        templateId: dto.templateId,
        stageId: dto.stageId,
      },
    });
  }

  async findOneStageTemplate(id: number) {
    return this.db.processStageTemplate.findUnique({
      where: {
        id,
      },
      include: {
        fields: true,
      },
    });
  }

  async findManyStageFieldTemplates(
    dto: FindManyProcessStageFieldTemplatesDTO,
  ) {
    return this.db.processStageFieldTemplate.findMany({
      where: {
        templateId: dto.templateId,
        stageId: dto.stageId,
      },
    });
  }
}
