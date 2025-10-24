'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export default function HeroSection() {
  const { data: session } = useSession()
  console.log('User session in HeroSection:', session)
  return (
    <section className="w-full bg-white py-24 md:py-28 lg:py-36">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 items-start gap-8">
        {/* Left Side Content */}
        <div className="text-center font-bold md:text-left space-y-6 lg:pt-16 ">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
            Growth at work starts{' '}
            <span className="text-[#5A8DEE] font-bold">
              with growth within.
            </span>
          </h1>

          <p className="text-[#616161] font-normal max-w-md mx-auto md:mx-0">
            The UnBurdened Mind helps leaders navigate the space between
            personal insight and professional influence. Because real change
            moves through people, not processes.
          </p>

          <div>
            <Link href="/contact">
              <Button className="bg-[#5A8DEE] hover:bg-[#4b7bd0] text-white  py-2 rounded px-16 md:px-24 transition-all duration-200">
                Ask David
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="relative w-[350px] h-[250px] md:w-[620px] md:h-[480px] overflow-hidden"
            style={{
              borderRadius: '50px 140px 50px 50px', // top-right এখন বেশি curve
            }}
          >
            <Image
              src="/david-profile.jpg"
              alt="Coach sitting and smiling"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
