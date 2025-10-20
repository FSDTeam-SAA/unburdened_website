'use client'

import { useState } from 'react'
import PodcastCard from './podcastCard'
import { PaginationControls } from '@/components/ui/pagination-controls'
import { Button } from '@/components/ui/button'

export function PodcastSection() {
  // --- Demo Data (Replace later with API/React Query) ---
  const demoData = [
    {
      thumbnail: '/images/podcast.jpg',
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
      thumbnail: '/images/podcast.jpg',
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
      thumbnail: '/images/podcast.jpg',
      playIcon: '/images/Play-button.png',
      title: 'Mindful Moments',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '7 August, 2025',
      duration: '00:58:00',
    },
    {
      thumbnail: '/images/podcast.jpg',
      playIcon: '/images/Play-button.png',
      title: 'The Inner Journey',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '1 August, 2025',
      duration: '01:10:00',
    },
    {
      thumbnail: '/images/podcast.jpg',
      playIcon: '/images/Play-button.png',
      title: 'Balance in Chaos',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '25 July, 2025',
      duration: '00:55:00',
    },
    {
      thumbnail: '/images/podcast.jpg',
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
      thumbnail: '/images/podcast.jpg',
      playIcon: '/images/Play-button.png',
      title: 'Conversations for an Unburdened Mind',
      description:
        'Dive into mindful conversations that explore self-awareness, healing, and inner clarity. Each episode features expert insights, honest stories, and practical wisdom designed to help you quiet the noise, release what no longer serves you, and find balance in a busy world.',
      author: 'David',
      publishedDate: '21 August, 2025',
      duration: '01:30:00',
      mediaLink: 'https://spotify.com',
    },
  ]

  // --- Pagination Logic ---
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4
  const totalPages = Math.ceil(demoData.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = demoData.slice(startIndex, startIndex + itemsPerPage)

  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-10 bg-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-start">
            My <span className="text-[#5A8DEE]">Podcasts</span>
          </h2>
          <p className="text-[#68706A] text-start text-sm md:text-base">
            Listen to meaningful conversations and reflections on mindfulness,
            resilience, and finding peace in the modern world.
          </p>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

        {/* See All Button (Optional for UI balance) */}
        <div className="flex justify-center mt-10">
          <Button
            onClick={() => console.log('See all clicked')}
            className="px-8"
          >
            See All
          </Button>
        </div>
      </div>
    </section>
  )
}
