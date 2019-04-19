import { Model, Column, CreatedAt } from 'sequelize-typescript';

export class AuthModel extends Model<AuthModel> {
  @Column refreshToken: string;
  @CreatedAt creationDate: Date;
}
