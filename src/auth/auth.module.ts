import {forwardRef, Module} from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {User} from "../users/users.model";
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import * as process from "process";

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
      forwardRef(() => UsersModule),
      JwtModule.register({secret: process.env.PRIVATE_KET || 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }})
  ],
    exports: [
        AuthService,
        JwtModule
    ]
})
export class AuthModule {}
