'use client'

import Image from 'next/image'

export default function YoutubeSection() {
  const youtubeVideos = [
    { id: 1, title: 'Conversation 1', thumbnail: '/images/video1.jpg' },
    { id: 2, title: 'Conversation 2', thumbnail: '/images/video2.jpg' },
  ]

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">YouTube Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {youtubeVideos.map((video) => (
          <div
            key={video.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4">
              <h3 className="text-gray-800 font-semibold">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
