"use client";

import { ContentSection } from "@/components/about/contentSection";
import { ValuesSection } from "@/components/about/valuesSection";
import { HeroBanner } from "@/components/shared/subBanner";
import React from "react";

const Page = () => {
  return (
    <div>
      {/* SECTION 1 — Meet David */}
      <ContentSection
        image="/david-profile.jpg"
        imageHeight="h-72 md:h-96 lg:h-[750px]"
        isRight={false}
        title="Meet"
        titleHighlight="David"
        subtitle="Consultant & Founder, The UnBurdened Mind"
        content={[
          "My journey to becoming a personal coach began long before I ever called it that. For over a decade, I thrived in the fast-paced world of corporate leadership — leading teams, driving results, and chasing the next achievement. Yet beneath the success, I noticed something quietly unfold: talented, passionate people held back by invisible weights — stress, self-doubt, perfectionism, and the belief that rest was weakness.",
          "After years of pushing forward, I hit a wall — burnout. It forced me to stop, to question everything I thought I knew about success, ambition, and fulfillment. In that stillness, I found the space and courage to slow down. I began to rebuild not just my routine, but my relationship with myself. What I discovered changed everything: clarity isn't something we chase — it’s something we uncover when we release what no longer serves us.",
          "That realization became the foundation of The UnBurdened Mind — a space where awareness meets transformation. Today, I help others navigate the same challenges that once held me back: overwhelm, emotional residue, and the feeling of being stuck despite doing everything right. Drawing from my certifications in Mindfulness Coaching, Positive Psychology, and Cognitive Behavioral Techniques, I blend proven strategies with deep empathy and lived experience.",
          "Whether I’m guiding one-on-one sessions, facilitating workshops, or simply listening, my purpose remains the same — to help you untangle the mess, rediscover your strength, and create space for clarity, purpose, and peace. Because freedom doesn’t come from adding more to your life — it comes from learning to let go.",
        ]}
        buttonText="Book a Session"
      />

      {/* SECTION 2 — Our Mission Is Your Vision */}
      <ContentSection
        image="/mind-about.png"
        imageHeight="h-64 md:h-80 lg:h-[450px]"
        isRight={true}
        title="Our Mission"
        titleHighlight="Is Your Vision"
        content={[
          "When life feels uncertain, vision is often the first thing we lose sight of — even though it’s the compass we need most. At The UnBurdened Mind, our mission is to help you reclaim that vision — the one that cuts through confusion, fear, and self-doubt, reconnecting you to your sense of purpose, clarity, and calm.",
          "We believe every person deserves a mind that works for them, not against them — a mind unburdened by worry or the noise of constant demand. In a world that moves faster every day, we create space to pause, reflect, and reset.",
          "Through mindful coaching, honest conversation, and practical tools for awareness and self-leadership, we help you recognize what’s holding you back — and release it. This isn’t about fixing what’s broken. It’s about rediscovering your power, your perspective, and the possibility that’s always been there.",
          "The UnBurdened Mind isn’t just a name — it’s a philosophy and a practice. A commitment to living with clarity, emotional agility, and grounded confidence. Because peace and purpose aren’t things you wait for — they’re things you build, one conscious choice at a time.",
          "Here, you’ll find the tools, insight, and support to move forward lighter, stronger, and with a renewed sense of direction. Your mind, unburdened. Your vision, restored.",
        ]}
      />

      {/* About Sub Banner */}
      <HeroBanner
        image="/images/about-sub.png"
        height={336}
        quote={`We don't have to carry everything. Learning what to set down may be the most 
important skill we can develop.`}
        writer="- David Burden -"
      />

      {/* Values Section */}
      <ValuesSection />
    </div>
  );
};

export default Page;
