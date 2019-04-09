import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: 'boilerplate',
  dialect: 'postgres',
  username: 'postgres',
  password: '123123',
  storage: ':memory:',
  host: process.env.DB_HOST || '192.168.99.100',
  port: 5432,
  modelPaths: [__dirname + '../api/**/*.model.ts']
});
