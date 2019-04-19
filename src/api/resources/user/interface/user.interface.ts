import { ISocial } from '../../social/interface/social.interface';

export class IUser {
  name: string;

  email: string;

  joinedAt: Date;

  socials?: ISocial[];
}
