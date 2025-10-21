'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { HeroBanner } from '@/components/shared/subBanner'

const tabs = [
  { name: 'All', href: '/podcast' },
  { name: 'YouTube Videos', href: '/podcast/youtube' },
  { name: 'Spotify Audios', href: '/podcast/spotify' },
]

export default function PodcastsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="container mx-auto">
      {/* 🔹 Banner Section */}
      <div className="pt-20 md:pt-24 lg:pt-32">
        <HeroBanner
          image="/podcast-banner.jpg"
          height={272}
          title="What We Provide"
          description={`Discover how The Unburdened Mind can support your journey toward clarity, purpose, and freedom from 
      what no longer serves you.`}
        />
      </div>

      {/* 🔹 Filter Tabs */}
      <div className="flex items-center justify-start gap-3 mt-16 md:mt-20 lg:mt-24 px-2.5">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href
          return (
            <Link key={tab.name} href={tab.href}>
              <button
                className={`px-5 py-2 rounded-md text-xs md:text-base font-medium border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#5A8DEE] text-white border-[#5A8DEE]'
                    : 'text-[#5A8DEE] border-[#5A8DEE] hover:bg-[#5A8DEE]/10'
                }`}
              >
                {tab.name}
              </button>
            </Link>
          )
        })}
      </div>

      {/* 🔹 Page Content */}
      <div className="container mx-auto px-4 pt-8">{children}</div>
    </div>
  )
}
