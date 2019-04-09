import 'reflect-metadata';
import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  database: process.env.POSTGRES_URI || 'boilerplate',
  dialect: 'postgres',
  username: 'postgres',
  password: '123123',
  storage: ':memory:',
  host: '192.168.99.100',
  port: 6543,
  modelPaths: [__dirname + '../api/**/*.model.ts']
});
