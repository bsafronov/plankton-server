import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserFindManyDTO } from './dto/find-many.dto';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async findMany(@Query() dto: UserFindManyDTO) {
    const users = await this.userService.findMany(dto);

    return users;
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
