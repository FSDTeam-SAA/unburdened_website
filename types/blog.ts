// types/blog.ts
export interface Blog {
  _id: string
  title: string
  readTime: string
  description: string
  uploadPhoto: string
  featured: boolean
  status: 'Draft' | 'Published' | 'Pending'
  publicId: string | null
  cloudinaryId: string | null
  fileType: string
  mimeType: string | null
  fileSize: number | null
  uploadedAt: string | null
  createdAt: string
  updatedAt: string
}

export interface BlogsResponse {
  success: boolean
  pagination: {
    currentPage: number
    totalPages: number
    totalData: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
  blogs: Blog[]
}
