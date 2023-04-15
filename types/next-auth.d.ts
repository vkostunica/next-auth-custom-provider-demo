import 'next-auth';
import { User as UserModel, Account as AccountModel } from '@prisma/client';

declare module 'next-auth' {
  interface User extends UserModel {}
  interface Account extends AccountModel {}

  interface Session {
    user: User;
    expires: string;
  }
}
