import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/client'
import Link from 'next/link'

function index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message}</div>
  }
  if (user) {
    return <div>
      <p>Welcome {user.name}!</p>
      <Link href="/api/auth/logout">Logout</Link>
      
    </div>
  }
  return (
    <Link href="/api/auth/login">Login</Link>
  )
}

export default index