import { HeroBanner } from '@/components/shared/subBanner'
import AllBlogSection from './_components/allBlogsSection'
import RecentBlogsSection from './_components/recentBlogsSection'

const page = () => {
  return (
    <>
      <div className="pt-20 md:pt-24 lg:pt-32">
        <HeroBanner
          image="/images/service-banner.jpg"
          height={272}
          title="Insights, Tips & Guidance for a Clear Mind"
          description={`Explore practical advice, expert strategies, and real-life stories to help you reduce mental clutter and live with focus and calm.`}
        />
      </div>

      {/* Recent blogs posts */}
      <div className="mt-12">
        <RecentBlogsSection />
      </div>

      {/* blogs sub banner */}
      <div className="my-12 md:my-16 lg:my-20">
        <HeroBanner
          image="/images/about-sub.png"
          height={336}
          quote={`We don't have to carry everything. Learning what to set down may be the most 
          important skill we can develop.`}
          writer="- David Burden -"
        />
      </div>

      {/* all blogs container */}
      <AllBlogSection />
    </>
  )
}

export default page
