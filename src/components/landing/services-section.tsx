'use client'

import { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useServicesStore } from '@/store/useServiceStore'
import { fetchServices } from '@/lib/apiHooks/servicesApi'
import { ServiceSkeleton } from './_components/service-skeleton'
import { ErrorState } from './_components/error-state'
import { ServiceCard } from './service-card'
import { PaginationControls } from '../ui/pagination-controls'

export function ServicesSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const { setData, setPagination, data: storeData } = useServicesStore()

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['services', currentPage],
    queryFn: () => fetchServices(currentPage),
    placeholderData: (previousData) => previousData,
  })

  useEffect(() => {
    if (data?.services) {
      setData(data.services)
      setPagination(data.pagination)
    }
  }, [data, setData, setPagination])

  if (isLoading) {
    return (
      <section className="py-16 md:py-20 lg:py-24 px-3 bg-white text-center">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold mb-3">
            My <span className="text-[#5A8DEE]">Services</span>
          </h2>
          <p className="text-[#616161] text-sm mb-10 max-w-2xl mx-auto">
            Loading available services...
          </p>
          <ServiceSkeleton />
        </div>
      </section>
    )
  }

  if (isError) {
    return (
      <section className="py-16 md:py-20 lg:py-24 px-3 bg-white text-center">
        <ErrorState
          message="Failed to load services"
          onRetry={() => refetch()}
        />
      </section>
    )
  }

  const services = storeData || []
  const pagination = data?.pagination

  return (
    <section className="py-16 md:py-20 lg:py-24 px-3 bg-white text-center">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold mb-3">
          My <span className="text-[#5A8DEE]">Services</span>
        </h2>
        <p className="text-[#616161] text-sm mb-10 max-w-2xl mx-auto">
          A simple, step-by-step process to help families find, connect with,
          and book trusted services with ease.
        </p>

        <div className="grid grid-cols-1 mt-12 md:mt-16 lg:mt-20 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
          {services.map((service) => (
            <ServiceCard
              key={service._id}
              title={service.serviceName}
              description={service.description}
              image={service.uploadPhoto || '/images/placeholder.jpg'}
            />
          ))}
        </div>

        {pagination?.totalPages && pagination.totalPages > 1 && (
          <div className="mt-12 md:mt-16 lg:mt-20">
            <PaginationControls
              currentPage={pagination.currentPage}
              totalPages={pagination.totalPages}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </section>
  )
}
