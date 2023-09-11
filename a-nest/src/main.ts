import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import passport from 'passport';
import { setupSwagger } from './config/swagger';
import { HttpExceptionFilter } from './httpException.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  
  app.useLogger(app.get(Logger));
  const port = process.env.PORT || 3000;
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  setupSwagger(app);

  app.use(cookieParser());
  app.use(
    session({
      resave: false, 
      secret: process.env.COOKIE_SECRET,
      cookie: {
        httpOnly: true,
      },
      saveUninitialized: false,
    }),
  );
  // app.use(passport.initialize());
  // app.use(passport.session());
  await app.listen(port);
  console.log(`listening on port ${port}`);
}
bootstrap();
