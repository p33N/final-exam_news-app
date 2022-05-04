import useRouter from 'next/router'
import React from 'react'

export const SignInButton: React.FC = () => {
  const router = useRouter

  return <button onClick={() => router.push('auth/signin')}>Sign In</button>
}
