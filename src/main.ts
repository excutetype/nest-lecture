import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // DTO에 타입을 정하는 데코레이터가 없는 경우 거름
      forbidNonWhitelisted: true, // whitelist에서 걸러진 값에 대한 에러메시지를 알려줌
      transform: true, // 컨트롤러에서 정의한 타입으로 형변환
    }),
  );
  await app.listen(3000);
}
bootstrap();
