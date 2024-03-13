import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './auth/auth.module';
import { DepartmentModule } from './department/department.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProcessModule } from './process/process.module';
import { ProcessTemplateModule } from './process-template/process-template.module';
import { ProcessTemplateFieldModule } from './process-template-field/process-template-field.module';
import { ProcessTemplateStageModule } from './process-template-stage/process-template-stage.module';
import { ProcessTemplateStageFieldModule } from './process-template-stage-field/process-template-stage-field.module';
import { ProcessTemplateStageFlowModule } from './process-template-stage-flow/process-template-stage-flow.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_ACCESS_SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DepartmentModule,
    ProcessModule,
    ProcessTemplateModule,
    ProcessTemplateFieldModule,
    ProcessTemplateStageModule,
    ProcessTemplateStageFieldModule,
    ProcessTemplateStageFlowModule,
  ],
})
export class AppModule {}
