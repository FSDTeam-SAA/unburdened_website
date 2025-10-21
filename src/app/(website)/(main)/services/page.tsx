import { HeroBanner } from '@/components/shared/subBanner'
import ServicesSection from './_components/servicesSection'

const page = () => {
  return (
    <div>
      <div className="pt-20 md:pt-24 lg:pt-32">
        <HeroBanner
          image="/images/service-banner.jpg"
          height={272}
          title="What We Provide"
          description={`Discover how The Unburdened Mind can support your journey toward clarity, purpose, and freedom from 
what no longer serves you.`}
        />
      </div>
      <div className="container mx-auto">
        <ServicesSection />
      </div>
    </div>
  )
}

export default page
