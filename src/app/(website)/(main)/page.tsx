import AboutSection from '@/components/landing/about'
import HeroSection from '@/components/landing/banner'
import React from 'react'

const page = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
    </div>
  )
}

export default page
