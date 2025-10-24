// components/shared/podcasts/podcastCard.tsx
'use client'

import React from 'react'
import Image from 'next/image'
import { Calendar, ExternalLink, User } from 'lucide-react'

import { format } from 'date-fns'
import { Podcast } from '../../../../types/podcast'

interface PodcastCardProps {
  podcast: Podcast
}

export default function PodcastCard({ podcast }: PodcastCardProps) {
  const handleCardClick = () => {
    if (podcast.linkUrl) {
      window.open(podcast.linkUrl, '_blank')
    }
  }

  // Format date
  const formattedDate = podcast.createdAt
    ? format(new Date(podcast.createdAt), 'dd MMMM, yyyy')
    : 'Date unavailable'

  return (
    <div className="bg-[#F7F8FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      {/* Thumbnail with Play Button */}
      <div
        className="relative h-[260px] md:h-[350px] lg:h-[400px] bg-gray-200 cursor-pointer overflow-hidden"
        onClick={handleCardClick}
      >
        {podcast.uploadThumbnail ? (
          <Image
            src={podcast.uploadThumbnail}
            alt={podcast.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">
            <span className="text-4xl text-blue-400">🎙️</span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-16 h-16 rounded-full 
    bg-white/20 backdrop-blur-md 
   
    flex items-center justify-center 
    group-hover:scale-110 
    transition-all duration-300 
    shadow-lg shadow-black/20"
          >
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#79808b] border-b-8 border-b-transparent ml-1" />
          </div>
        </div>

        {/* Link indicator */}
        {podcast.linkUrl && (
          <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink className="w-4 h-4 text-[#5A8DEE]" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Media Name Badge and Title */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            {podcast.mediaName && (
              <span className="inline-block px-3 py-1 text-xs font-medium bg-[#5A8DEE]/10 text-[#5A8DEE] rounded-full">
                {podcast.mediaName}
              </span>
            )}
            <div className="flex items-center gap-1 font-medium">
              <User size={20} className="text-gray-500 pb-1" />
              <h3 className="text-sm text-[#68706A]">
                {podcast?.podcastCreatorName &&
                podcast?.podcastCreatorName.trim() !== ''
                  ? podcast?.podcastCreatorName
                  : 'Unknown'}
              </h3>
            </div>
          </div>
          <h3
            className="text-[#5A8DEE] font-semibold text-lg leading-tight hover:underline cursor-pointer line-clamp-2"
            onClick={handleCardClick}
          >
            {podcast.title}
          </h3>
        </div>

        {/* Description */}
        {podcast.description && (
          <p className="text-[#929292] text-sm md:text-base leading-relaxed line-clamp-3">
            {podcast.description}
          </p>
        )}

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-[#68706A] pt-2 border-t border-gray-200">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          {podcast.linkName && (
            <span className="flex items-center gap-1.5 text-[#5A8DEE] font-medium">
              {podcast.linkName}
              <ExternalLink className="w-3 h-3" />
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
