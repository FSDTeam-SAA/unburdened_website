'use client'

import React from 'react'
import { Heart, Brain, Target, TrendingUp } from 'lucide-react'

const values = [
  {
    title: 'Mindful Presence',
    description:
      'We believe in the transformative power of being fully present — creating stillness in the mind, openness in the heart, and space for genuine connection, awareness, and insight in every moment.',
    icon: <Brain className="w-6 h-6 text-[#5A8DEE]" />,
  },
  {
    title: 'Compassionate Honesty',
    description:
      'We meet every challenge with kindness and truth — holding space for vulnerability while encouraging the courage to face ourselves honestly, knowing real growth blossoms from both compassion and accountability.',
    icon: <Heart className="w-6 h-6 text-[#5A8DEE]" />,
  },
  {
    title: 'Empowered Action',
    description:
      'We believe in turning awareness into movement — taking practical, intentional steps that align with our values and lead to lasting transformation, one mindful action at a time.',
    icon: <Target className="w-6 h-6 text-[#5A8DEE]" />,
  },
  {
    title: 'Continuous Growth',
    description:
      'We honor the journey of becoming — embracing lifelong learning, curiosity, and self-discovery, knowing that unburdening the mind is a continual process of deepening awareness and renewed evolution.',
    icon: <TrendingUp className="w-6 h-6 text-[#5A8DEE]" />,
  },
]

export function ValuesSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28 px-4 md:px-10 bg-[#F9FAFB]">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Our <span className="text-[#5A8DEE]">Values</span>
        </h2>
        <p className="text-[#68706A] text-sm md:text-base mb-12 md:mb-16  mx-auto">
          Guided by mindfulness, compassion, and growth, our values inspire
          clarity, purpose, and emotional freedom in all we do.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-start gap-4">
                {/* ICON */}
                <div className="bg-[#E8F0FE] p-3 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>

                {/* TEXT */}
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-[#616161] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
