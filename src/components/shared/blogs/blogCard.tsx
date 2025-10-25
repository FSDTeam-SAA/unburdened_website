'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { format } from 'date-fns'
import { Blog } from '../../../../types/blog'

interface BlogCardProps {
  blog: Blog
}

export default function BlogCard({ blog }: BlogCardProps) {
  // Format date
  const formattedDate = blog.createdAt
    ? format(new Date(blog.createdAt), 'MMMM dd, yyyy')
    : 'Date unavailable'

  return (
    <div className="bg-[#F7F8FA] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
      {/* Thumbnail */}
      <Link
        href={`/blogs/${blog._id}`}
        className="relative h-[220px] bg-gray-200 cursor-pointer overflow-hidden block"
      >
        {blog.uploadPhoto ? (
          <Image
            src={blog.uploadPhoto}
            alt={blog.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
            <span className="text-5xl">📝</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </Link>

      {/* Content */}
      <div className="p-6 space-y-3">
        {/* Status Badge and Date */}
        <div className="flex items-center justify-between text-sm">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              blog.status === 'published'
                ? 'bg-green-100 text-green-700'
                : 'bg-gray-100 text-gray-700'
            }`}
          >
            {blog.status === 'published' ? 'Published' : 'Draft'}
          </span>
          <span className="flex items-center font-light gap-1.5 text-[#6B7280]">
            <Calendar className="w-4 h-4" />
            {formattedDate}
          </span>
        </div>

        {/* Title */}
        <Link
          href={`/blog/${blog._id}`}
          className="text-[#5A8DEE] font-semibold text-sm md:text-lg leading-tight hover:underline cursor-pointer line-clamp-2"
        >
          {blog.title}
        </Link>

        {/* Description */}
        <p className="text-[#616161] text-sm leading-relaxed line-clamp-3">
          {blog.description || 'No description available'}
        </p>

        {/* Read Time and Button */}
        <div className="flex items-center justify-between pt-2">
          {blog.readTime && (
            <span className="flex items-center gap-1.5 text-xs text-[#6B7280]">
              <Clock className="w-3.5 h-3.5" />
              {blog.readTime}
            </span>
          )}

          <Link href={`/blogs/${blog._id}`}>
            <Button className="bg-[#5A8DEE] hover:bg-[#4a7dd9] text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
