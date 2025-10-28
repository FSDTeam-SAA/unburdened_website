'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  image: string
}

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <Card className="w-full hover:shadow-lg transition-all duration-400 rounded-xl">
      <CardHeader className="flex flex-col items-center justify-center text-center space-y-3.5">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={56}
            height={56}
            className="object-cover"
          />
        </div>
        <Link href={`/services`}>
          <CardTitle className="text-[#5A8DEE] text-lg md:text-xl font-semibold hover:underline cursor-pointer">
            {title}
          </CardTitle>
        </Link>
      </CardHeader>
      <CardContent className="text-center text-sm text-[#929292]">
        {description.slice(0, 80)}
        {description.length > 80 ? '...' : ''}
      </CardContent>
    </Card>
  )
}
