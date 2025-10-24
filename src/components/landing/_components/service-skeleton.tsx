'use client'

import { Skeleton } from '@/components/ui/skeleton'

export function ServiceSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="rounded-xl border shadow-sm p-6 flex flex-col items-center space-y-4 bg-white animate-pulse"
        >
          {/* Circular image placeholder with shimmer */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />

          {/* Title placeholder with shimmer */}
          <div className="h-5 w-32 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />

          {/* Description lines with different widths and shimmer */}
          <div className="flex flex-col items-center space-y-2 w-full">
            <div className="h-3 w-3/4 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer" />
            <div
              className="h-3 w-2/3 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"
              style={{ animationDelay: '0.1s' }}
            />
            <div
              className="h-3 w-1/2 rounded-md bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
