// src/app/api/auth/[...nextauth]/auth.config.ts

import CredentialsProvider from 'next-auth/providers/credentials'
import type { AuthOptions } from 'next-auth'

export const authConfig: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'Email Address' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.log('❌ Missing credentials')
          return null
        }

        try {
          console.log('🔵 Attempting login for:', credentials.email)

          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          )

          const data = await res.json()
          console.log('🔵 API Response:', data)

          // Handle different response structures
          const user = data?.data?.user || data?.user
          const token = data?.data?.accessToken || data?.accessToken

          if (!res.ok || !user || !token) {
            console.error('❌ Login failed:', data)
            return null
          }

          console.log('✅ Login successful for:', user.email)

          // Return user object with all required fields
          return {
            id: String(user._id || user.id),
            name: user.name || '',
            email: user.email,
            role: user.role || 'user',
            accessToken: token,
            phoneNumber: user.phoneNumber || '',
            verified: user.verified ?? false,
          }
        } catch (error) {
          console.error('❌ Authorize error:', error)
          return null
        }
      },
    }),
  ],

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  callbacks: {
    async jwt({ token, user, trigger }) {
      // Initial sign in
      if (user) {
        console.log('🔵 JWT callback - adding user to token:', user.email)
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.role = user.role
        token.accessToken = user.accessToken
        token.phoneNumber = user.phoneNumber
        token.verified = user.verified
      }
      return token
    },

    async session({ session, token }) {
      // Add token data to session
      if (token) {
        console.log(
          '🔵 Session callback - populating session for:',
          token.email
        )
        session.user = {
          id: token.id as string,
          name: token.name as string,
          email: token.email as string,
          role: token.role as string,
          accessToken: token.accessToken as string,
          phoneNumber: token.phoneNumber as string,
          verified: token.verified as boolean,
        }
      }
      return session
    },
  },

  pages: {
    signIn: '/signin',
    error: '/signin', // Redirect to signin on error
  },

  secret: process.env.NEXTAUTH_SECRET,

  debug: process.env.NODE_ENV === 'development', // Enable debug logs
}
