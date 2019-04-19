import {
  Model,
  Table,
  Column,
  CreatedAt,
  HasMany,
  DefaultScope
} from 'sequelize-typescript';
import { Social } from '../social/social.model';
@Table({})
@DefaultScope({
  include: [
    {
      as: 'socials',
      model: () => Social
    }
  ],
  attributes: ['id', 'name', 'joinedAt', 'socials']
})
export class User extends Model<User> {
  @Column name: string;

  @Column email: string;

  @CreatedAt joinedAt: Date;

  @HasMany(() => Social)
  socials: Social[];
}
