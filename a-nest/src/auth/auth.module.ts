import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { LocalSerializer } from './local.serializer';
import { UsersModule } from 'src/users/users.module';

@Module({
    imports: [
        PassportModule.register({ session: true }), 
        TypeOrmModule.forFeature([Users]),
        UsersModule,
    ],
    providers: [AuthService, LocalStrategy, LocalSerializer]
})
export class AuthModule {}
