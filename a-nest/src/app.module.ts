import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
