// import Footer from '@/components/Footer/Footer'
import { Footer } from '@/components/layout/footer'
import Navbar from '@/components/layout/navbar'

export default async function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="" suppressHydrationWarning>
      <Navbar />

      <div className="min-h-[calc(100vh-100px)]">{children}</div>
      <Footer />
    </div>
  )
}
