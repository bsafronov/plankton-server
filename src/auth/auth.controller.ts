import { Body, Controller, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { Public } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/sign-up')
  async signUp(@Body() dto: Prisma.UserCreateInput) {
    return await this.authService.signUp(dto);
  }

  @Public()
  @Post('/sign-in')
  signIn(@Body() dto: SignInDTO) {
    return this.authService.signIn(dto);
  }

  @Post('/token/refresh')
  refreshToken() {}
}
