import { Injectable } from '@nestjs/common';
import { UserFindManyDTO } from './dto/find-many.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async findMany({
    page = 1,
    take = 20,
    departmentId,
    username,
    email,
    firstName,
    lastName,
    role,
  }: UserFindManyDTO) {
    return await this.prismaService.user.findMany({
      take,
      skip: page * take - take,
      where: {
        AND: {
          departmentId,
          email: {
            contains: email,
          },
          username: {
            contains: username,
          },
          role: role,
          firstName: {
            contains: firstName,
          },
          lastName: {
            contains: lastName,
          },
        },
      },
    });
  }

  async findById(id: number) {
    return await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByUsername(username: string) {
    return await this.prismaService.user.findUnique({
      where: {
        username,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
  }
}
