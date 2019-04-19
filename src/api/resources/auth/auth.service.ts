import * as cfg from 'config';
import * as jwt from 'jsonwebtoken';
import { User } from '../user/user.model';
import { IUser } from '../user/interface/user.interface';

const secret = cfg.get('auth.jwt.secret');

export const verify = (token: string): Promise<User | null> =>
  new Promise(resolve => {
    jwt.verify(token, <string>secret, (err, decoded) => {
      resolve(err ? null : <User>decoded);
    });
  });

export const decodeToken = (cookie: string) => {};

export const getOrRefreshTokens = (
  refreshToken: string
): Promise<IUser> | void => {};
