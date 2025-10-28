'use client'

import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { format } from 'date-fns'
// import { HeroBanner } from '@/components/shared/subBanner'
// import AllBlogSection from '../_components/allBlogsSection'

import { BlogsPageSkeleton } from '../_components/blogsPageSkeleton'
import { BlogsPageError } from '../_components/blogsPageError'
import { Blog, BlogsResponse } from '../../../../../../types/blog'

// 🔹 Fetch single blog details
async function fetchBlog(
  id: string
): Promise<{ success: boolean; blog: Blog }> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}`, {
    cache: 'no-store',
  })
  if (!res.ok) throw new Error('Failed to fetch blog details')
  return res.json()
}

// 🔹 Fetch similar blogs (can reuse from your blogs API)
async function fetchSimilarBlogs(): Promise<BlogsResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?limit=6&status=Published`,
    {
      cache: 'no-store',
    }
  )
  if (!res.ok) throw new Error('Failed to fetch similar blogs')
  return res.json()
}

export default function BlogDetailsPage() {
  const { id } = useParams()

  // Main Blog
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => fetchBlog(id as string),
  })

  // Similar Blogs
  const { data: similarData } = useQuery({
    queryKey: ['similarBlogs'],
    queryFn: fetchSimilarBlogs,
  })

  if (isLoading) return <BlogsPageSkeleton />
  if (isError || !data?.success)
    return <BlogsPageError onRetry={() => refetch()} />

  const blog = data.blog
  const similarBlogs = similarData?.blogs || []

  console.log('single blog data:', blog?.description)

  return (
    <div className="pt-20 md:pt-24">
      {/* 🔹 Hero Banner
      <HeroBanner
        image="/images/service-banner.jpg"
        height={272}
        title={blog.title}
        description={blog.description}
      /> */}

      {/* 🔹 Blog Details */}
      <section className="container mx-auto px-2  py-4 md:py-16 mb-6">
        {/* Image */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] relative rounded-2xl overflow-hidden shadow-md mb-10">
          {blog.uploadPhoto ? (
            <Image
              src={blog.uploadPhoto}
              alt={blog.title}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100">
              <span className="text-6xl opacity-50">📝</span>
            </div>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 ">
          <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
            <Calendar size={14} />
            {format(new Date(blog.createdAt), 'MMM dd, yyyy')}
          </span>
          {blog.readTime && (
            <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
              <Clock size={14} />
              {blog.readTime}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 px-1.5">
          {blog.title}
        </h1>

        {/* Content */}
        <div
          className="text-[#616161] text-base md:text-lg leading-relaxed "
          dangerouslySetInnerHTML={{
            __html: blog.description || 'No description available',
          }}
        />
      </section>

      {/* 🔹 Similar Blogs */}
      <section className="container mx-auto px-4 py-12 md:py-16 border-t border-gray-200">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">
          Similar <span className="text-[#5A8DEE]">Blogs</span>
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Articles and reflections from David Burden on mindfulness, resilience,
          and the art of letting go with a lighter mind.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {similarBlogs
            .reverse()
            .slice(0, 6)
            .map((blog) => (
              <Link
                key={blog._id}
                href={`/blogs/${blog._id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  {blog.uploadPhoto ? (
                    <Image
                      src={blog.uploadPhoto}
                      alt={blog.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      priority
                      quality={100}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100">
                      <span className="text-4xl opacity-50">📝</span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar size={12} />
                    {format(new Date(blog.createdAt), 'MMM dd, yyyy')}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-[#5A8DEE] transition-colors">
                    {blog.title}
                  </h3>

                  {/* Use div instead of p */}
                  <div
                    className="text-[#616161] text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: blog.description || 'No description available',
                    }}
                  />

                  <span className="text-[#5A8DEE] font-medium">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  )
}
