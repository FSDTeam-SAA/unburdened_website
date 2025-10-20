'use client'

import React from 'react'
import Image from 'next/image'
import { Calendar, Clock, User2 } from 'lucide-react'

export interface PodcastCardProps {
  thumbnail: string
  playIcon: string
  title: string
  description: string
  author: string
  publishedDate: string
  duration: string
  mediaLink?: string
}

export default function PodcastCard({
  thumbnail,
  playIcon,
  title,
  description,
  author,
  publishedDate,
  duration,
  mediaLink,
}: PodcastCardProps) {
  const handleCardClick = () => {
    if (mediaLink) {
      window.open(mediaLink, '_blank')
    }
  }

  return (
    <div className="bg-[#F7F8FA] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Thumbnail with Play Button */}
      <div
        className="relative h-[260px] md:h-[350px] lg:h-[440px] bg-gray-200 cursor-pointer group"
        onClick={handleCardClick}
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px, max-height: 440px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={playIcon}
            alt="Play"
            width={64}
            height={64}
            className="opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        {/* Icon and Title */}
        <div className="flex items-center gap-3">
          <Image
            src={'/images/podcast-icon.jpg'}
            alt="Play"
            width={34}
            height={34}
            className="rounded-full"
          />
          <h3
            className="text-[#5A8DEE] font-semibold text-lg leading-tight hover:underline cursor-pointer"
            onClick={handleCardClick}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-[#929292] text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm  text-[#68706A] mt-4">
          <span className="flex items-center gap-1.5">
            <User2 className="w-3.5 h-3.5" />
            {author}
          </span>
          {/* <div className="flex items-center gap-4"> */}
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {publishedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </span>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
