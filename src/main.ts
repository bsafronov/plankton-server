import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      whitelist: true,
    }),
  );
  app.use(cookieParser());

  const origin = configService.get('ORIGIN_URL');
  app.enableCors({
    credentials: true,
    origin,
  });

  const port = configService.get('PORT') ?? 3000;

  await app.listen(port, () =>
    console.log(`Server running on http://localhost:${port}`),
  );
}
bootstrap();
