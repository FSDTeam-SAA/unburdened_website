'use client'

import { useState } from 'react'
import PodcastCard from './podcastCard'
import { PaginationControls } from '@/components/ui/pagination-controls'
import { Button } from '@/components/ui/button'

interface PodcastSectionProps {
  titleFirst?: string
  titleHighlight?: string
  highlightColor?: string
  description?: string
  showButton?: boolean
}

export function PodcastSection({
  titleFirst = 'My',
  titleHighlight = 'Podcasts',
  highlightColor = '#5A8DEE',
  description = 'Listen to meaningful conversations and reflections on mindfulness, resilience, and finding peace in the modern world.',
  showButton = false,
}: PodcastSectionProps) {
  // --- Demo Data (Replace later with API/React Query) ---
  const demoData = [
    {
      thumbnail: '/main-podcast.png',
      playIcon: '/images/Play-button.png',
      title: 'Conversations for an Unburdened Mind',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '21 August, 2025',
      duration: '01:30:00',
      mediaLink: 'https://spotify.com',
    },
    {
      thumbnail: '/main-podcast.png',
      playIcon: '/images/Play-button.png',
      title: 'Pathways to Peace',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '14 August, 2025',
      duration: '01:25:00',
      mediaLink: 'https://youtube.com',
    },
    {
      thumbnail: '/main-podcast.png',
      playIcon: '/images/Play-button.png',
      title: 'Mindful Moments',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '7 August, 2025',
      duration: '00:58:00',
    },
    {
      thumbnail: '/main-podcast.png',
      playIcon: '/images/Play-button.png',
      title: 'The Inner Journey',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '1 August, 2025',
      duration: '01:10:00',
    },
    {
      thumbnail: '/main-podcast.png',
      playIcon: '/images/Play-button.png',
      title: 'The Inner Journey',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '1 August, 2025',
      duration: '01:10:00',
    },
    {
      thumbnail: '/main-podcast.png',
      playIcon: '/images/Play-button.png',
      title: 'The Inner Journey',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '1 August, 2025',
      duration: '01:10:00',
    },
  ]

  // --- Pagination Logic ---
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(demoData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = demoData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="py-12 bg-white px-2">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-start">
            {titleFirst}{' '}
            <span style={{ color: highlightColor }}>{titleHighlight}</span>
          </h2>
          {description && (
            <p className="text-[#68706A] text-start text-sm md:text-base">
              {description}
            </p>
          )}
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-12">
          {currentItems.map((podcast, index) => (
            <PodcastCard key={index} {...podcast} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}

        {/* See All Button */}
        {showButton && (
          <div className="flex justify-center mt-10">
            <Button
              onClick={() => console.log('See all clicked')}
              className="px-8"
            >
              See All
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
