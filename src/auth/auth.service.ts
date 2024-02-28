import { HttpException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { SignInDTO } from './dto/sign-in.dto';
import { SignUpDTO } from './dto/sign-up.dto';
import { RefreshTokenDTO } from './dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signUp(dto: SignUpDTO) {
    const existedEmail = await this.userService.findByEmail(dto.email);

    if (existedEmail) {
      throw new HttpException('User with this email already exists', 400);
    }

    const existedUsername = await this.userService.findByUsername(dto.username);

    if (existedUsername) {
      throw new HttpException('User with this username already exists', 400);
    }
    const hashPassword = await bcrypt.hash(dto.password, 10);
    const { password, ...newUser } = await this.prismaService.user.create({
      data: {
        ...dto,
        password: hashPassword,
      },
    });
    const tokens = await this.generateTokens(newUser.id);
    return {
      user: newUser,
      tokens,
    };
  }

  async signIn(dto: SignInDTO) {
    if (!dto.email && !dto.username) {
      throw new HttpException('Email or username is required', 400);
    }

    let user: User | null;

    if (dto.email) {
      user = await this.userService.findByEmail(dto.email);
    }
    if (dto.username) {
      user = await this.userService.findByUsername(dto.username);
    }

    if (!user) {
      throw new HttpException('User not found', 400);
    }

    const isValidPassword = await bcrypt.compare(dto.password, user.password);

    if (!isValidPassword) {
      throw new Error('Invalid credentials');
    }
    const { password, ...rest } = user;
    const tokens = await this.generateTokens(user.id);

    return {
      user: rest,
      tokens,
    };
  }

  async generateTokens(userId: number) {
    const tokens = {
      accessToken: await this.jwtService.signAsync(
        { userId },
        {
          expiresIn: '30m',
        },
      ),
      refreshToken: await this.jwtService.signAsync(
        { userId },
        {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH_SECRET_KEY,
        },
      ),
    };

    return tokens;
  }

  async verifyAccessToken(token: string): Promise<number> {
    const { userId } = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_ACCESS_SECRET_KEY,
    });
    return userId;
  }

  async verifyRefreshToken(token: string): Promise<number> {
    const { userId } = await this.jwtService.verifyAsync(token, {
      secret: process.env.JWT_REFRESH_SECRET_KEY,
    });

    return userId;
  }
}
