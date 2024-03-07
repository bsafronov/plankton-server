import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProcessTemplateDTO } from './dto/create-process-template.dto';
import { CreateProcessStageFormConditionTemplateDTO } from './dto/create-process-stage-form-condition-template.dto';
import { CreateProcessStageFormFieldTemplateDTO } from './dto/create-process-stage-form-field-template.dto';
import { CreateProcessStageFormTemplateDTO } from './dto/create-process-stage-form-template.dto';
import { CreateProcessStageTemplateDTO } from './dto/create-process-stage-template.dto';
import { CreateProcessFieldTemplateDTO } from './dto/create-process-field-template.dto';

@Injectable()
export class ProcessService {
  constructor(private db: PrismaService) {}

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

  async createStageFormTemplate(dto: CreateProcessStageFormTemplateDTO) {
    return this.db.processStageFormTemplate.create({
      data: {
        stage: {
          connect: {
            id: dto.stageId,
          },
        },
      },
    });
  }

  async createStageFormFieldTemplate(
    dto: CreateProcessStageFormFieldTemplateDTO,
  ) {
    return this.db.processStageFormFieldTemplate.create({
      data: {
        description: dto.description,
        placeholder: dto.placeholder,
        field: {
          connect: {
            id: dto.fieldId,
          },
        },
        form: {
          connect: {
            id: dto.formId,
          },
        },
        label: dto.label,
        type: dto.type,
      },
    });
  }

  async createStageFormConditionTemplate(
    dto: CreateProcessStageFormConditionTemplateDTO,
  ) {
    return this.db.processStageFormConditionTemplate.create({
      data: {
        field: {
          connect: {
            id: dto.fieldId,
          },
        },
        form: {
          connect: {
            id: dto.formId,
          },
        },
        stage: {
          connect: {
            id: dto.stageId,
          },
        },
      },
    });
  }
}
