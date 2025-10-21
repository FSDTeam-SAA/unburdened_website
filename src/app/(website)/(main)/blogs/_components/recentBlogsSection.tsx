'use client'

import Image from 'next/image'
import { Calendar, Clock, MoveRight } from 'lucide-react'
import Link from 'next/link'

interface BlogItem {
  id: number
  title: string
  description: string
  publishedDate: string
  readTime: string
  thumbnail: string
  link?: string
}

const demoBlogs: BlogItem[] = [
  {
    id: 1,
    title: 'Finding Stillness in a Busy World',
    description:
      'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause and reconnect.',
    publishedDate: 'June 15, 2023',
    readTime: '12 min read',
    thumbnail: '/images/blog-demo.jpg',
    link: '/blog/finding-stillness',
  },
  {
    id: 2,
    title: 'The Power of Intentional Reflection',
    description:
      'Discover gentle practices for self-reflection and mindfulness to better align with your goals, values, and emotional balance in daily life.',
    publishedDate: 'June 15, 2023',
    readTime: '10 min read',
    thumbnail: '/images/blog-demo.jpg',
    link: '/blog/intentional-reflection',
  },
  {
    id: 3,
    title: 'Letting Go of Perfectionism',
    description:
      'Learn how to release the constant need to perform, control, or please — and start embracing progress over perfection in every area of life.',
    publishedDate: 'June 15, 2023',
    readTime: '9 min read',
    thumbnail: '/images/blog-demo.jpg',
    link: '/blog/perfectionism',
  },
]

export default function RecentBlogsSection() {
  const [mainBlog, ...sideBlogs] = demoBlogs

  return (
    <section className="py-14 px-4 container mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-5">
        Recent <span className="text-[#5A8DEE]">Blog Posts</span>
      </h2>

      {/* Layout: Large Left Card + Two Right Small Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left Large Blog Card */}
        <div className="group lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer flex flex-col">
          <div className="relative h-52 overflow-hidden">
            <Image
              src={mainBlog.thumbnail}
              alt={mainBlog.title}
              fill
              className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            />
          </div>

          <div className="p-6 flex flex-col justify-between  border-t">
            <div>
              <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                <span className="flex items-center gap-1">
                  <Calendar size={16} /> {mainBlog.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} /> {mainBlog.readTime}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {mainBlog.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-3">
                {mainBlog.description}
              </p>
            </div>

            <Link
              href={mainBlog.link ?? '#'}
              className="text-sky-600 font-medium hover:underline text-sm flex items-center gap-1.5"
            >
              Read More{' '}
              <span>
                <MoveRight size={18} />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side Smaller Cards */}
        <div className="flex flex-col gap-5">
          {sideBlogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer flex flex-col sm:flex-row h-[calc(24rem/2)]" // half of left height (~12rem each)
            >
              <div className="relative w-full sm:w-1/3 h-40 sm:h-auto overflow-hidden">
                <Image
                  src={blog.thumbnail}
                  alt={blog.title}
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                />
              </div>

              <div className="p-4 flex flex-col gap-5 sm:w-2/3">
                <div>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2 ">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {blog.publishedDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {blog.readTime}
                    </span>
                  </div>
                  <h4 className="text-gray-800 font-semibold text-base my-4">
                    {blog.title}
                  </h4>
                  <p className="text-gray-600 text-base line-clamp-2 mb-2">
                    {blog.description}
                  </p>
                </div>

                <Link
                  href={blog.link ?? '#'}
                  className="text-sky-600 font-medium hover:underline text-sm flex items-center gap-1.5"
                >
                  Read More{' '}
                  <span>
                    <MoveRight size={18} />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
