// ==================== FILE: _components/PasswordForm.tsx ====================
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2, Eye, EyeOff } from 'lucide-react'

interface PasswordFormProps {
  oldPassword: string
  setOldPassword: (value: string) => void
  newPassword: string
  setNewPassword: (value: string) => void
  confirmPassword: string
  setConfirmPassword: (value: string) => void
  isUpdating: boolean
  onSubmit: () => void
  onReset: () => void
}

export function PasswordForm({
  oldPassword,
  setOldPassword,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  isUpdating,
  onSubmit,
  onReset,
}: PasswordFormProps) {
  const [showOldPassword, setShowOldPassword] = React.useState(false)
  const [showNewPassword, setShowNewPassword] = React.useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

  const fields = [
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
  ]

  return (
    <div className="space-y-6 max-w-md">
      {fields.map((field) => (
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
            'Change Password'
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
