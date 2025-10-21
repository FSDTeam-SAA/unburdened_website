// import SpotifySection from './spotify-section'

import { PodcastSection } from '@/components/shared/podcasts/podcastSection'
// import YoutubeSection from './_components/youtubeSection'

export default function PodcastsPage() {
  return (
    <div className="">
      {/* youtube videos */}
      <PodcastSection
        titleFirst="YouTube"
        titleHighlight="Videos"
        highlightColor="#5A8DEE"
        description=""
      />

      {/* spotify videos */}
      <PodcastSection
        titleFirst="Spotify"
        titleHighlight="Audios"
        highlightColor="#5A8DEE"
        description=""
      />
    </div>
  )
}
