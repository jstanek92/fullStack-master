// Enums
import { UserType } from 'app/shared/enums';

export interface User {
  _id?: string;
  id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  userRole: UserType | string;
  token?: any;
}
