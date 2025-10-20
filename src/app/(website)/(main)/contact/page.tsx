import { ContactForm } from '@/components/contactForm'
import { HeroBanner } from '@/components/shared/subBanner'
import Image from 'next/image'

const page = () => {
  return (
    <section>
      {/* sub section banner */}
      <div className="pt-20 md:pt-24 lg:pt-28">
        <HeroBanner
          image="/images/contact-banner.jpg"
          height={272}
          title="Ask David"
          description={`Have a question or ready to take the next step? Send me a message and I'll personally get back to you 
within 48 hours.`}
        />
      </div>
      <section className="py-16 md:py-20 lg:py-24 px-4 bg-white">
        <div className="container mx-auto bg-white rounded-2xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-2">
          {/* Left: Image */}
          <div className="hidden md:block relative h-[400px] md:h-auto">
            <Image
              src={'/images/contact.jpg'}
              alt={'contact-user'}
              fill
              className="object-cover rounded-l-2xl"
            />
            <div className="absolute inset-0 bg-black/25 rounded-l-2xl" />
          </div>

          {/* Right: Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-semibold mb-2 text-[#5A8DEE]">
              Get in Touch
            </h2>
            <p className="text-[#6C757D] mb-8 text-sm md:text-base">
              Our friendly team would love to hear from you.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </section>
  )
}

export default page
