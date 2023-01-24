import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule } from '@nestjs/common';

export function DatabaseOrmModule(): DynamicModule {
  return TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    dropSchema: false,
    logging: true,
    autoLoadEntities: true,
    entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
    // migrations: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
  });
}
