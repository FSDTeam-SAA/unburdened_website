// app/blogs/_components/recentBlogsSection.tsx
'use client'

import Image from 'next/image'
import { Calendar, Clock, MoveRight } from 'lucide-react'
import Link from 'next/link'

import { format } from 'date-fns'
import { Blog } from '../../../../../../types/blog'

interface RecentBlogsSectionProps {
  blogs: Blog[]
}

export default function RecentBlogsSection({ blogs }: RecentBlogsSectionProps) {
  const recentBlogs = blogs.slice(0, 3)

  if (recentBlogs.length === 0) {
    return (
      <section className="py-14 px-4 container mx-auto">
        <h2 className="text-xl md:text-2xl font-bold mb-5">
          Recent <span className="text-[#5A8DEE]">Blog Posts</span>
        </h2>
        <div className="text-center py-16">
          <div className="flex flex-col items-center gap-4">
            <div className="text-6xl">📝</div>
            <p className="text-gray-500 text-lg">
              No recent blog posts available.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const [mainBlog, ...sideBlogs] = recentBlogs

  return (
    <section className="py-14 px-4 container mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Recent <span className="text-[#5A8DEE]">Blog Posts</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Our latest articles on mindfulness and mental clarity
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
        {/* Left Large Blog Card */}
        {mainBlog && (
          <Link
            href={`/blogs/${mainBlog._id}`}
            className="group lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              {mainBlog.uploadPhoto ? (
                <Image
                  src={mainBlog.uploadPhoto}
                  alt={mainBlog.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100">
                  <span className="text-7xl opacity-50">📝</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6 lg:p-8 flex flex-col flex-1">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
                  <Calendar size={14} />
                  {format(new Date(mainBlog.createdAt), 'MMM dd, yyyy')}
                </span>
                {mainBlog.readTime && (
                  <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full">
                    <Clock size={14} />
                    {mainBlog.readTime}
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#5A8DEE] transition-colors duration-300">
                {mainBlog.title}
              </h3>

              <p
                className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 line-clamp-3 flex-1"
                dangerouslySetInnerHTML={{
                  __html: mainBlog.description || 'No description available',
                }}
              />

              <div className="flex items-center text-[#5A8DEE] font-semibold text-base group-hover:gap-3 gap-2 transition-all duration-300">
                <span>Read Full Article</span>
                <MoveRight
                  size={20}
                  className="transform group-hover:translate-x-2 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        )}

        {/* Right Side Smaller Cards */}
        <div className="flex flex-col gap-5 lg:gap-6">
          {sideBlogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blog/${blog._id}`}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row flex-1"
            >
              <div className="relative w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                {blog.uploadPhoto ? (
                  <Image
                    src={blog.uploadPhoto}
                    alt={blog.title}
                    fill
                    className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-blue-50 to-purple-100">
                    <span className="text-4xl opacity-50">📝</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 flex flex-col justify-between sm:w-3/5">
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                      <Calendar size={12} />
                      {format(new Date(blog.createdAt), 'MMM dd')}
                    </span>
                    {blog.readTime && (
                      <span className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                        <Clock size={12} />
                        {blog.readTime}
                      </span>
                    )}
                  </div>

                  <h4 className="text-gray-800 font-bold text-base lg:text-lg mb-2 line-clamp-2 group-hover:text-[#5A8DEE] transition-colors duration-300">
                    {blog.title}
                  </h4>

                  <p
                    className="text-[#616161] text-sm leading-relaxed line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: blog.description || 'No description available',
                    }}
                  />
                </div>

                <div className="flex items-center text-[#5A8DEE] font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-300">
                  <span>Read More</span>
                  <MoveRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
