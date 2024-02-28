import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { Public } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { SignUpDTO } from './dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/sign-up')
  async signUp(
    @Body() dto: SignUpDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, tokens } = await this.authService.signUp(dto);
    res.cookie('access_token', tokens.accessToken, { httpOnly: true });
    res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
    return user.id;
  }

  @Public()
  @Post('/sign-in')
  async signIn(
    @Body() dto: SignInDTO,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { tokens, user } = await this.authService.signIn(dto);
    res.cookie('access_token', tokens.accessToken, { httpOnly: true });
    res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true });
    return user.id;
  }
}
