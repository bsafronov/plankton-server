import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDTO } from './dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: Prisma.UserCreateInput) {
    const existedEmail = await this.userService.findByEmail(dto.email);

    if (existedEmail) {
      throw new HttpException('User with this email already exists', 400);
    }

    const existedUsername = await this.userService.findByUsername(dto.username);

    if (existedUsername) {
      throw new HttpException('User with this username already exists', 400);
    }
    const hashPassword = await bcrypt.hash(dto.password, 10);
    const newUser = await this.prismaService.user.create({
      data: {
        ...dto,
        password: hashPassword,
      },
    });

    return await this.generateTokens(newUser.id);
  }

  async signIn(dto: SignInDTO) {
    let user: User | null;

    if (dto.email) {
      user = await this.userService.findByEmail(dto.email);
    } else {
      user = await this.userService.findByUsername(dto.username);
    }

    if (!user) {
      throw new HttpException('User not found', 400);
    }

    const isValidPassword = await bcrypt.compare(dto.password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }

    return await this.generateTokens(user.id);
  }

  async generateTokens(userId: number) {
    const payload = {
      sub: userId,
    };

    const tokens = {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '30m',
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      }),
    };

    return tokens;
  }
}
