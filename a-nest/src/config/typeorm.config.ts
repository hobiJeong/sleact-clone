import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { ChannelChats } from 'src/entities/ChannelChats';
import { ChannelMembers } from 'src/entities/ChannelMembers';
import { Channels } from 'src/entities/Channels';
import { DMs } from 'src/entities/DMs';
import { Mentions } from 'src/entities/Mentions';
import { Users } from 'src/entities/Users';
import { WorkspaceMembers } from 'src/entities/WorkspaceMembers';
import { Workspaces } from 'src/entities/Workspaces';

dotenv.config();

export const TypeOrmConfig: TypeOrmModuleOptions = {
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
  };