'use client'

import { Button } from '@/components/ui/button'

interface ErrorStateProps {
  message?: string
  onRetry?: () => void
}

export function ErrorState({
  message = 'Something went wrong',
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="text-center py-10">
      <p className="text-red-500 mb-4">{message}</p>
      {onRetry && (
        <Button
          onClick={onRetry}
          variant="outline"
          className="text-blue-500 border-blue-400"
        >
          Retry
        </Button>
      )}
    </div>
  )
}
