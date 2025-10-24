// components/shared/blogs/blogSection.tsx
'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import BlogCard from './blogCard'
import { BlogSkeleton } from './blogSkeleton'
import { BlogError } from './blogError'
import { Button } from '@/components/ui/button'
import { PaginationControls } from '@/components/ui/pagination-controls'

import Link from 'next/link'
import { BlogsResponse } from '../../../../types/blog'

interface BlogSectionProps {
  showButton?: boolean
  limit?: number
  showPagination?: boolean
}

export function BlogSection({
  showButton = false,
  limit = 6,
  showPagination = true,
}: BlogSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)

  // Fetch blogs
  const { data, isLoading, isError, refetch } = useQuery<BlogsResponse>({
    queryKey: ['blogs', currentPage, limit],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/blogs?page=${currentPage}&limit=${limit}`
      )
      if (!res.ok) throw new Error('Failed to fetch blogs')
      return res.json()
    },
  })

  // Loading state
  if (isLoading) return <BlogSkeleton />

  // Error state
  if (isError || !data?.success) return <BlogError onRetry={() => refetch()} />

  const blogs = data.blogs || []
  const pagination = data.pagination

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Latest <span className="text-[#5A8DEE]">Blogs</span>
          </h2>
          <p className="text-[#68706A] text-sm md:text-base max-w-3xl mx-auto">
            Articles and reflections from David Burden on mindfulness,
            resilience, and the art of living with a lighter mind.
          </p>
        </div>

        {/* Blog Grid */}
        {blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-12 md:mt-16">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {showPagination && pagination.totalPages > 1 && (
              <div className="flex justify-center mt-10">
                <PaginationControls
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="flex flex-col items-center gap-4">
              <div className="text-6xl">📝</div>
              <p className="text-gray-500 text-lg">
                No blog posts available at the moment.
              </p>
            </div>
          </div>
        )}

        {/* See All Button */}
        {showButton && blogs.length > 0 && (
          <div className="flex justify-center mt-10">
            <Link href="/blogs">
              <Button className="px-8 bg-gradient-to-r from-[#5A8DEE] to-[#4A7DD9] hover:from-[#4A7DD9] hover:to-[#3A6DC9]">
                See All Blogs
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default BlogSection
