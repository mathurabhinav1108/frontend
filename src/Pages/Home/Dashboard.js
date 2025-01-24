import React from 'react'
import AuthLayout from '../../Layout/AuthLayout'

export default function Dashboard() {
  return (
    <AuthLayout>
    <div className="flex justify-center items-center">
      <h1 className="text-4xl font-semibold text-red-600">Hello, Welcome to Tailwind CSS with React!</h1>
    </div>
    </AuthLayout>
  )
}
