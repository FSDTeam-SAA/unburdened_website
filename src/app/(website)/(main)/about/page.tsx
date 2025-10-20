import { ContentSection } from '@/components/about/contentSection'
import { ValuesSection } from '@/components/about/valuesSection'
import { HeroBanner } from '@/components/shared/subBanner'
import React from 'react'

const Page = () => {
  return (
    <div>
      {/* SECTION 1 */}
      <ContentSection
        image="/images/home-right.jpg"
        imageHeight="h-72 md:h-96 lg:h-[750px]"
        isRight={false}
        title="Meet"
        titleHighlight="David"
        subtitle="Consultant"
        content={[
          "My journey to becoming a personal coach began long before I ever called it that. For over a decade, I thrived in the 'fast-paced world of corporate leadership — leading teams, driving results, and chasing the next achievement. Yet beneath the success, I noticed something quietly unfold: talented, passionate people held back by invisible weights — stress, self-doubt, perfectionism, and the silent belief that rest was weakness.",
          "After years of pushing forward, I hit a wall — burnout. It forced me to stop, to question everything I thought I knew about success, ambition, and fulfillment. In that stillness, I found the space and courage to slow down. I began to rebuild not just my routine, but my relationship with myself. What I discovered changed everything: clarity isn't something we chase — it is something we uncover when we release what no longer serves us.",
          "That realization became the foundation of The Unburdened Mind — a space where awareness meets transformation. Today, I help others navigate the same challenges that once held me back: the overwhelming, the emotional residue, the feeling of being stuck despite 'doing everything right.' Drawing from my certifications in Mindfulness Coaching, Positive Psychology, and Cognitive Behavioral Techniques, I blend proven strategies with deep empathy and lived experience.",
          "Whether I'm guiding one-on-one sessions, facilitating workshops, or simply listening, my purpose is the same — to help you untangle the mess, rediscover your strength, and create space for clarity, purpose, and peace. Because freedom doesn't come from adding more to your life — it comes from learning to let go.",
        ]}
        buttonText="Book a Session"
      />

      {/* SECTION 2 */}
      <ContentSection
        image="/images/mission.jpg"
        imageHeight="h-64 md:h-80 lg:h-[450px]"
        isRight={true}
        title="Our"
        titleHighlight="Mission"
        content={[
          "At The Unburdened Mind, we believe that every person has the right to experience a life of clarity, calm, and authentic purpose — a life untangled by the weight of doubt, fear, and the narratives that no longer serve them. We understand that the modern world moves fast, often leaving little room to pause, breathe, or simply be. That's why our mission is simple yet deeply human: to help you slow down, look within, and reconnect with the parts of yourself that have been buried beneath the noise.",
          "Through mindful guidance, compassionate coaching, and practical tools for awareness, we empower you to recognize what's holding you back — and gently release it. This is not about fixing who you are. It's about remembering who you've always been beneath the layers of expectation, worry, and self-criticism.",
          "The Unburdened Mind is more than a name — it's a philosophy, a process, and a promise. A reminder that peace isn't something you chase. It's something you create when you make space for what truly matters. Here, you'll find support, insight, and the tools to move forward with renewed clarity, grounded confidence, and the freedom to live with lightness and intention.",
        ]}
      />

      {/* about sub banner */}
      <HeroBanner
        image="/images/about-sub.png"
        height={336}
        quote={`We don't have to carry everything. Learning what to set down may be the most 
important skill we can develop.`}
        writer="- David Burden -"
      />

      {/* values section */}
      <ValuesSection />
    </div>
  )
}

export default Page
