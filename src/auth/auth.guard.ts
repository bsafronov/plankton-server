import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const response: Response = context.switchToHttp().getResponse();

    const { access_token, refresh_token } =
      this.extractTokenFromCookies(request);

    if (!access_token && !refresh_token) {
      throw new UnauthorizedException();
    }

    try {
      const userId = await this.authService.verifyAccessToken(access_token);
      request['user'] = userId;
      return true;
    } catch {}

    try {
      const userId = await this.authService.verifyRefreshToken(refresh_token);
      request['user'] = userId;

      const tokens = await this.authService.generateTokens(userId);

      response.cookie('access_token', tokens.accessToken, { httpOnly: true });
      response.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }

  private extractTokenFromCookies(request: Request): {
    access_token?: string;
    refresh_token?: string;
  } {
    const { access_token, refresh_token } = request.cookies;

    return {
      access_token,
      refresh_token,
    };
  }
}
