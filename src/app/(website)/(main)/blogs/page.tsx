'use client'

import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { HeroBanner } from '@/components/shared/subBanner'
import AllBlogSection from './_components/allBlogsSection'
import RecentBlogsSection from './_components/recentBlogsSection'
import { BlogsResponse } from '../../../../../types/blog'
import { BlogsPageSkeleton } from './_components/blogsPageSkeleton'
import { BlogsPageError } from './_components/blogsPageError'

// Fetch function (takes page as param)
async function fetchBlogs(page: number): Promise<BlogsResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?page=${page}&limit=10`,
    {
      cache: 'no-store',
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch blogs')
  }

  return res.json()
}

export default function BlogsPage() {
  const [page, setPage] = useState(1)

  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['blogs', page],
    queryFn: () => fetchBlogs(page),
    placeholderData: (previousData) => previousData, // smooth transition between pages
  })

  if (isLoading) return <BlogsPageSkeleton />
  if (isError || !data?.success)
    return <BlogsPageError onRetry={() => refetch()} />

  const blogs = data.blogs || []
  const pagination = data.pagination || {}

  // First few for recent section only on first page
  // const recentBlogs = page === 1 ? blogs.slice(0, 3) : []

  return (
    <>
      <div className="pt-20 md:pt-24 lg:pt-32">
        <HeroBanner
          image="/images/service-banner.jpg"
          height={272}
          title="Insights, Tips & Guidance for a Clear Mind"
          description="Explore practical advice, expert strategies, and real-life stories to help you reduce mental clutter and live with focus and calm."
        />
      </div>
      {/* Recent blogs (only on first page) */}(
      <div className="mt-12">
        <RecentBlogsSection blogs={blogs} />
      </div>
      ){/* blogs sub banner */}
      <div className="my-12 md:my-16 lg:my-20">
        <HeroBanner
          image="/images/about-sub.png"
          height={336}
          quote="We don't have to carry everything. Learning what to set down may be the most important skill we can develop."
          writer="- David Burden -"
        />
      </div>
      {/* All Blogs Section with pagination */}
      <AllBlogSection
        blogs={blogs}
        pagination={pagination}
        currentPage={page}
        onPageChange={setPage}
        isFetching={isFetching}
      />
    </>
  )
}
