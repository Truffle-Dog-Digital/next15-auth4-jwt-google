'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <button
        className="fixed top-4 right-4 px-4 py-2 rounded-md bg-gray-100 text-gray-400 border border-gray-200"
        disabled
      >
        Loading...
      </button>
    )
  }

  if (session) {
    return (
      <button
        onClick={() => signOut()}
        className="fixed top-4 right-4 px-4 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 border border-gray-200 transition-colors"
      >
        Sign out
      </button>
    )
  }

  return (
    <button
      onClick={() => signIn('google')}
      className="fixed top-4 right-4 px-4 py-2 rounded-md bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 transition-colors"
    >
      Sign in
    </button>
  )
} 