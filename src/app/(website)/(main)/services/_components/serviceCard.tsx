'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  image: string
}

export default function ServiceCard({
  title,
  description,
  features,
  image,
}: ServiceCardProps) {
  return (
    <div className="group bg-[#EFF4FD] rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-5 cursor-pointer">
      {/* IMAGE SECTION */}
      <div className="relative w-full md:w-1/2 h-60 md:h-auto overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="flex-1 py-6 px-4 flex flex-col justify-center bg-[#EFF4FD] space-y-3">
        <h3 className="text-base md:text-xl font-bold text-gray-800">
          {title}
        </h3>

        <p className="text-[#616161] mt-2 text-sm leading-relaxed">
          {description}
        </p>

        <ul className="my-4 space-y-3 text-sm text-[#1C2A39] list-disc list-inside">
          {features.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <div className="mt-3">
          <Link href="/contact">
            <Button className="px-8">Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
