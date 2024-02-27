import { Body, Controller, Post } from '@nestjs/common';
import { Public } from './auth.guard';
import { AuthService } from './auth.service';
import { SignInDTO } from './dto/sign-in.dto';
import { SignUpDTO } from './dto/sign-up.dto';
import { RefreshTokenDTO } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('/sign-up')
  async signUp(@Body() dto: SignUpDTO) {
    return await this.authService.signUp(dto);
  }

  @Public()
  @Post('/sign-in')
  signIn(@Body() dto: SignInDTO) {
    return this.authService.signIn(dto);
  }

  @Post('/token/refresh')
  refreshToken(@Body() dto: RefreshTokenDTO) {
    return this.authService.refreshToken(dto);
  }
}
