import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('yearly')
export class Yearly {
  @PrimaryGeneratedColumn()
  yid: number;

  @Column({
    length: 5,
  })
  year: string;

  @Column({ type: 'decimal', precision: 14, scale: 4, default: 0 })
  value: number;

  @ManyToOne(() => User, (user) => user.yearlys)
  @JoinColumn({ name: 'uid' })
  user: User;

  @Column()
  uid: number;
}
