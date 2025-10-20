import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

interface HeroBannerProps {
  image: string
  height?: number
  quote?: string
  buttonText?: string
  onButtonClick?: () => void
  title?: string
  description?: string
  writer?: string
}

export function HeroBanner({
  image,
  height = 380,
  quote,
  buttonText,
  title,
  writer,
  description,
}: HeroBannerProps) {
  return (
    <div className="container mx-auto">
      <div
        className="relative rounded-[20px] overflow-hidden flex items-center justify-center"
        style={{
          height: `${height}px`,
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-3xl">
          {/* Quote variant */}
          {quote && (
            <>
              <div className="text-white text-lg md:text-2xl font-medium mb-6 leading-relaxed ">
                {quote}
                <p className="font-light text-base">{writer}</p>
              </div>
              {buttonText && (
                <Link href={'/contact'}>
                  <Button className="px-6 md:px-16">{buttonText}</Button>
                </Link>
              )}
            </>
          )}

          {/* Title & Description variant */}
          {title && (
            <>
              <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
                {title}
              </h1>
              {description && (
                <p className="text-white text-lg md:text-xl font-light leading-relaxed">
                  {description}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
