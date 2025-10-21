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

const forgotSchema = z.object({
  email: z.string().email('Invalid email'),
})

export default function ForgotPasswordPage() {
  const form = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: '' },
  })

  const onSubmit = (values: z.infer<typeof forgotSchema>) => {
    console.log(values)
  }

  return (
    <AuthLayout>
      <div className="space-y-6">
        <div className="text-start space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-[#71A899]">
            Forgot Password
          </h1>
          <p className="text-[#6C757D]">
            Enter your email to recover your password
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#616161]">Email Adress</FormLabel>
                  <FormControl>
                    <Input placeholder="Email Address" {...field} />
                  </FormControl>
                  <FormMessage className="text-red-400 font-medium" />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#71A899] hover:bg-[#71A899]/90 text-white"
            >
              Send OTP
            </Button>
          </form>
        </Form>
      </div>
    </AuthLayout>
  )
}
