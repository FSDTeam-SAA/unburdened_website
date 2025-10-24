import React from 'react'
import HeroSection from '@/components/landing/banner'
import AboutSection from '@/components/landing/about'
import { ServicesSection } from '@/components/landing/services-section'
import SubBanner from '@/components/landing/subBanner'
import { PodcastSection } from '@/components/shared/podcasts/podcastSection'
import BlogSection from '@/components/shared/blogs/blogSection'

export default function Page() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SubBanner />
      <PodcastSection
        titleFirst="My"
        titleHighlight="Podcasts"
        highlightColor="#5A8DEE"
        description="Explore our most recent discussions on personal growth, mindfulness, and peace."
        showButton={true}
      />
      <BlogSection showButton={true} />
    </div>
  )
}
