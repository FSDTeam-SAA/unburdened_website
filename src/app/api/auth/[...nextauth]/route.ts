import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        try {
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

          if (!res.ok || !data?.data?.accessToken) return null

          return {
            id: data.data.user._id,
            email: data.data.user.email,
            role: data.data.user.role,
            accessToken: data.data.accessToken,
            refreshToken: data.data.refreshToken,
            profileImage: data.data.user.profileImage,
          }
        } catch (err) {
          console.error('Authorize error:', err)
          return null
        }
      },
    }),
  ],

  // 👇 FIX: Use literal type 'jwt' not string
  session: {
    strategy: 'jwt' as const,
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.role = user.role
        token.accessToken = user.accessToken
        token.refreshToken = user.refreshToken
        token.profileImage = user.profileImage
      }
      return token
    },

    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.id,
          email: token.email,
          role: token.role,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
          profileImage: token.profileImage,
        }
      }
      return session
    },
  },

  pages: {
    signIn: '/signin',
  },

  secret: process.env.NEXTAUTH_SECRET,
}

// ✅ Export correctly for Next.js App Router
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
