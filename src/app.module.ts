import { Module } from '@nestjs/common';
import { DatabaseOrmModule } from './config/orm.config';
import { UserModule } from './user/user.module';
import { KegiatanModule } from './kegiatan/kegiatan.module';

@Module({
  imports: [DatabaseOrmModule(), UserModule, KegiatanModule],
})
export class AppModule {}
