'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

interface ContentSectionProps {
  image: string
  imageAlt?: string
  imageHeight?: string | number
  isRight?: boolean
  title: string
  titleHighlight?: string
  subtitle?: string
  content: string[]
  buttonText?: string
  buttonLink?: string
  onButtonClick?: () => void
}

export function ContentSection({
  image,
  imageAlt = 'Section image',
  imageHeight = 'h-64 md:h-80 lg:h-96',
  isRight = false,
  title,
  titleHighlight,
  subtitle,
  content,
  buttonText,
  buttonLink,
  onButtonClick,
}: ContentSectionProps) {
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else if (buttonLink) {
      window.open(buttonLink, '_blank')
    }
  }

  // Handle both number and string for imageHeight
  const getHeightClass = () => {
    if (typeof imageHeight === 'number') {
      // Convert number to responsive classes
      const mobileHeight = Math.floor(imageHeight * 0.4)
      const tabletHeight = Math.floor(imageHeight * 0.65)
      return `h-[${mobileHeight}px] md:h-[${tabletHeight}px] lg:h-[${imageHeight}px]`
    }
    return imageHeight
  }

  return (
    <section className="py-[72px] lg:py-24 px-4 md:px-10 bg-white">
      <div className="container mx-auto">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            isRight ? 'lg:grid-flow-dense' : ''
          }`}
        >
          {/* Image */}
          <div
            className={`relative rounded-2xl overflow-hidden shadow-lg ${getHeightClass()} ${
              isRight ? 'lg:col-start-2' : ''
            }`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className={isRight ? 'lg:col-start-1 lg:row-start-1' : ''}>
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {title}{' '}
              {titleHighlight && (
                <span className="text-[#5A8DEE]">{titleHighlight}</span>
              )}
            </h2>

            {/* Subtitle */}
            {subtitle && (
              <p className="text-[#68706A] text-sm md:text-base mb-6">
                {subtitle}
              </p>
            )}

            {/* Content Paragraphs */}
            <div className="space-y-4 mt-5">
              {content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[#616161] text-sm md:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Button (Optional) */}
            {buttonText && (
              <Link href={'/contact'}>
                <Button
                  onClick={handleButtonClick}
                  className="w-full mt-8 md:mt-12 py-3"
                >
                  {buttonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
