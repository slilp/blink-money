import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Asset } from './asset.entity';
import { Lov } from './lov.entity';
import { Yearly } from './yaerly.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  uid: number;
  @Column({
    length: 150,
  })
  username: string;

  @Column({
    length: 150,
  })
  password: string;

  @Column({
    length: 150,
    nullable: true,
  })
  firstName: string;

  @Column({
    length: 150,
    nullable: true,
  })
  lastName: string;

  @Column({ type: 'decimal', precision: 14, scale: 4, default: 0 })
  target: number;

  @OneToMany(() => Asset, (asset) => asset.user, { cascade: true })
  assets: Asset[];

  @OneToMany(() => Lov, (lov) => lov.user, { cascade: true })
  lovs: Lov[];

  @OneToMany(() => Yearly, (yearly) => yearly.user, { cascade: true })
  yearlys: Yearly[];
}
