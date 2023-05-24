import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.text());

  // swagger
  const options = new DocumentBuilder()
    .setTitle('TvTgBot')
    .setDescription(
      'A webhook written in Typescript to send TradingView alerts to a Telegram Bot.',
    )
    .setVersion('1.0')
    .addTag('TvTgBot')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  const port = app.get('ConfigService').get('app.port');
  await app.listen(port);
  logger.log(
    `TvTgBot listening on port '${port}'...`,
  );
}
bootstrap();
