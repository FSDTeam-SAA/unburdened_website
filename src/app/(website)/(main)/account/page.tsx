'use client'

import React from 'react'
import SettingsPage from './_components/settingsPage'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'

const Page = () => {
  const cu = useSession()
  const accessToken = cu?.data?.user?.accessToken || ''

  if (!accessToken) {
    redirect('/signin')
  }

  return (
    <div>
      <SettingsPage />
    </div>
  )
}

export default Page
