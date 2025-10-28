'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import { useSession } from 'next-auth/react'

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  // Dummy logged-in state
  const cu = useSession()
  console.log('current user session:', cu)

  const isLoggedIn = cu?.status === 'authenticated'
  const userImage = cu?.data?.user?.profileImage || '/user-avatar.png'

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Services', href: '/services' },
    { name: 'Podcast', href: '/podcast' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="bg-[#719cec14] backdrop-blur-3xl fixed w-full z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <Link href={'/'}>
            <div className="flex-shrink-0 text-[#5A8DEE] font-semibold text-lg md:text-xl font-sans">
              The <span className="font-bold text-2xl">Unburdened</span> Mind
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#5A8DEE] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-[#5A8DEE] font-medium transition-all duration-200 hover:opacity-80 ${
                  pathname === link.href ? 'after:w-full' : 'after:w-0'
                } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#5A8DEE] after:transition-all after:duration-300 hover:after:w-full`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right - Buttons */}
          <div className="hidden md:flex items-center gap-2 space-x-3">
            <Link href={'/contact'}>
              <Button
                variant="outline"
                className="border border-[#5A8DEE] px-8 bg-transparent text-[#5A8DEE] hover:bg-[#5A8DEE] hover:text-white transition-all duration-200"
              >
                Ask David
              </Button>
            </Link>

            {isLoggedIn ? (
              <Link className="cursor-pointer" href={'/account'}>
                <div className="relative w-10 h-10">
                  <Image
                    src={userImage}
                    alt="User Avatar"
                    fill
                    sizes="40px"
                    className="rounded-full object-cover border-2 border-[#5A8DEE]"
                  />
                </div>
              </Link>
            ) : (
              <Button asChild variant="default" className="px-10">
                <Link href="/signin">Login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {menuOpen && (
        <div className="md:hidden bg-[#e6e6eb14] backdrop-blur-md border-t border-[#5A8DEE20] px-4 pb-4 space-y-2 animate-fadeIn">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-[#5A8DEE] font-medium py-2 border-b border-[#5A8DEE20] ${
                pathname === link.href ? 'underline underline-offset-4' : ''
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Actions */}
          <div className="pt-2 flex flex-col space-y-2">
            <Link href={'/contact'}>
              <Button variant="default" className="w-full">
                Ask David
              </Button>
            </Link>

            {isLoggedIn ? (
              <Link className="cursor-pointer" href={'/account'}>
                <div className="flex items-center space-x-2 mt-2 ">
                  <div className="relative w-10 h-10">
                    <Image
                      src={userImage}
                      alt="User Avatar"
                      fill
                      className="rounded-full object-cover border-2 border-[#5A8DEE]"
                    />
                  </div>
                  <span className="text-[#5A8DEE] font-medium">Profile</span>
                </div>
              </Link>
            ) : (
              <Button asChild variant="secondary" className="w-full">
                <Link href="/signin">Login</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
