'use client'

import { useState } from 'react'
import { ServiceCard } from './service-card'
import { PaginationControls } from '@/components/ui/pagination-controls'

const demoData = [
  {
    title: 'Coaching',
    description:
      'One-on-one sessions to help you overcome obstacles and find clarity.',
    image: '/images/services/services-1.jpg',
  },
  {
    title: 'Workshops',
    description:
      'Group sessions focused on specific themes and personal growth.',
    image: '/images/services/services-2.jpg',
  },
  {
    title: 'Writing',
    description: 'Insights and reflections to inspire your personal journey.',
    image: '/images/services/services-3.jpg',
  },
  {
    title: 'Podcast',
    description: 'Conversations that explore mindfulness and growth.',
    image: '/images/services/services-4.jpg',
  },
  {
    title: 'Retreats',
    description: 'Immersive experiences designed for rejuvenation and clarity.',
    image: '/images/services/services-1.jpg',
  },
]

export function ServicesSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(demoData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = demoData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="py-16 md:py-20 lg:py-24 px-3 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold mb-3">
          My <span className="text-[#5A8DEE]">Services</span>
        </h2>
        <p className="text-[#616161] text-sm mb-10 max-w-2xl mx-auto">
          A simple, step-by-step process to help families find, connect with,
          and book trusted services with ease.
        </p>

        <div className="grid grid-cols-1 mt-12 md:mt-16 lg:mt-20 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {currentItems.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
        <div className="mt-12 md:mt-16 lg:mt-20">
          <PaginationControls
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </section>
  )
}
