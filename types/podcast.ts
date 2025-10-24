// types/podcast.ts
export interface Podcast {
  _id: string
  title: string
  mediaName: string
  description: string
  uploadThumbnail: string
  linkName: string
  linkUrl: string
  publicId: string | null
  cloudinaryId: string | null
  fileType: string
  mimeType: string | null
  fileSize: number | null
  uploadedAt: string | null
  createdAt: string
  updatedAt: string
  podcastCreatorName: string | null
}

export interface PodcastsResponse {
  status: boolean
  message: string
  data: {
    podcasts: Podcast[]
    pagination: {
      currentPage: number
      totalPages: number
      totalData: number
      hasNextPage: boolean
      hasPrevPage: boolean
    }
  }
}
