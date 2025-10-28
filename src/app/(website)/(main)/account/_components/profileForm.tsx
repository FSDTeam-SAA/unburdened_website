// ==================== FILE: _components/ProfileForm.tsx ====================
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'

interface ProfileFormProps {
  fullName: string
  setFullName: (value: string) => void
  username: string
  setUsername: (value: string) => void
  email: string
  phoneNumber: string
  setPhoneNumber: (value: string) => void
  bio: string
  setBio: (value: string) => void
  isUpdating: boolean
  onSubmit: () => void
  onReset: () => void
}

export function ProfileForm({
  fullName,
  setFullName,
  setUsername,
  email,
  phoneNumber,
  setPhoneNumber,
  bio,
  setBio,
  isUpdating,
  onSubmit,
  onReset,
}: ProfileFormProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            value={email}
            disabled
            className="mt-1 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={fullName.split(' ').join('').toLowerCase()}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            readOnly
            disabled
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Write your bio here"
          className="mt-1 min-h-[100px]"
        />
      </div>

      <div className="flex gap-3 pt-4">
        <Button
          onClick={onSubmit}
          disabled={isUpdating}
          className="min-w-[140px]"
        >
          {isUpdating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Updating...
            </>
          ) : (
            'Update Profile'
          )}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={onReset}
          disabled={isUpdating}
        >
          Reset
        </Button>
      </div>
    </div>
  )
}
