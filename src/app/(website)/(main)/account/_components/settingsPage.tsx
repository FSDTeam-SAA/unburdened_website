'use client'

import React, { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Loader2, Camera, Eye, EyeOff, LogOut } from 'lucide-react'
import Image from 'next/image'
import {
  useGetUserProfile,
  useUpdateProfile,
  useUpdateProfileImage,
  useChangePassword,
  UpdateProfileData,
} from '@/lib/profileApi'
import { toast } from 'sonner'

export default function SettingsPage() {
  const { data: session } = useSession()
  const accessToken = session?.user?.accessToken || ''

  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile')

  // Profile states
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [bio, setBio] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState('')

  // Password states
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Logout popup state
  const [showLogoutPopup, setShowLogoutPopup] = useState(false)

  const { data: profileData, isLoading: profileLoading } =
    useGetUserProfile(accessToken)

  const { mutate: updateProfile, isPending: isUpdatingProfile } =
    useUpdateProfile(accessToken, {
      onSuccess: () => toast.success('Profile updated successfully ✅'),
      onError: (error: Error) =>
        toast.error(error.message || 'Failed to update profile ❌'),
    })

  const { mutate: updateProfileImage, isPending: isUpdatingImage } =
    useUpdateProfileImage(accessToken, {
      onSuccess: () => {
        toast.success('Profile image updated successfully ✅')
        setImageFile(null)
      },
      onError: (error: Error) =>
        toast.error(error.message || 'Failed to update profile image ❌'),
    })

  const { mutate: changePassword, isPending: isChangingPassword } =
    useChangePassword(accessToken, {
      onSuccess: () => {
        toast.success('Password changed successfully ✅')
        setOldPassword('')
        setNewPassword('')
        setConfirmPassword('')
      },
      onError: (error: Error) =>
        toast.error(error.message || 'Failed to change password ❌'),
    })

  useEffect(() => {
    if (profileData?.data) {
      const profile = profileData.data
      setFullName(profile.fullName || '')
      setEmail(profile.email || '')
      setPhoneNumber(profile.phoneNumber || '')
      setBio(profile.bio || '')
      setProfileImage(profile.profileImage || '')
      setImagePreview(profile.profileImage || '')
    }
  }, [profileData])

  // -----------------------
  // 🖼️ Image Upload Section
  // -----------------------
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (!file.type.startsWith('image/')) {
      toast.error('Please select a valid image file')
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error('Image size should be less than 5MB')
      return
    }

    setImageFile(file)
    const reader = new FileReader()
    reader.onloadend = () => setImagePreview(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handleUploadProfileImage = () => {
    if (!imageFile) {
      toast.error('Please select an image before uploading')
      return
    }

    const formData = new FormData()
    formData.append('profileImage', imageFile)
    updateProfileImage(formData)
  }

  // -----------------------
  // 👤 Profile Update Section
  // -----------------------
  const handleUpdateProfile = () => {
    const profilePayload: UpdateProfileData = { fullName, phoneNumber, bio }
    updateProfile(profilePayload)
  }

  // -----------------------
  // 🔐 Password Update Section
  // -----------------------
  const handleChangePassword = () => {
    if (!oldPassword || !newPassword || !confirmPassword) {
      toast.error('Please fill in all password fields')
      return
    }
    if (newPassword !== confirmPassword) {
      toast.error('New passwords do not match')
      return
    }
    if (newPassword.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    changePassword({ oldPassword, newPassword })
  }

  // Reset
  const handleReset = () => {
    if (activeTab === 'profile') {
      if (profileData?.data) {
        const profile = profileData.data
        setFullName(profile.fullName || '')
        setPhoneNumber(profile.phoneNumber || '')
        setBio(profile.bio || '')
        setImagePreview(profile.profileImage || '')
        setImageFile(null)
      }
    } else {
      setOldPassword('')
      setNewPassword('')
      setConfirmPassword('')
    }
  }

  // Logout Handler
  const handleLogout = async () => {
    setShowLogoutPopup(false)
    await signOut({ callbackUrl: '/' }) // redirect to home after logout
  }

  // Loading State
  if (profileLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-6 mb-5">
      {/* Header */}
      <div className="mb-6 mt-16 lg:mt-20 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#5A8DEE] mb-2">Settings</h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Logout Button */}
        <Button
          onClick={() => setShowLogoutPopup(true)}
          className="flex items-center gap-2 bg-red-700 hover:bg-red-800 text-white"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          {/* Tabs */}
          <div className="flex border-b mb-6">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'profile'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'password'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Change Password
            </button>
          </div>

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              {/* Profile Picture */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg">
                    {imagePreview ? (
                      <Image
                        src={imagePreview}
                        alt="Profile"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400 text-2xl font-bold">
                        {fullName.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <label
                    htmlFor="profile-image"
                    className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors shadow-lg"
                  >
                    <Camera className="w-4 h-4" />
                  </label>
                  <input
                    type="file"
                    id="profile-image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">
                    Your Profile Picture
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    PNG, JPG up to 5MB
                  </p>
                  {/* Upload Image Button */}
                  <Button
                    onClick={handleUploadProfileImage}
                    disabled={isUpdatingImage}
                    className="mt-3"
                  >
                    {isUpdatingImage ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      'Upload Image'
                    )}
                  </Button>
                </div>
              </div>

              {/* Form Fields */}
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
                    value={session?.user?.name || ''}
                    disabled
                    className="mt-1 bg-gray-100 cursor-not-allowed"
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

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleUpdateProfile}
                  disabled={isUpdatingProfile}
                  className="min-w-[140px]"
                >
                  {isUpdatingProfile ? (
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
                  onClick={handleReset}
                  disabled={isUpdatingProfile || isUpdatingImage}
                >
                  Reset
                </Button>
              </div>
            </div>
          )}

          {/* Password Tab */}
          {activeTab === 'password' && (
            <div className="space-y-6 max-w-md">
              {[
                {
                  id: 'oldPassword',
                  label: 'Current Password',
                  value: oldPassword,
                  setValue: setOldPassword,
                  show: showOldPassword,
                  setShow: setShowOldPassword,
                },
                {
                  id: 'newPassword',
                  label: 'New Password',
                  value: newPassword,
                  setValue: setNewPassword,
                  show: showNewPassword,
                  setShow: setShowNewPassword,
                },
                {
                  id: 'confirmPassword',
                  label: 'Confirm Password',
                  value: confirmPassword,
                  setValue: setConfirmPassword,
                  show: showConfirmPassword,
                  setShow: setShowConfirmPassword,
                },
              ].map((field) => (
                <div key={field.id}>
                  <Label htmlFor={field.id}>{field.label}</Label>
                  <div className="relative mt-1">
                    <Input
                      id={field.id}
                      type={field.show ? 'text' : 'password'}
                      value={field.value}
                      onChange={(e) => field.setValue(e.target.value)}
                      placeholder={`Enter ${field.label.toLowerCase()}`}
                    />
                    <button
                      type="button"
                      onClick={() => field.setShow(!field.show)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {field.show ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-4">
                <Button
                  onClick={handleChangePassword}
                  disabled={isChangingPassword}
                  className="min-w-[140px]"
                >
                  {isChangingPassword ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    'Change Password'
                  )}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  disabled={isChangingPassword}
                >
                  Reset
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* 🔴 Logout Confirmation Popup */}
      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-2">Confirm Logout</h3>
            <p className="text-gray-600 mb-5">
              Are you sure you want to log out from your account?
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </Button>
              <Button
                className="bg-red-700 hover:bg-red-800"
                onClick={handleLogout}
              >
                Yes, Logout
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
