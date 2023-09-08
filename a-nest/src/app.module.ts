import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import { DmsModule } from './dms/dms.module';
import { ChannelsModule } from './channels/channels.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelChats } from './entities/ChannelChats';
import { Users } from './entities/Users';
import * as dotenv from 'dotenv';
import { WorkspaceMembers } from './entities/WorkspaceMembers';
import { Workspaces } from './entities/Workspaces';
import { DMs } from './entities/DMs';
import { Mentions } from './entities/Mentions';
import { Channels } from './entities/Channels';
import { ChannelMembers } from './entities/ChannelMembers';

dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    LoggerModule.forRoot(),
    UsersModule,
    WorkspacesModule,
    DmsModule,
    ChannelsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        Users,
        WorkspaceMembers,
        Workspaces,
        DMs,
        Mentions,
        Channels,
        ChannelMembers,
        ChannelChats,
      ],
      keepConnectionAlive: true,
      logging: true,
      synchronize: false,
      charset: 'utf8mb4',
    }),
    TypeOrmModule.forFeature([Users]),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
