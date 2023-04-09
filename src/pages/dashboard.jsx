import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/UnauthenticatedHeader'
import AuthenticatedPage from '@/components/AuthenticatedPage'
import ApplicationShell from '@/components/ApplicationShell'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Storm - App</title>
        <meta
          name="description"
          content="No more keeping track of emails, appointments, contacts, and leads. We provide the tools you need to focus on changing the world."
        />
      </Head>
      <main>
        <ApplicationShell>
          <p>Welcome</p>
        </ApplicationShell>
      </main>
    </>
  )
}
