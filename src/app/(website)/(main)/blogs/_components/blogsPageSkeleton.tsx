// app/blogs/_components/blogsPageSkeleton.tsx
'use client'

import { HeroBanner } from '@/components/shared/subBanner'

export function BlogsPageSkeleton() {
  return (
    <>
      <div className="pt-20 md:pt-24 lg:pt-32">
        <HeroBanner
          image="/images/service-banner.jpg"
          height={272}
          title="Insights, Tips & Guidance for a Clear Mind"
          description="Explore practical advice, expert strategies, and real-life stories to help you reduce mental clutter and live with focus and calm."
        />
      </div>

      {/* Recent Blogs Skeleton */}
      <section className="py-14 px-4 container mx-auto">
        <div className="h-8 w-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg mb-5" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
          {/* Left Large Card Skeleton */}
          <div className="lg:col-span-2 bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative h-52 md:h-64 lg:h-72 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="h-4 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                <div className="h-4 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
              </div>
              <div className="h-6 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                <div className="h-4 w-11/12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                <div className="h-4 w-4/5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
              </div>
            </div>
          </div>

          {/* Right Side Smaller Cards Skeleton */}
          <div className="flex flex-col gap-5">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row min-h-[12rem]"
              >
                <div className="relative w-full sm:w-1/3 h-40 sm:h-auto bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
                <div className="p-4 flex flex-col justify-between sm:w-2/3 space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-3 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                      <div className="h-3 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                    </div>
                    <div className="h-5 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded mb-2" />
                    <div className="space-y-1">
                      <div className="h-3 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                      <div className="h-3 w-4/5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Banner */}
      <div className="my-12 md:my-16 lg:my-20">
        <HeroBanner
          image="/images/about-sub.png"
          height={336}
          quote="We don't have to carry everything. Learning what to set down may be the most important skill we can develop."
          writer="- David Burden -"
        />
      </div>

      {/* All Blogs Skeleton */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10">
        <div className="container mx-auto">
          <div className="mb-8 text-center space-y-4">
            <div className="h-10 w-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg mx-auto" />
            <div className="h-5 w-96 max-w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="bg-[#F7F8FA] rounded-xl overflow-hidden shadow-sm"
              >
                <div className="relative h-[220px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="h-6 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full" />
                    <div className="h-4 w-28 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                  </div>
                  <div className="h-6 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                  <div className="space-y-2">
                    <div className="h-4 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                    <div className="h-4 w-11/12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                    <div className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="h-4 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                    <div className="h-10 w-28 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
