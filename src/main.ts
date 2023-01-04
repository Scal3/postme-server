import { NestFactory } from '@nestjs/core';
import { mainConfig } from 'config/main.config';
import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const appConfig = mainConfig();

  await app.listen(appConfig.app.PORT, () => {
    console.log('dev process, port = ', appConfig.app.PORT);
  });
}

bootstrap();
