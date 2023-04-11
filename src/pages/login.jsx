import Head from 'next/head'
import Link from 'next/link'

import { LockClosedIcon } from '@heroicons/react/20/solid'
import { LogoIcon } from '@/components/LogoIcon'
import { useLoginMutation } from '@/api/stormApi'
import { useRouter } from 'next/router'
import { useUser } from '@/contexts/UserContext'

export default function Login() {
  const [login, { isLoading }] = useLoginMutation()
  const { setUser } = useUser()
  const router = useRouter()

  async function handleSubmit(event) {
    event.preventDefault()

    const username = event.target.username.value
    const password = event.target.password.value

    try {
      const response = await login({ username, password }).unwrap()
      setUser({
        accessToken: response.access,
        user: response.user,
        refreshToken: response.refresh,
      })
      // Redirect the user to the dashboard or another authenticated page
      router.push('/dashboard')
      console.log('Login successful:', response)
    } catch (error) {
      console.error('Login failed:', error)
      // handle login failure, e.g. show an error message
    }
  }

  return (
    <>
      <Head>
        <title>Sign In - Storm</title>
      </Head>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Link href="/" aria-label="Home">
              <LogoIcon className="mx-auto h-16 w-auto" />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-700 dark:text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-slate-700 dark:text-white">
              Or{' '}
              <Link
                href="/register"
                className="font-medium text-indigo-500 hover:text-indigo-400"
              >
                start your 1-month free trial
              </Link>
            </p>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit}
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-400 dark:text-gray-300 sm:text-sm sm:leading-6"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-400 dark:text-gray-300 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-500 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-500 hover:text-indigo-400"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-600 group-hover:text-indigo-500"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
