import React from 'react'
import { HeroBanner } from '../shared/subBanner'

const SubBanner = () => {
  return (
    <div className="py-12 space-y-8 px-2">
      {/* Example 1: Quote with Button */}
      <HeroBanner
        image="/images/banner/home-sub-banner.png"
        height={380}
        writer="- David Burden -"
        quote="The mind is like water. When it's turbulent, it's difficult to see. When it's calm, everything becomes clear."
        buttonText="Ask David"
        onButtonClick={() => alert('Button clicked!')}
      />

      {/* Example 2: Just Quote (No Button) */}
      {/* <HeroBanner
        image="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200"
        height={320}
        quote="In the midst of chaos, there is also opportunity."
      /> */}

      {/* Example 3: Title and Description */}
      {/* <HeroBanner
        image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200"
        height={450}
        title="Welcome to Our Platform"
        description="Discover amazing features and build something great together"
      /> */}

      {/* Example 4: Custom Height */}
      {/* <HeroBanner
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
        height={280}
        quote="The journey of a thousand miles begins with a single step."
      /> */}
    </div>
  )
}

export default SubBanner
