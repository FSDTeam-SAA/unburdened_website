interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side Gradient Background */}
      <div
        className="hidden md:flex items-center justify-center"
        style={{
          width: '100%',
          height: '100%',
          opacity: 0.8,
          background:
            'linear-gradient(281.69deg, #1E449E -0.29%, #5376C9 48.99%, #1D397D 101.56%)',
        }}
      ></div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center px-5">
        <div className="w-full max-w-xl">{children}</div>
      </div>
    </div>
  )
}
