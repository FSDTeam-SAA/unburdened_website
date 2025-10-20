'use client'

import React from 'react'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'

export interface BlogCardProps {
  thumbnail: string
  category: string
  title: string
  description: string
  publishedDate: string
  blogLink?: string
}

export default function BlogCard({
  thumbnail,
  category,
  title,
  description,
  publishedDate,
  blogLink,
}: BlogCardProps) {
  const handleReadMore = () => {
    if (blogLink) {
      window.open(blogLink, '_blank')
    }
  }

  return (
    <div className="bg-[#F7F8FA] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative h-[220px] bg-gray-200 cursor-pointer group overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        {/* Category and Date */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#1C2A39] font-medium">{category}</span>
          <span className="flex items-center font-light gap-1.5 text-[#6B7280]">
            <Calendar className="w-4 h-4" />
            {publishedDate}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#5A8DEE] font-semibold text-sm md:text-lg leading-tight hover:underline cursor-pointer line-clamp-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[#616161] text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Read More Button */}
        <Button
          onClick={handleReadMore}
          className="mt-4 bg-[#5A8DEE] hover:bg-[#4a7dd9] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
        >
          Read More
        </Button>
      </div>
    </div>
  )
}
