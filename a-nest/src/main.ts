import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import { setupSwagger } from './config/swagger';
import { HttpExceptionFilter } from './http-Exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 3000;
    const corsOptions: CorsOptions = {
        origin: true, // 프론트엔드 주소
        credentials: true, // 요청에 쿠키 포함 여부 설정 (withCredentials : true)
    };

    app.enableCors(corsOptions);
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
    app.use(passport.initialize());
    app.use(passport.session());
    await app.listen(port);
    console.log(`listening on port ${port}`);
}
bootstrap();
