import { authOptions } from '@/lib/auth/auth'
import NextAuth from 'next-auth'

// @see @/lib/auth
export default NextAuth(authOptions)
