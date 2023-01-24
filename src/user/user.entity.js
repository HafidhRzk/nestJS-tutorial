import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nama: string;

  @Column('text')
  deskripsi: string;

  @Column()
  isAdmin: boolean;
}
