// import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/layout/navbar'

export default async function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="">
      <Navbar />

      <div className="min-h-[calc(100vh-100px)]">{children}</div>
      {/* <Footer /> */}
    </div>
  )
}
