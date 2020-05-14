// Vendors
import { NestFactory } from '@nestjs/core';
// Modules
import { AppModule } from 'app.module';
// Interceptors
import { TransformInterceptor } from 'common/interceptors/transform.interceptor';
// Filters
// import { ExceptionHandlerFilter } from 'common';
// Logger
import { MyLogger } from 'logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalInterceptors(new TransformInterceptor());
  app.useLogger(app.get(MyLogger));

  await app.listen(3000, '0.0.0.0'); // TODO
}
bootstrap();
