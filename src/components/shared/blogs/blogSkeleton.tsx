// components/shared/blogs/blogSkeleton.tsx
'use client'

export function BlogSkeleton() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10">
      <div className="container mx-auto">
        {/* Header Skeleton */}
        <div className="mb-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="h-10 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg" />
            <div className="h-10 w-32 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 bg-[length:200%_100%] animate-shimmer rounded-lg" />
          </div>
          <div className="h-5 w-full max-w-2xl mx-auto bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md" />
        </div>

        {/* Blog Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 mt-12 md:mt-16">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#F7F8FA] rounded-xl overflow-hidden shadow-sm"
            >
              {/* Thumbnail Skeleton */}
              <div
                className="relative h-[220px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"
                style={{ animationDelay: `${i * 0.1}s` }}
              />

              {/* Content Skeleton */}
              <div className="p-6 space-y-3">
                {/* Category and Date */}
                <div className="flex items-center justify-between">
                  <div
                    className="h-5 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
                  />
                  <div
                    className="h-5 w-28 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                  />
                </div>

                {/* Title */}
                <div
                  className="h-6 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                  style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                />

                {/* Description Lines */}
                <div className="space-y-2">
                  <div
                    className="h-4 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
                  />
                  <div
                    className="h-4 w-11/12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
                  />
                  <div
                    className="h-4 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                    style={{ animationDelay: `${i * 0.1 + 0.6}s` }}
                  />
                </div>

                {/* Button Skeleton */}
                <div
                  className="h-10 w-28 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md mt-4"
                  style={{ animationDelay: `${i * 0.1 + 0.7}s` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
