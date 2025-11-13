"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className=" py-12 md:py-16 px-4 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-14">
        {/* LEFT IMAGES AREA */}
        <div className="relative flex flex-col items-center">
          {/* TOP ROW — TWO IMAGES SIDE BY SIDE */}
          <div className="flex flex-coljustify-center items-center gap-5 mb-5">
            {/* Left Image */}
            <div className="relative w-[170px] h-[110px] sm:w-[260px] sm:h-[180px] md:w-[300px] md:h-[200px] rounded-2xl overflow-hidden">
              <div className="absolute -top-4 -left-4 w-16 h-16 md:w-20 md:h-20 bg-[#558BFF] rounded-md z-[-1]" />
              <Image
                src="/images/about-img1.jpg"
                alt="Group session"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Right Image */}
            <div className="relative w-[160px] h-[120px] sm:w-[260px] sm:h-[180px] md:w-[320px] md:h-[230px] rounded-2xl overflow-hidden">
              <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-24 bg-[#558BFF] rounded-md z-[-1]" />
              <Image
                src="/images/aboutimg2.jpg"
                alt="Therapy discussion"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* BOTTOM IMAGE — CENTERED */}
          <div className="relative w-[300px] h-[200px] md:w-[450px] md:h-[310px] rounded-2xl overflow-hidden">
            <Image
              src="/images/aboutimg3.jpg"
              alt="Coaching session"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* RIGHT TEXT AREA */}
        <div className="space-y-4 text-center md:text-left">
          <p className="text-base font-medium text-[#1C2A39]">About </p>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold text-gray-800 leading-snug">
            {" "}
            About The <span className="text-[#558BFF]">
              UnBurdened Mind
            </span>{" "}
            {/* Your Mental Health */}
          </h2>
          <p className="text-gray-600 leading-[1.8b n] text-sm md:text-base">
            I’m{" "}
            <span className="text-lg font-semibold text-gray-800">
              David Burden
            </span>
            , an Organizational Consultant with over two decades of experience
            helping people and organizations think clearly, adapt quickly, and
            lead effectively. I’ve worked with major government agencies
            including{" "}
            <span className="text-lg font-semibold text-gray-800">
              the State of California, County of Los Angeles Department of
              Health Services, and UCSD Medical Center
            </span>
            , among others — addressing complex human relations issues,
            regulatory readiness, onboarding, mentoring, and continuous
            improvement. In today’s evolving workplace, I also help teams
            navigate challenges of remote work, from connection and development
            to recognition and growth. Through{" "}
            <span className="text-lg font-semibold text-gray-800">
              mindful coaching, workshops, writing, and The UnBurdened Mind
              Podcast
            </span>
            , I share tools and insights to help people build clarity, balance,
            and resilience. Lasting leadership starts within — because how we
            think shapes how we lead, adapt, and connect.
            <br />
            An UnBurdened Mind isn’t a quiet mind — it’s an agile one. It’s a
            mind that knows how to reset, reframe, and respond. It’s where
            creativity, adaptability, and collaboration thrive — and these are
            all learnable skills. Let’s build that together.{" "}
            <span className="text-lg font-semibold text-gray-800">
              Call us today
            </span>
            .<span></span>
          </p>

          <Link href="/contact">
            <button className="bg-[#558BFF] font-medium text-white px-16 md:px-24 py-2 rounded-md text-base hover:bg-[#4575e6] transition-all">
              Ask David
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
