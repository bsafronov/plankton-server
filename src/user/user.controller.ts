import { Controller, Get, Param, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findMany() {
    return this.userService.findMany();
  }

  @Get('me')
  async findMe(@Req() req: Request) {
    const userId = req['user'];
    const { password, ...user } = await this.userService.findById(userId);
    return user;
  }

  @Get(':id')
  async findById(@Param() id: number) {
    const { password, ...user } = await this.userService.findById(id);
    return user;
  }
}
