'use client'

import React, { useState, useEffect } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { Card, CardContent } from '@/components/ui/card'
import { Loader2, LogOut } from 'lucide-react'
import {
  useGetUserProfile,
  useUpdateProfile,
  useUpdateProfileImage,
  useChangePassword,
  UpdateProfileData,
} from '@/lib/profileApi'
import { toast } from 'sonner'
import { ProfileImageUpload } from './profileImageUpload'
import { ProfileForm } from './profileForm'
import { PasswordForm } from './passwordForm'
import { Button } from '@/components/ui/button'

export default function SettingsPage() {
  const { data: session, update: updateSession } = useSession()
  const accessToken = session?.user?.accessToken || ''

  const [activeTab, setActiveTab] = useState<'profile' | 'password'>('profile')

  // Profile states
  const [fullName, setFullName] = useState('')
  const [username, setUsername] = useState('')
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

  const {
    data: profileData,
    isLoading: profileLoading,
    refetch: refetchProfile,
  } = useGetUserProfile(accessToken)

  const { mutate: updateProfile, isPending: isUpdatingProfile } =
    useUpdateProfile(accessToken, {
      onSuccess: async () => {
        toast.success('Profile updated successfully ✅')
        await refetchProfile()
        await updateSession()
      },
      onError: (error: Error) =>
        toast.error(error.message || 'Failed to update profile ❌'),
    })

  const { mutate: updateProfileImage, isPending: isUpdatingImage } =
    useUpdateProfileImage(accessToken, {
      onSuccess: async () => {
        toast.success('Profile image updated successfully ✅')
        setImageFile(null)
        await refetchProfile()
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
      setUsername(profile.username || '')
      setEmail(profile.email || '')
      setPhoneNumber(profile.phoneNumber || '')
      setBio(profile.bio || '')
      setProfileImage(profile.profileImage || '')
      setImagePreview(profile.profileImage || '')
    }
  }, [profileData])

  const handleImageChange = (file: File) => {
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

  const handleUpdateProfile = () => {
    const profilePayload: UpdateProfileData = {
      fullName,
      username,
      phoneNumber,
      bio,
    }
    updateProfile(profilePayload)
  }

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

  const handleReset = () => {
    if (activeTab === 'profile') {
      if (profileData?.data) {
        const profile = profileData.data
        setFullName(profile.fullName || '')
        setUsername(profile.username || '')
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

  const handleLogout = async () => {
    try {
      await signOut({ redirect: true, callbackUrl: '/' })
      toast.success('Logged out successfully 👋')
    } catch (error) {
      toast.error('Logout failed, please try again ❌')
    }
  }

  if (profileLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    )
  }

  return (
    <div className="container min-h-[90vh] mx-auto py-6">
      {/* Header Section */}
      <div className="flex flex-col px-3 sm:flex-row justify-between items-start sm:items-center pt-20 lg:pt-28 gap-4">
        <div className="px-4">
          <h1 className="text-3xl font-bold text-[#5A8DEE] mb-2">Settings</h1>
          <p className="text-gray-600">
            Manage your account settings and preferences
          </p>
        </div>

        {/* Logout Button (Responsive) */}
        <Button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-[#E53E3E] hover:bg-[#cc3232] text-white font-medium px-4 py-2 rounded-lg transition-colors mx-4 sm:mx-0"
        >
          <LogOut size={20} />
          <span>Log Out</span>
        </Button>
      </div>

      {/* Settings Card */}
      <Card className="border-none shadow-none">
        <CardContent className="py-6">
          {/* Tabs */}
          <div className="flex border-b mb-6 overflow-x-auto">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
                activeTab === 'profile'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Personal Information
            </button>
            <button
              onClick={() => setActiveTab('password')}
              className={`px-6 py-3 font-medium transition-colors whitespace-nowrap ${
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
              <ProfileImageUpload
                imagePreview={imagePreview}
                fullName={fullName}
                isUpdating={isUpdatingImage}
                onImageChange={handleImageChange}
                onUpload={handleUploadProfileImage}
              />

              <ProfileForm
                fullName={fullName}
                setFullName={setFullName}
                username={username}
                setUsername={setUsername}
                email={email}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                bio={bio}
                setBio={setBio}
                isUpdating={isUpdatingProfile}
                onSubmit={handleUpdateProfile}
                onReset={handleReset}
              />
            </div>
          )}

          {/* Password Tab */}
          {activeTab === 'password' && (
            <PasswordForm
              oldPassword={oldPassword}
              setOldPassword={setOldPassword}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              isUpdating={isChangingPassword}
              onSubmit={handleChangePassword}
              onReset={handleReset}
            />
          )}
        </CardContent>
      </Card>
    </div>
  )
}
