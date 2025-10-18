import Link from 'next/link'

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-lg">Page not found — Unburdened</p>
        <Link href="/" className="mt-4 inline-block underline">
          Go home
        </Link>
      </div>
    </div>
  )
}
