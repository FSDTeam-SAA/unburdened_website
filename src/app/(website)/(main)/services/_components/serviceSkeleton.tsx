'use client'

export function ServiceSkeleton() {
  return (
    <section className="px-4 py-16 md:py-20 lg:py-24 max-w-7xl mx-auto">
      {/* Header Skeleton */}
      <div className="space-y-4 mb-12 text-center md:text-left">
        <div className="inline-block space-y-2">
          <div className="h-10 w-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg" />
          <div className="h-1 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full" />
        </div>
        <div className="h-5 w-full max-w-3xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md" />
      </div>

      {/* Services Grid Skeleton */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col md:flex-row gap-6 bg-white overflow-hidden relative"
          >
            {/* Shimmer overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer-slow" />

            {/* Image Skeleton */}
            <div
              className="w-full md:w-1/2 h-60 rounded-lg bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100/50 to-gray-300/50" />
            </div>

            {/* Content Skeleton */}
            <div className="flex-1 space-y-4 py-2 relative">
              {/* Title */}
              <div
                className="h-6 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                style={{ animationDelay: `${i * 0.1 + 0.1}s` }}
              />

              {/* Description lines */}
              <div className="space-y-3 pt-2">
                <div
                  className="h-4 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                  style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
                />
                <div
                  className="h-4 w-11/12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                  style={{ animationDelay: `${i * 0.1 + 0.3}s` }}
                />
                <div
                  className="h-4 w-4/5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-md"
                  style={{ animationDelay: `${i * 0.1 + 0.4}s` }}
                />
              </div>

              {/* Button Skeleton */}
              <div
                className="h-11 w-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg mt-6"
                style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
