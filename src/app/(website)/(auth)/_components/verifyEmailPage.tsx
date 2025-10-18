'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Clock } from 'lucide-react'
import AuthLayout from './authLayout'
import { useState, useEffect } from 'react'

// OTP Schema (6 digits required)
const otpSchema = z.object({
  otp: z.string().length(6, 'OTP must be 6 digits'),
})

export default function VerifyEmailPage() {
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: '' },
  })

  const [timeLeft, setTimeLeft] = useState(59)

  // countdown timer
  useEffect(() => {
    if (timeLeft <= 0) return
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearInterval(timer)
  }, [timeLeft])

  const onSubmit = (values: z.infer<typeof otpSchema>) => {
    console.log('OTP Submitted:', values.otp)
  }

  return (
    <AuthLayout>
      <div className="space-y-6 p-5">
        {/* Heading */}
        <div className="text-start space-y-4">
          <h1 className="text-2xl font-bold text-[#71A899]">Verify Email</h1>
          <p className="text-[#6C757D]">
            Enter OTP to verify your email address
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* OTP Fields */}
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex gap-2 md:gap-3 justify-between">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <Input
                          key={i}
                          maxLength={1}
                          className="w-10 h-10 md:w-12 md:h-12 text-center text-sm md:text-lg font-semibold border-2 focus:border-[#71A899]"
                          value={field.value[i] || ''}
                          onChange={(e) => {
                            const val = e.target.value.replace(/[^0-9]/g, '')
                            const newValue =
                              field.value.substring(0, i) +
                              val +
                              field.value.substring(i + 1)
                            field.onChange(newValue)
                          }}
                        />
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage className="text-center" />
                </FormItem>
              )}
            />

            {/* Timer + Resend */}
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>00:{timeLeft.toString().padStart(2, '0')}</span>
              </div>
              <button
                type="button"
                onClick={() => setTimeLeft(59)}
                disabled={timeLeft > 0}
                className={`${'text-gray-400 cursor-not-allowed'}`}
              >
                Didn&apos;t receive code?{' '}
                <span className=" ml-1 text-[#71A899] font-medium underline">
                  Resend
                </span>
              </button>
            </div>

            {/* Verify Button */}
            <Button
              type="submit"
              className="w-full bg-[#71A899] hover:bg-[#71A899]/90 text-white"
            >
              Verify
            </Button>
          </form>
        </Form>
      </div>
    </AuthLayout>
  )
}
