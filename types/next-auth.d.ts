// types/next-auth.d.ts

import { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      role: string
      accessToken: string
      phoneNumber?: string
      verified?: boolean
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    id: string
    name: string
    email: string
    role: string
    accessToken: string
    phoneNumber?: string
    verified?: boolean
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string
    accessToken: string
    name: string
    email: string
    role: string
    phoneNumber?: string
    verified?: boolean
  }
}
