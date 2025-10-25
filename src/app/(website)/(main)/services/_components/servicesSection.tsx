'use client'

import { useQuery } from '@tanstack/react-query'
import ServiceCard from './serviceCard'
import { ServiceSkeleton } from './serviceSkeleton'
import { ErrorState } from './errorState'

interface Service {
  _id: string
  serviceName: string
  sessionInfo: string
  description: string
  uploadPhoto: string
}

export default function ServicesSection() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/services?limit=40`
      )
      if (!res.ok) throw new Error('Failed to fetch services')
      return res.json()
    },
  })

  if (isLoading) return <ServiceSkeleton />
  if (isError || !data?.success) return <ErrorState />

  const services = data.services || []

  return (
    <section className="px-4 py-16 md:py-20 lg:py-24">
      <div className="space-y-3.5 mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#5A8DEE]">
          Services
        </h2>
        <p className="text-[#616161] mt-2">
          Empowering you with mindful coaching, workshops, and tools designed to
          create clarity, balance, and meaningful transformation in everyday
          life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service: Service) => (
          <ServiceCard
            key={service._id}
            title={service.serviceName}
            description={service.description}
            image={service.uploadPhoto}
            features={[service.sessionInfo]}
          />
        ))}
      </div>
    </section>
  )
}
