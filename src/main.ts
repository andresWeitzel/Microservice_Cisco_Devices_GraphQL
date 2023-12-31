/* eslint-disable prettier/prettier */
//External
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
//Module
import { AppModule } from './app.module';
//Const-vars
const APOLLO_PORT_VALUE =
  process.env.APOLLO_PORT_ONE_VALUE || process.env.APOLLO_PORT_TWO_VALUE;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //--start with validations--
  // enable validation globally
  // this is from NestJS docs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  // enable DI for class-validator
  // this is an important step, for further steps in this article
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  //--end with validations--
  app.listen(APOLLO_PORT_VALUE);
}
bootstrap();
