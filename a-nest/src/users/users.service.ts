import { BadRequestException, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { WorkspaceMembers } from 'src/entities/WorkspaceMembers';
import { ChannelMembers } from 'src/entities/ChannelMembers';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        @InjectRepository(WorkspaceMembers)
        private workspaceMemberRepository: Repository<WorkspaceMembers>,
        @InjectRepository(ChannelMembers)
        private channelMembersRepository: Repository<ChannelMembers>,
    ) {}
    getUser() {}

    async join(email: string, nickname: string, password: string) {
        const user = await this.usersRepository.findOne({ where: { email }});
        if (user) {
            throw new UnauthorizedException('이미 존재하는 사용자입니다.');
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        await this.usersRepository.save({
            email,
            nickname,
            password: hashedPassword,
        });
        await this.workspaceMemberRepository.save({
            UserId: returned.id,
            WorkspaceId: 1,
        })
    }
}
