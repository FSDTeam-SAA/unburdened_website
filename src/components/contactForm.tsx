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
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { toast } from 'sonner'
import { useMutation } from '@tanstack/react-query'

const formSchema = z.object({
  name: z.string().min(2, 'Please enter at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(7, 'Please enter a valid phone number.'),
  occupation: z.string().optional(),
  message: z.string().min(5, 'Please write at least 5 characters.'),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      occupation: '',
      message: '',
    },
  })

  // 🔹 React Query Mutation
  const mutation = useMutation({
    mutationFn: async (values: FormValues) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/contracts`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: values.name,
            email: values.email,
            phoneNumber: values.phone,
            occupation: values.occupation,
            message: values.message,
          }),
        }
      )
      const data = await res.json()
      if (!res.ok) {
        throw new Error(data?.message || 'Failed to send message.')
      }
      return data
    },
    onSuccess: () => {
      toast.success('Your message has been sent successfully!')
      form.reset()
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(error.message || 'Something went wrong. Please try again.')
    },
  })

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Full Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Name Here" {...field} />
              </FormControl>
              <FormMessage className="text-[#EF4444] font-light text-sm" />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="hello@example.com" {...field} />
              </FormControl>
              <FormMessage className="text-[#EF4444] font-light text-sm" />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="+1234567890" {...field} />
              </FormControl>
              <FormMessage className="text-[#EF4444] font-light text-sm" />
            </FormItem>
          )}
        />

        {/* Occupation */}
        <FormField
          control={form.control}
          name="occupation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Occupation</FormLabel>
              <FormControl>
                <Input placeholder="Student" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  rows={5}
                  placeholder="Write your message here..."
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-[#EF4444] font-light text-sm" />
            </FormItem>
          )}
        />

        {/* Terms */}
        <div className="text-sm text-gray-500">
          By submitting, you agree to our friendly{' '}
          <Link href="/terms&conditions" className="text-[#5A8DEE] underline">
            Terms & Conditions
          </Link>{' '}
          and{' '}
          <Link href="/privacy-policy" className="text-[#5A8DEE] underline">
            Privacy Policy
          </Link>
          .
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full bg-[#5A8DEE] hover:bg-[#4a7be0]"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </Form>
  )
}
