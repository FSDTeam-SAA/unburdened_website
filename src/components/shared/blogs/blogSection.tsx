'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { PaginationControls } from '@/components/ui/pagination-controls'
import BlogCard from './blogCard'

export function BlogSection() {
  // --- Demo Blog Data (Replace later with API/React Query) ---
  const demoData = [
    {
      thumbnail: '/images/blog-demo.jpg',
      category: 'Mindfulness',
      title: 'Finding Stillness in a Busy World',
      description:
        'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause, breathe, and reconnect with yourself even in the midst of daily chaos.',
      publishedDate: 'June 15, 2025',
      blogLink: '/blog/finding-stillness',
    },
    {
      thumbnail: '/images/blog-demo.jpg',
      category: 'Mindfulness',
      title: 'The Power of Intentional Reflection',
      description:
        'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause, breathe, and reconnect with yourself even in the midst of daily chaos.',
      publishedDate: 'June 22, 2025',
      blogLink: '/blog/intentional-reflection',
    },
    {
      thumbnail: '/images/blog-demo.jpg',
      category: 'Mindfulness',
      title: 'Letting Go of Perfectionism',
      description:
        'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause, breathe, and reconnect with yourself even in the midst of daily chaos.',
      publishedDate: 'June 29, 2025',
      blogLink: '/blog/perfectionism',
    },
    {
      thumbnail: '/images/blog-demo.jpg',
      category: 'Connection',
      title: 'Creating Meaningful Relationships',
      description:
        'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause, breathe, and reconnect with yourself even in the midst of daily chaos.',
      publishedDate: 'July 6, 2025',
      blogLink: '/blog/meaningful-connections',
    },
    {
      thumbnail: '/images/blog-demo.jpg',
      category: 'Boundaries',
      title: 'The Art of Saying No',
      description:
        'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause, breathe, and reconnect with yourself even in the midst of daily chaos.',
      publishedDate: 'July 12, 2025',
      blogLink: '/blog/saying-no',
    },
    {
      thumbnail: '/images/blog-demo.jpg',
      category: 'Mindfulness',
      title: 'Embracing Uncertainty',
      description:
        'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause, breathe, and reconnect with yourself even in the midst of daily chaos.',
      publishedDate: 'July 19, 2025',
      blogLink: '/blog/embracing-uncertainty',
    },
    {
      thumbnail: '/images/blog-demo.jpg',
      category: 'Mindfulness',
      title: 'Embracing Uncertainty',
      description:
        'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause, breathe, and reconnect with yourself even in the midst of daily chaos.',
      publishedDate: 'July 19, 2025',
      blogLink: '/blog/embracing-uncertainty',
    },
    {
      thumbnail: '/images/blog-demo.jpg',
      category: 'Mindfulness',
      title: 'Embracing Uncertainty',
      description:
        'Practical strategies for cultivating deep moments of calm, focus, and mental clarity amid the noise, speed, and constant demands of everyday life — gentle, actionable ways to pause, breathe, and reconnect with yourself even in the midst of daily chaos.',
      publishedDate: 'July 19, 2025',
      blogLink: '/blog/embracing-uncertainty',
    },
  ]

  // --- Pagination Logic ---
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPages = Math.ceil(demoData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = demoData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Latest <span className="text-[#5A8DEE]">Blogs</span>
          </h2>
          <p className="text-[#68706A] text-sm md:text-base  mx-auto">
            Articles and reflections from David Burden on mindfulness,
            resilience, and the art of living with a lighter mind.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-12 md:mt-16">
          {currentItems.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

        {/* See All Button */}
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => console.log('See all blogs clicked')}
            className="px-8 bg-[#5A8DEE] hover:bg-[#4a7dd9]"
          >
            See All
          </Button>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
