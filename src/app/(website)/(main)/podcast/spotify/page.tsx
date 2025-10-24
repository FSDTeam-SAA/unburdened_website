import { PodcastSection } from '@/components/shared/podcasts/podcastSection'
// import YoutubeSection from '../_components/youtubeSection'

export default function SpotifyPage() {
  return (
    <div>
      {/* youtube videos */}
      <PodcastSection
        titleFirst="Spotify"
        titleHighlight="Audios"
        highlightColor="#5A8DEE"
        description="Listen to our audio podcasts on Spotify"
        mediaType="Spotify Audios"
      />
    </div>
  )
}
