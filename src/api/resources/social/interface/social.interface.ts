import { IUser } from '../../user/interface/user.interface';

export class ISocial {
  name: string;
  socialId: string;
  createdAt: Date;
  avatar?: string;
  email?: string;
  userId: string;
  user?: IUser;
}
