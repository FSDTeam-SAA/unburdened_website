'use client'

import BlogCard from '@/components/shared/blogs/blogCard'
import { PaginationControls } from '@/components/ui/pagination-controls'
import { Blog } from '../../../../../../types/blog'

interface AllBlogSectionProps {
  blogs: Blog[]
  pagination: {
    currentPage?: number
    totalPages?: number
    totalData?: number
    hasNextPage?: boolean
    hasPrevPage?: boolean
  }
  currentPage: number
  onPageChange: (page: number) => void
  isFetching?: boolean
}

export default function AllBlogSection({
  blogs,
  pagination,
  currentPage,
  onPageChange,
  isFetching,
}: AllBlogSectionProps) {
  if (!blogs.length) {
    return (
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          All <span className="text-[#5A8DEE]">Blogs</span>
        </h2>
        <p className="text-[#68706A] text-sm md:text-base">
          No blog posts available right now.
        </p>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            All <span className="text-[#5A8DEE]">Blogs</span>
          </h2>
          <p className="text-[#68706A] text-sm md:text-base mx-auto">
            Articles and reflections from David Burden on mindfulness,
            resilience, and the art of living with a lighter mind.
          </p>
        </div>

        {/* Blog Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-12 md:mt-16 transition-opacity duration-300 ${
            isFetching ? 'opacity-50' : 'opacity-100'
          }`}
        >
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>

        {/* Pagination */}
        {pagination.totalPages && pagination.totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <PaginationControls
              currentPage={currentPage}
              totalPages={pagination.totalPages}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </section>
  )
}
