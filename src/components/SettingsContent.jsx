import clsx from 'clsx'
import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useAuth } from '@/hooks/auth'

const SettingsContent = () => {
  const user = useAuth()
  const [automaticTimezoneEnabled, setAutomaticTimezoneEnabled] = useState(true)
  const [autoUpdateApplicantDataEnabled, setAutoUpdateApplicantDataEnabled] =
    useState(false)
  const tabs = [
    { name: 'Profile', href: '#', current: true },
    { name: 'Password', href: '#', current: false },
    { name: 'Notifications', href: '#', current: false },
    { name: 'Plan', href: '#', current: false },
    { name: 'Billing', href: '#', current: false },
    { name: 'Team Members', href: '#', current: false },
  ]

  const use = {
    username: 'dinobecaj',
    email: 'dbecaj1@gmail.com',
    first_name: 'Dino',
    last_name: 'Becaj',
    userprofile: {
      id: 1,
      tier: 'LIGHTNING',
      profile_picture: null,
      phone_number: null,
      company_name: null,
      job_title: null,
      bio: '',
      social_media_links: null,
    },
  }

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="pb-16 pt-10">
        <div className="px-4 sm:px-6 lg:px-0">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Settings
          </h1>
        </div>
        <div className="px-4 sm:px-6 lg:px-0">
          <div className="py-6">
            {/* Tabs */}
            <div className="lg:hidden">
              <label htmlFor="selected-tab" className="sr-only">
                Select a tab
              </label>
              <select
                id="selected-tab"
                name="selected-tab"
                className="mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                defaultValue={tabs.find((tab) => tab.current).name}
              >
                {tabs.map((tab) => (
                  <option key={tab.name}>{tab.name}</option>
                ))}
              </select>
            </div>
            <div className="hidden lg:block">
              <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                  {tabs.map((tab) => (
                    <a
                      key={tab.name}
                      href={tab.href}
                      className={clsx(
                        tab.current
                          ? 'border-purple-500 text-purple-500'
                          : 'border-transparent text-slate-900 hover:border-slate-200 hover:text-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:text-slate-400',
                        'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium'
                      )}
                    >
                      {tab.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            {/* Description list with inline editing */}
            <div className="mt-10 divide-y divide-gray-200">
              <div className="space-y-1">
                <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-white">
                  Profile
                </h3>
                <p className="max-w-2xl text-sm text-slate-900 dark:text-white">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
              <div className="mt-6">
                <dl className="divide-y divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium text-slate-900 dark:text-slate-300">
                      Name
                    </dt>
                    <dd className="mt-1 flex text-sm text-slate-900 dark:text-white sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">{`${user?.user?.first_name} ${user?.user?.last_name}`}</span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-medium text-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-black"
                        >
                          Update
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                    <dt className="text-sm font-medium text-slate-900 dark:text-slate-300">
                      Photo
                    </dt>
                    <dd className="mt-1 flex text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </span>
                      <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                        <button
                          type="button"
                          className="rounded-md bg-white font-medium text-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-black"
                        >
                          Update
                        </button>
                        <span className="text-gray-300" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-white font-medium text-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-black"
                        >
                          Remove
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                    <dt className="text-sm font-medium text-slate-900 dark:text-slate-300">
                      Email
                    </dt>
                    <dd className="mt-1 flex text-sm text-slate-900 dark:text-white sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">
                        {`${user?.user?.email}`}
                      </span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-medium text-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-black"
                        >
                          Update
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5">
                    <dt className="text-sm font-medium text-slate-900 dark:text-slate-300">
                      Job title
                    </dt>
                    <dd className="mt-1 flex text-sm text-slate-900 dark:text-white sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">{`${
                        user?.user?.job_title ? user.user.job_title : ''
                      }`}</span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-medium text-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-black"
                        >
                          Update
                        </button>
                      </span>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-10 divide-y divide-gray-200">
              <div className="space-y-1">
                <h3 className="text-lg font-medium leading-6 text-slate-900 dark:text-white">
                  Account
                </h3>
                <p className="max-w-2xl text-sm text-slate-900 dark:text-slate-300">
                  Manage how information is displayed on your account.
                </p>
              </div>
              <div className="mt-6">
                <dl className="divide-y divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
                    <dt className="text-sm font-medium text-slate-900 dark:text-slate-300">
                      Language
                    </dt>
                    <dd className="mt-1 flex text-sm text-slate-900 dark:text-white sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">English</span>
                      <span className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="rounded-md bg-white font-medium text-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-black"
                        >
                          Update
                        </button>
                      </span>
                    </dd>
                  </div>
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5">
                    <dt className="text-sm font-medium text-slate-900 dark:text-slate-300">
                      Date format
                    </dt>
                    <dd className="mt-1 flex text-sm text-slate-900 dark:text-white sm:col-span-2 sm:mt-0">
                      <span className="flex-grow">DD-MM-YYYY</span>
                      <span className="ml-4 flex flex-shrink-0 items-start space-x-4">
                        <button
                          type="button"
                          className="rounded-md bg-white font-medium text-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-black"
                        >
                          Update
                        </button>
                        <span className="text-gray-300" aria-hidden="true">
                          |
                        </span>
                        <button
                          type="button"
                          className="rounded-md bg-white font-medium text-purple-500 hover:text-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:bg-black"
                        >
                          Remove
                        </button>
                      </span>
                    </dd>
                  </div>
                  <Switch.Group
                    as="div"
                    className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:pt-5"
                  >
                    <Switch.Label
                      as="dt"
                      className="text-sm font-medium text-slate-900 dark:text-slate-300"
                      passive
                    >
                      Automatic timezone
                    </Switch.Label>
                    <dd className="mt-1 flex text-sm text-slate-900 dark:text-white sm:col-span-2 sm:mt-0">
                      <Switch
                        checked={automaticTimezoneEnabled}
                        onChange={setAutomaticTimezoneEnabled}
                        className={clsx(
                          automaticTimezoneEnabled
                            ? 'bg-purple-600'
                            : 'bg-gray-200',
                          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={clsx(
                            automaticTimezoneEnabled
                              ? 'translate-x-5'
                              : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                    </dd>
                  </Switch.Group>
                  <Switch.Group
                    as="div"
                    className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200 sm:py-5"
                  >
                    <Switch.Label
                      as="dt"
                      className="text-sm font-medium text-slate-900 dark:text-slate-300"
                      passive
                    >
                      Auto-update applicant data
                    </Switch.Label>
                    <dd className="mt-1 flex text-sm text-slate-900 dark:text-white sm:col-span-2 sm:mt-0">
                      <Switch
                        checked={autoUpdateApplicantDataEnabled}
                        onChange={setAutoUpdateApplicantDataEnabled}
                        className={clsx(
                          autoUpdateApplicantDataEnabled
                            ? 'bg-purple-600'
                            : 'bg-gray-200',
                          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-auto'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={clsx(
                            autoUpdateApplicantDataEnabled
                              ? 'translate-x-5'
                              : 'translate-x-0',
                            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                          )}
                        />
                      </Switch>
                    </dd>
                  </Switch.Group>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsContent
