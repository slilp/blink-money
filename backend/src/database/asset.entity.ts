import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('asset')
export class Asset {
  @PrimaryGeneratedColumn()
  aid: number;

  @Column({
    length: 100,
  })
  label: string;

  @Column({ type: 'decimal', precision: 14, scale: 4, default: 0 })
  value: number;

  @ManyToOne(() => User, (user) => user.assets)
  @JoinColumn({ name: 'uid' })
  user: User;

  @Column()
  uid: number;
}
