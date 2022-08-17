import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { getEnv } from 'common/env';
import { addNumber } from 'common/utils';

async function bootstrap() {
  const port = getEnv('PORT', '3000');
  const newPort = addNumber(parseInt(port), 1);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
