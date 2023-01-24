import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private UserService: UserService) {}

  @Post()
  addUser(@Body() data: userDTO) {
    return this.UserService.addUser(data);
  }

  @Get()
  getAll() {
    return this.UserService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.UserService.getById(id);
  }

  @Patch(':id')
  updateById(@Param('id') id: string, @Body() data: Partial<userDTO>) {
    return this.UserService.updateById(id, data);
  }

  @Delete(':id')
  DeleteQueryBuilder(@Param('id') id: string) {
    return this.UserService.deleteById(id);
  }
}
