import { Injectable } from '@nestjs/common';
import { user } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user)
    private userRepository: Repository<user>,
  ) {}

  async addUser(data: userDTO) {
    const newUser = await this.userRepository.create(data);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async getAll() {
    const getData = await this.userRepository.find();

    const resp = {
      status: 200,
      data: getData,
    };

    return resp;
  }

  async getById(id: string) {
    return await this.userRepository.findOne({ where: { id } });
  }

  async updateById(id: string, data: Partial<userDTO>) {
    const editUser = await this.userRepository.update({ id }, data);
    return editUser;
  }

  async deleteById(id: string) {
    await this.userRepository.delete({ id });
    return `user id: ${id} deleted`;
  }
}
