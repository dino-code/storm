import clsx from 'clsx'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
]
const tiers = [
  {
    name: 'Static',
    id: 'tier-static',
    href: '/register',
    price: { monthly: 'Free', annually: 'Free' },
    description: 'Ideal for individuals and early-stage entrepreneurs.',
    features: [
      'Calendar email integration',
      'Basic Storm CRM',
      'Basic idea repository',
      'Incubator access',
    ],
  },
  {
    name: 'Spark',
    id: 'tier-spark',
    href: '/register',
    price: { monthly: '$10', annually: '$120' },
    description: 'A plan that scales with your rapidly growing business.',
    features: [
      'All Static Tier features',
      'Full access to the Storm CRM',
      'Enhanced idea repository',
      'Task management',
      'Document management',
      'Collaborative tools',
    ],
    mostPopular: true,
  },
  {
    name: 'Lightning',
    id: 'tier-lightning',
    href: '/register',
    price: { monthly: '$25', annually: '$300' },
    description: 'Optimized for established businesses and scaling ventures.',
    features: [
      'All Spark Tier features',
      'Financial management tools',
      'Analytics and reporting',
      'Market research resources',
      'AI-powered resource suggestions',
      'Priority customer support',
    ],
    mostPopular: false,
  },
]

export function Pricing() {
  const [frequency, setFrequency] = useState(frequencies[0])

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Simple pricing, for everyone.
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  clsx(
                    checked ? 'bg-indigo-500' : '',
                    'cursor-pointer rounded-full px-2.5 py-1'
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={clsx(
                tier.mostPopular
                  ? 'bg-white/5 ring-2 ring-indigo-500'
                  : 'ring-1 ring-white/10',
                'rounded-3xl p-8 xl:p-10'
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-white"
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-indigo-500 px-2.5 py-1 text-xs font-semibold leading-5 text-white">
                    Most Useful
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">
                  {tier.price[frequency.value]}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-300">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={clsx(
                  tier.mostPopular
                    ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500'
                    : 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                )}
              >
                Buy plan
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-white"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* 


export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className=" py-20 sm:py-32">
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight dark:text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute left-0 top-1/2 h-[1em] w-full fill-yellow-300/30" />
              <span className="relative text-indigo-600">Simple pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg dark:text-white">
            Whether you're an individual looking to track their efforts, or a
            budding startup looking to get organized, our tools will help you
            get organized.
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <Plan
            name="Static Tier"
            price="Free"
            description="Ideal for individuals and early-stage entrepreneurs."
            href="/register"
            features={[
              'Calendar email integration',
              'Basic Storm CRM',
              'Basic idea repository',
              'Incubator access',
            ]}
          />
          <Plan
            featured
            name="Spark Tier"
            price="$10/month"
            description="Perfect for small businesses and growing startups."
            href="/register"
            features={[
              'All Static Tier features',
              'Full access to the Storm CRM',
              'Enhanced idea repository',
              'Task management',
              'Document management',
              'Collaborative tools',
            ]}
          />

          <Plan
            name="Lightning Tier"
            price="$25/month"
            description="Optimized for established businesses and scaling ventures."
            href="/register"
            features={[
              'All Spark Tier features',
              'Financial management tools',
              'Analytics and reporting',
              'Market research resources',
              'AI-powered resource suggestions',
              'Priority customer support',
            ]}
          />
        </div>
      </Container>
    </section>
  )
}

*/
