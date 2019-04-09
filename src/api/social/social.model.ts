import {
  Table,
  BelongsTo,
  ForeignKey,
  Column,
  Model,
  AllowNull
} from 'sequelize-typescript';

import { User } from '../user/user.model';

@Table
export class Social extends Model<Social> {
  @Column name: string;

  @Column socialId: string;

  @Column avatar: string;

  @Column
  @AllowNull
  email: string;

  @ForeignKey(() => User)
  @Column
  userId: string;

  @BelongsTo(() => User)
  user: User;
}
