'use client'

import { useState } from 'react'
import ServiceCard from './serviceCard'

const demoServices = [
  {
    id: 1,
    title: 'One-on-One Coaching',
    description:
      'Personalized coaching sessions designed to help you identify mental barriers, develop practical strategies, and create sustainable change in your life.',
    features: [
      'Initial 90-minute deep dive session',
      'Regular 60-minute follow-up sessions',
      'Customized resources and exercises',
      'Email support between sessions',
    ],
    image: '/images/services/services-1.jpg',
  },
  {
    id: 2,
    title: 'Group Workshops',
    description:
      'Interactive workshops for teams or organizations focused on mindfulness, stress reduction, and communication. Available both in-person and virtually.',
    features: [
      'Half-day or full-day sessions',
      'Customized to group needs',
      'Practical tools and takeaways',
      'Follow-up resources and support',
    ],
    image: '/images/services/services-2.jpg',
  },
  {
    id: 3,
    title: 'Writing & Resources',
    description:
      'Thoughtful articles, essays, and practical guides to inspire reflection and provide guidance on your journey toward a more balanced life.',
    features: [
      'Weekly newsletter',
      'In-depth guides and workbooks',
      'Practical exercises and prompts',
      'Recommended reading lists',
    ],
    image: '/images/services/services-3.jpg',
  },
  {
    id: 4,
    title: 'Public Speaking',
    description:
      'Engaging talks and presentations on mindfulness, intentional living, and creating positive change for events and organizations.',
    features: [
      'Keynote presentations',
      'Panel discussions',
      'Interactive Q&A sessions',
      'Virtual and in-person options',
    ],
    image: '/images/services/services-4.jpg',
  },
]

export default function ServicesSection() {
  const [services] = useState(demoServices)

  return (
    <section className="px-4 py-16 md:py-20 lg:py-24">
      <div className=" space-y-3.5 mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5A8DEE]">
          Services
        </h2>
        <p className="text-[#616161] mt-2 ">
          Empowering you with mindful coaching, workshops, and tools designed to
          create clarity, balance, and meaningful transformation in everyday
          life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            features={service.features}
            image={service.image}
          />
        ))}
      </div>
    </section>
  )
}
