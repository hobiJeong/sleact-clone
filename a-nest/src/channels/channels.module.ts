import { Module } from '@nestjs/common';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelMembers } from 'src/entities/ChannelMembers';
import { ChannelChats } from 'src/entities/ChannelChats';
import { Users } from 'src/entities/Users';
import { Channels } from 'src/entities/Channels';
import { Workspaces } from 'src/entities/Workspaces';
import { EventsModule } from 'src/events/events.module';

@Module({
    imports: [TypeOrmModule.forFeature([Channels, ChannelMembers, ChannelChats, Users, Workspaces]), EventsModule],
    controllers: [ChannelsController],
    providers: [ChannelsService],
})
export class ChannelsModule {}
