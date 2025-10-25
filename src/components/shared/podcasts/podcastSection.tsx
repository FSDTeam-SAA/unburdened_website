// components/shared/podcasts/podcastSection.tsx
'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import PodcastCard from './podcastCard'
import { PodcastSkeleton } from './podcastSkeleton'
import { PodcastError } from './podcastError'
import { PaginationControls } from '@/components/ui/pagination-controls'
import { Button } from '@/components/ui/button'

import Link from 'next/link'
import { PodcastsResponse } from '../../../../types/podcast'

interface PodcastSectionProps {
  titleFirst?: string
  titleHighlight?: string
  highlightColor?: string
  description?: string
  showButton?: boolean
  limit?: number
  mediaType?: 'all' | 'Youtube Videos' | 'Spotify Audios'
}

export function PodcastSection({
  titleFirst = 'My',
  titleHighlight = 'Podcasts',
  highlightColor = '#5A8DEE',
  description = 'Listen to meaningful conversations and reflections on mindfulness, resilience, and finding peace in the modern world.',
  showButton = false,
  limit = 4,
  mediaType = 'all',
}: PodcastSectionProps) {
  const [currentPage, setCurrentPage] = useState(1)

  // Build query URL based on mediaType
  const buildQueryUrl = () => {
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/podcasts`
    const params = new URLSearchParams({
      page: currentPage.toString(),
      limit: limit.toString(),
    })

    // Add mediaName filter if not 'all'
    if (mediaType !== 'all') {
      params.append('mediaName', mediaType)
    }

    return `${baseUrl}?${params.toString()}`
  }

  // Fetch podcasts
  const { data, isLoading, isError, refetch } = useQuery<PodcastsResponse>({
    queryKey: ['podcasts', currentPage, limit, mediaType],
    queryFn: async () => {
      const res = await fetch(buildQueryUrl())
      if (!res.ok) throw new Error('Failed to fetch podcasts')
      return res.json()
    },
  })

  // Loading state
  if (isLoading) return <PodcastSkeleton />

  // Error state
  if (isError || !data?.status)
    return <PodcastError onRetry={() => refetch()} />

  const podcasts = data.data.podcasts || []
  const pagination = data.data.pagination

  return (
    <section className="py-12 bg-white px-2">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-start">
            {titleFirst}{' '}
            <span style={{ color: highlightColor }}>{titleHighlight}</span>
          </h2>
          {description && (
            <p className="text-[#68706A] text-start text-sm md:text-base max-w-3xl">
              {description}
            </p>
          )}
        </div>

        {/* Podcast Grid */}
        {podcasts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-12">
              {podcasts.map((podcast) => (
                <PodcastCard key={podcast._id} podcast={podcast} />
              ))}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="mt-12 flex justify-center">
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
              <div className="text-6xl">🎙️</div>
              <p className="text-gray-500 text-lg">
                No {mediaType !== 'all' ? mediaType : ''} podcasts available at
                the moment.
              </p>
            </div>
          </div>
        )}

        {/* See All Button */}
        {showButton && podcasts.length > 0 && (
          <div className="flex justify-center mt-10">
            <Link href="/podcast">
              <Button className="px-8 bg-gradient-to-r from-[#5A8DEE] to-[#4A7DD9] hover:from-[#4A7DD9] hover:to-[#3A6DC9]">
                See All Podcasts
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
