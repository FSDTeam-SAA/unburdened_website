// components/shared/podcasts/podcastSkeleton.tsx
'use client'

export function PodcastSkeleton() {
  return (
    <section className="py-12 bg-white px-2">
      <div className="container mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg" />
            <div className="h-8 w-40 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 bg-[length:200%_100%] animate-shimmer rounded-lg" />
          </div>
          <div className="h-5 w-full max-w-2xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md" />
        </div>

        {/* Podcast Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 mt-12">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#F7F8FA] rounded-lg overflow-hidden shadow-sm"
            >
              {/* Thumbnail Skeleton */}
              <div
                className="relative h-[260px] md:h-[350px] lg:h-[440px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Play button skeleton */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 rounded-full bg-white/30 animate-pulse"
                    style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                  />
                </div>
              </div>

              {/* Content Skeleton */}
              <div className="p-5 space-y-4">
                {/* Icon and Title */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-[34px] h-[34px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"
                    style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                  />
                  <div
                    className="h-6 flex-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
                  />
                </div>

                {/* Description Lines */}
                <div className="space-y-2">
                  <div
                    className="h-4 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
                  />
                  <div
                    className="h-4 w-11/12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.6}s` }}
                  />
                  <div
                    className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.7}s` }}
                  />
                </div>

                {/* Meta Info Skeleton */}
                <div className="flex items-center justify-between pt-2">
                  <div
                    className="h-4 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.8}s` }}
                  />
                  <div
                    className="h-4 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.9}s` }}
                  />
                  <div
                    className="h-4 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 1}s` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
