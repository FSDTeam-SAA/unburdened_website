'use client'

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
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const signupSchema = z
  .object({
    firstName: z.string().min(1, 'First name required'),
    lastName: z.string().min(1, 'Last name required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'At least 6 characters'),
    confirmPassword: z.string().min(6, 'Confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords don’t match',
    path: ['confirmPassword'],
  })

export default function SignupPage() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })
  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (values: z.infer<typeof signupSchema>) => {
    console.log(values)
  }

  return (
    <AuthLayout>
      <div className="space-y-6 md:space-y-10 bg-white shadow-2xl p-5 rounded-lg">
        {/* Heading */}
        <div className="space-y-2 text-start">
          <h1
            style={{ fontFamily: 'var(--font-playfair)' }}
            className="text-2xl md:text-[25px ] lg:text-[32px] leading-[1.5] font-bold text-[#71A899]"
          >
            Create Your Account
          </h1>
          <p className="text-[#6C757D] leading-[1.5]">
            Connect families with trusted care join today.
          </p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <div className="grid grid-cols-2 gap-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#616161]">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="First Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400 font-medium" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#616161]">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Last Name" {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400 font-medium" />
                  </FormItem>
                )}
              />
            </div>

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

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#616161]">
                    Create Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create Password"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400 font-medium" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#616161]">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create Password"
                        {...field}
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400 font-medium" />
                </FormItem>
              )}
            />

            {/* <div className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                className="w-4 h-4 accent-[#71A899]"
                checked
                readOnly
              />
              <p className="text-[13px] text-[#6C757D]">
                I agree to ALH Hub’s{' '}
                <Link href="#" className="text-[#71A899] underline">
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-[#71A899] underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div> */}

            <Button
              type="submit"
              className="w-full bg-[#71A899] hover:bg-[#71A899]/90 text-white"
            >
              Sign Up
            </Button>

            <p className="text-center text-base text-gray-600 mt-5">
              Already have an account?{' '}
              <Link
                href="/signin"
                className="text-[#71A899] font-medium hover:underline"
              >
                Log In
              </Link>
            </p>
          </form>
        </Form>
      </div>
    </AuthLayout>
  )
}
