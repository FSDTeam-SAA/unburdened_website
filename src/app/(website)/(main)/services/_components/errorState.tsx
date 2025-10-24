'use client'

import { AlertTriangle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorStateProps {
  onRetry?: () => void
}

export function ErrorState({ onRetry }: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-24 md:py-32 px-4">
      {/* Animated Error Icon */}
      <div className="relative">
        <div className="absolute inset-0 bg-red-100 rounded-full blur-xl opacity-50 animate-pulse" />
        <div className="relative bg-red-50 p-6 rounded-full">
          <AlertTriangle className="w-16 h-16 text-red-500 animate-bounce" />
        </div>
      </div>

      {/* Error Message */}
      <div className="mt-8 text-center space-y-2">
        <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
          Oops! Something went wrong
        </h3>
        <p className="text-gray-600 text-sm md:text-base max-w-md">
          We couldn&apos;t load the services right now. Please check your
          connection and try again.
        </p>
      </div>

      {/* Retry Button */}
      <Button
        onClick={onRetry || (() => window.location.reload())}
        className="mt-6 bg-gradient-to-r from-[#5A8DEE] to-[#4A7DD9] hover:from-[#4A7DD9] hover:to-[#3A6DC9] text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </Button>

      {/* Help Text */}
      <p className="mt-6 text-xs text-gray-400">
        Still having issues? Contact our support team
      </p>
    </div>
  )
}
