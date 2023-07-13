import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      username: string;
      role: string;
    } & DefaultSession['user'];
  }
}

declare module 'next-auth/adapters' {
    interface AdapterUser {
      id: string;
      username: string;
      role: string;
    };
}