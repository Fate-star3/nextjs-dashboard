'use client'

import ErrorPage from '@/app/components/base/ErrorPage'
import React, { useEffect } from 'react'

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return <ErrorPage />
}

export default Error
