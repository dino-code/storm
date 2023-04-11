import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import { Logo } from '@/components/Logo'
import { useRegisterUserMutation } from '@/api/stormApi'
import { useRouter } from 'next/router'
import { useUser } from '@/contexts/UserContext'
import GeneralInput from '@/components/GeneralInput'

export default function Register() {
  // Add this line
  const [registerUser, { isLoading }] = useRegisterUserMutation()
  const { setUser } = useUser()
  const [error, setError] = useState(null)
  const router = useRouter()
  // Add this function
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    try {
      const result = await registerUser(data).unwrap()
      // Handle successful registration, e.g., redirecting to a new page
      setUser({
        accessToken: result.access,
        user: result.user,
        refreshToken: result.refresh,
      })
      // Redirect the user to the dashboard or another authenticated page
      router.push('/dashboard')
      console.log('Login successful:', result)
    } catch (error) {
      // Handle registration error, e.g., displaying an error message
      console.log(error)
      setError(error.data)
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up - STORM</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col">
          <Link href="/" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="mt-20">
            <h2 className="text-lg font-semibold text-gray-900">
              Get started for free
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Already registered?{' '}
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:underline"
              >
                Sign in
              </Link>{' '}
              to your account.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2"
        >
          <TextField
            label="First name"
            id="first_name"
            name="first_name"
            type="text"
            autoComplete="given-name"
            required
          />
          <TextField
            label="Last name"
            id="last_name"
            name="last_name"
            type="text"
            autoComplete="family-name"
            required
          />
          <TextField
            className="col-span-full"
            label="Username"
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            error={error?.username}
            required
          />
          <TextField
            className="col-span-full"
            label="Email address"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
          <TextField
            className="col-span-full"
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
          <div className="col-span-full">
            <Button
              type="submit"
              variant="solid"
              color="indigo"
              className="w-full"
              disabled={isLoading}
            >
              <span>
                Sign up <span aria-hidden="true">&rarr;</span>
              </span>
            </Button>
          </div>
        </form>
      </AuthLayout>
    </>
  )
}
