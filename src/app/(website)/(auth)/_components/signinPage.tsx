/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AuthLayout from './authLayout'
import Link from 'next/link'
import { Eye, EyeOff } from 'lucide-react'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner' // optional toast library, you can remove if not using
import { useRouter } from 'next/navigation'

const signinSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password required'),
})

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: { email: '', password: '' },
  })

  // --- React Query Mutation ---
  const { mutate: login, isPending } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      if (!res.ok) throw new Error(result.message || 'Login failed')
      return result
    },
    onSuccess: (data) => {
      toast.success('Login successful')
      console.log('✅ Logged in user:', data)

      // Optional: redirect to dashboard
      router.push('/')
    },
    onError: (error: any) => {
      toast.error(error.message || 'Login failed')
    },
  })

  const onSubmit = (values: z.infer<typeof signinSchema>) => {
    login(values)
  }

  return (
    <AuthLayout>
      <div className="space-y-6 lg:space-y-8 bg-white shadow-2xl p-5 rounded-md">
        <div className="space-y-4 text-start">
          <h1 className="text-xl md:text-2xl lg:text-[32px] font-bold text-[#71A899]">
            Welcome to the unburdened mind
          </h1>
          <p className="text-[#6C757D] text-sm md:text-base">
            Access your account to manage your mind, mood & for your peace.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#616161]">
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-400 font-medium" />
                </FormItem>
              )}
            />

            {/* Password Field */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#616161]">Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        className="pr-10"
                        {...field}
                      />
                    </FormControl>
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  <FormMessage className="text-red-400 font-medium" />
                </FormItem>
              )}
            />

            {/* Remember me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-[#71A899]"
                  checked
                  readOnly
                />
                <span className="text-gray-600">Remember me</span>
              </div>
              <Link
                href="/forgot-password"
                className="text-[#71A899] underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#71A899] hover:bg-[#71A899]/90 cursor-pointer text-white"
              disabled={isPending}
            >
              {isPending ? 'Logging in...' : 'Log In'}
            </Button>

            {/* Sign Up link */}
            <p className="text-center text-sm text-gray-600 mt-5">
              Don’t have an account?{' '}
              <Link
                href="/signup"
                className="text-[#71A899] font-medium hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </AuthLayout>
  )
}
