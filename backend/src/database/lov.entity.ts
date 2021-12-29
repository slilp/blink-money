import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

export enum LovType {
  INCOME,
  OUTCOME,
}

@Entity('lov')
export class Lov {
  @PrimaryGeneratedColumn()
  lid: number;

  @Column({
    length: 150,
  })
  label: string;

  @Column({
    length: 300,
  })
  desc: string;

  @Column({
    length: 300,
  })
  logo: string;

  @Column()
  type: LovType;

  @Column({ type: 'decimal', precision: 14, scale: 4, default: 0 })
  value: number;

  @ManyToOne(() => User, (user) => user.lovs)
  @JoinColumn({ name: 'uid' })
  user: User;

  @Column()
  uid: number;
}
