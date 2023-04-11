import Head from 'next/head'

import ApplicationShell from '@/components/ApplicationShell'
import SettingsContent from '@/components/SettingsContent'

export default function Settings() {
  return (
    <>
      <Head>
        <title>Storm - Settings</title>
        <meta
          name="description"
          content="No more keeping track of emails, appointments, contacts, and leads. We provide the tools you need to focus on changing the world."
        />
      </Head>
      <main>
        <ApplicationShell>
          <SettingsContent />
        </ApplicationShell>
      </main>
    </>
  )
}
