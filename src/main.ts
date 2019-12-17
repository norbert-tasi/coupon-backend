import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('Coupon')
    .setDescription('Coupon backend services')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`api`, app, document, { swaggerOptions: { docExpansion: 'none' } });
  const PORT = process.env.PORT || 3000;

  await app.listen(PORT);
}
bootstrap();
